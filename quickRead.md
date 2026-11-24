# Security Quick Read

The application enforces security checks in the PHP API, not only in the browser interface.

## Sign-in and sessions

- Passwords are stored as PHP password hashes and checked at sign-in.
- First administrator setup requires the server-side `INVENTORY_SETUP_KEY` and a password of at least 12 characters. There is no built-in default administrator password.
- The old sample accounts are disabled and their password hashes are cleared.
- Sign-in attempts are limited: five failures for an email and hashed client address within 15 minutes trigger a 15-minute pause.
- Sessions use strict, cookie-only settings, HTTP-only and SameSite Strict cookies, and Secure cookies when PHP detects HTTPS. Session IDs change at sign-in, sessions expire after 30 minutes idle, and the API checks that the account is still active.

## Requests and permissions

- Every POST request requires a session-specific CSRF token.
- The API validates JSON, field types and lengths, allowed values, and quantities. Uploaded images must be real PNG or JPEG files under 5 MB.
- Server-side role checks protect write routes. Administrators can manage accounts and settings; other roles have narrower inventory permissions, and Viewers are read-only.
- Only administrators receive the user list. Account removal cannot remove the signed-in administrator or the last active administrator.

## Data and browser protections

- User-provided database values use prepared statements.
- Stock changes and their transaction records are committed together. The API also enforces stock-out approval settings and prevents duplicate approvals from changing stock twice.
- Responses use security headers, including Content Security Policy, frame protection, and content-type protection. API responses are marked non-cacheable. Unexpected server errors are logged and returned as generic errors.

## Deployment limits

Use HTTPS and a properly configured production web server; PHP's built-in server is for local development. Secure-cookie and HSTS behavior depends on PHP detecting HTTPS, including correct configuration behind a reverse proxy. Password reset, password changes, transaction actor auditing, and backup/restore are not implemented.
