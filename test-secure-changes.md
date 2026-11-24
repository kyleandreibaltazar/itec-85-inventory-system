# Security and Feature Changes

Branch: `test-secure`

## What was missing

The original implementation had a shared administrator password in source and the login page, no server-side role checks, no CSRF protection, no login throttling, and no strong session-cookie or inactivity settings. Several input limits were enforced only in the browser. The stock update and its audit entry were also separate database operations, stock-out approval preferences were not enforced by the API, and the date helper returned a fixed date.

The browser also showed a “Remember me” checkbox that did not change session behavior and a password-reset message that claimed a link had been sent even though no reset service existed.

## Implemented

### First administrator setup and account passwords

- Removed the prefilled sign-in credentials and shared seed password.
- Added first-administrator setup with a one-time `INVENTORY_SETUP_KEY` set in the server environment.
- Requires a valid email address and a password of at least 12 characters.
- Setup runs as a single database transaction and can activate an existing migrated user record.
- Setup closes once an active administrator has a password.
- Seed accounts are inactive, have no password, and cannot sign in. The current interface does not yet include a password reset or existing-account password assignment workflow.
- Administrators can remove accounts from User Management. The API prevents self-removal and removal of the last active administrator; removing an account does not delete inventory or transaction records.
- New staff accounts must choose a password of at least 12 characters; the API hashes it using PHP's password hashing functions.
- The database migration clears passwords and marks the old sample user IDs `u1` through `u5` inactive once.
- Login attempts are limited to five failures per email and hashed client address within 15 minutes. A matching pair is paused for 15 minutes.

### Session and request protections

- Enables strict, cookie-only PHP sessions.
- Sets session cookies to HTTP-only and SameSite Strict; Secure is enabled when the direct request uses HTTPS.
- Expires active sessions after 30 minutes without activity and verifies that the account remains active.
- Regenerates the session ID after login and first-admin setup.
- Adds per-session CSRF tokens, returned by the session check and required in `X-CSRF-Token` for every POST request.
- Adds Content Security Policy, frame, content-type, referrer, and permissions headers. API responses are marked `no-store`; HTTPS HTML responses receive HSTS.
- Returns a generic server error to the browser and logs the exception on the server instead of returning database exception details.

### Authorization

The API now checks the signed-in role for write operations:

| Operation | Allowed roles |
| --- | --- |
| Create, edit, or delete products | Administrator, Inventory Staff |
| Add categories | Administrator, Inventory Staff |
| Record stock adjustments and transactions | Administrator, Inventory Staff, Custodian, Lab Technician |
| Approve pending transactions | Administrator |
| Create or remove staff accounts and save settings | Administrator |

The interface hides navigation and controls that do not apply to a role. Server checks remain the actual permission boundary.
Only administrators receive the user list in the bootstrap response.

### Data integrity and application behavior

- Validates JSON content type, field types, field lengths, allowed transaction values, emails, roles, and whole-number quantities on the server.
- Validates uploaded image data on the server as an actual PNG or JPEG under 5 MB; the browser also enforces the size limit.
- Makes stock changes and transaction inserts part of one database transaction and checks available stock in the update itself.
- Makes pending-transaction approval update stock and transaction status together, and prevents duplicate approvals from changing stock twice.
- Prevents editing an existing product's quantity outside a stock transaction. New products with an opening quantity receive an initial Stock In audit record.
- Enforces the `requireApprovalStockOut` setting in the API, regardless of the status selected in the form.
- Uses the actual current date rather than a fixed display date.
- Prevents spreadsheet formula execution in exported text fields.
- Shows the real current user's name and role in the top bar.
- Uses role-aware controls for inventory actions and transaction approvals.
- Removes the nonfunctional “Remember me” checkbox. Password reset is clearly described as unavailable instead of reporting a false success.
- Allows `INVENTORY_DB_PATH` to select an alternate database file for isolated local testing.

## First run and existing databases

See [README.md](./README.md) for the local setup command. Generate a temporary setup key, set it as `INVENTORY_SETUP_KEY`, open the first-run form, and submit that key with the new administrator's details. After creation, stop the local server and remove the variable. The setup endpoint also refuses to create another administrator once setup has completed.

On the first API request after this change, the schema migration clears password hashes for sample account IDs `u1`–`u5` and marks them inactive. Existing inventory records remain intact. Create an administrator through the setup flow before continuing to use the application. The sample staff rows are inactive and for display only until account management includes a password assignment workflow.

## Remaining work / boundaries

- Password reset is still not implemented; users must contact an administrator.
- There is no password-change, account-deactivation, or account-reactivation workflow yet.
- There is no transaction audit field recording which signed-in user performed each action.
- Role permissions are fixed in the PHP code.
- The project still stores images in SQLite and has no backup/restore or retention workflow.
- HTTPS is an operational deployment requirement. The PHP built-in server is for local development only.
- HSTS and Secure cookie behavior require PHP to see a direct HTTPS request. Deployments behind a reverse proxy must configure trusted HTTPS forwarding correctly.
- The login limit is a simple per-IP-and-email throttle, not a distributed authentication defense.

## Verification

- `php -l index.php` and `php -l api.php` passed.
- `node --check assets/js/app.js` passed.
- `git diff --check` passed.
- Isolated API checks passed for first-admin setup, session cookies, CSRF rejection, role enforcement, sign-in throttling, settings-enforced pending stock-outs, approval idempotence, image validation, and logout followed by login.
- Account-removal API checks passed for removing inactive and active accounts, rejecting self-removal and last-active-administrator removal, denying Viewer access, and revoking a removed user's next authenticated request.
- Product workflow checks passed for opening-stock audit entries, rejecting untracked quantity edits, and allowing ordinary product edits.
- A copied legacy SQLite database retained its inventory rows while the migration cleared the old sample passwords and required first-admin setup.
- Browser smoke checks passed for first-admin creation, login persistence, administrator UI, and Viewer role navigation and controls.
- Browser verification confirmed the signed-in administrator has no Remove action for their own row; another account's confirmation removed it and refreshed the account list.
