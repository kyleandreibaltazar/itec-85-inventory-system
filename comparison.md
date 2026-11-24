# Comparison with `origin/main`

## Scope

`test-secure` was created from the same baseline commit as `origin/main` (`f0726dc` at the time of comparison). This document compares the implementation changes prepared on the branch with that baseline. It covers the PHP API, browser interface, setup instructions, and the intentional local database update.

## Security differences

| Area | `origin/main` baseline | `test-secure` |
| --- | --- | --- |
| Administrator setup | The login interface showed sample credentials, and the API could create a default administrator during login. | Removes the built-in sign-in details and requires a one-time `INVENTORY_SETUP_KEY` to create the first administrator. The legacy sample passwords are cleared and sample accounts disabled. |
| Passwords and login | Password verification existed, but there was no failed-login limit and the default account path weakened it. | New passwords are hashed with PHP's password hashing functions, require at least 12 characters, and failed attempts are limited per email and hashed client address. |
| Sessions | Authentication used a PHP session without the new cookie restrictions, timeout, or activity re-check. | Uses strict, cookie-only sessions; HTTP-only and SameSite Strict cookies; Secure cookies when HTTPS is detected; session ID rotation; a 30-minute idle timeout; and active-account checks. |
| Request integrity | POST requests did not require a CSRF token. | Each POST requires the session's CSRF token. JSON content type and request data are validated on the server. |
| Permissions | Authentication was the main API boundary; write operations did not have the new role matrix. | The API checks roles for each protected write. Viewers are read-only; administrator-only operations include settings, account creation/removal, and approvals. |
| Browser and error handling | No equivalent response-header set or generic server-error handling was present. | Adds content security, frame, content-type, referrer, and permissions policies; API responses are non-cacheable; unexpected server errors are logged and returned without database details. |
| Account access | The API returned user records in the general bootstrap response. | Only administrators receive the user list. Administrators can remove other accounts, but cannot remove themselves or the last active administrator. |
| Input and data safety | Several checks relied on browser behavior, and image content was not verified on the server. | The API validates field types, lengths, roles, quantities, and uploaded PNG/JPEG content and size. Database values use prepared statements. |

## Feature and workflow differences

- **First-run setup:** Adds an administrator setup form and documents local setup in [README.md](./README.md).
- **Role-aware interface:** Navigation and controls reflect the signed-in user's role. The API remains the actual authorization boundary.
- **Account management:** Adds administrator account creation and removal, with confirmation and safeguards against removing the current or final active administrator.
- **Stock integrity:** Stock changes and their transaction records are committed together. Existing product quantities can only change through stock transactions; non-zero opening stock creates an audit transaction.
- **Approval settings:** The API enforces the stock-out approval preference, regardless of the status selected by the browser, and prevents duplicate approvals from changing stock twice.
- **Usability and exports:** Uses current dates, displays the actual signed-in user, removes a nonfunctional “Remember me” control, corrects the unavailable password-reset message, and protects CSV text from spreadsheet formula execution.
- **Documentation and data:** Adds [howItWorks.md](./howItWorks.md), [quickRead.md](./quickRead.md), and [test-secure-changes.md](./test-secure-changes.md). The branch also includes the intentional update to `database/inventory.sqlite`; that binary data change is separate from application logic.

The original inventory pages, product/category concepts, transactions, reports, and settings remain. The changes mainly add missing setup, authorization, validation, and audit-integrity behavior around those workflows rather than replacing them.

## Remaining limits

This is a subject-compliance prototype, not a production security certification. Password reset and password change are not implemented; transaction records do not identify the staff member who performed each action; and there is no backup/restore workflow. Login throttling is a simple per-email and client-address mechanism, not a distributed defense. The first-setup key should be long and random, and first setup should not be exposed unnecessarily. HTTPS and correct web-server or reverse-proxy configuration are still required for deployment; the PHP built-in server is intended only for local development.

## Summary

Compared with `origin/main`, `test-secure` substantially reduces the baseline's default-account, missing-CSRF, and missing-role-check risks and makes stock workflows more reliable. It remains a prototype with operational and account-recovery gaps, so it should not be represented as production-ready.
