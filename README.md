# ITEC 85 Inventory System

## Technology

- HTML, CSS, JavaScript
- PHP with PDO
- SQLite

## Requirements

- PHP with PDO SQLite enabled
- A modern browser

## Run locally

1. Clone the repository and open its folder.
2. In a Bash terminal, create a private one-time setup key and start PHP:

   ```bash
   export INVENTORY_SETUP_KEY="$(php -r 'echo bin2hex(random_bytes(32));')"
   printf 'One-time setup key: %s\n' "$INVENTORY_SETUP_KEY"
   php -S 127.0.0.1:8080
   ```

3. Open `http://127.0.0.1:8080`.
4. Choose **Set up the first administrator** and enter the setup key from that terminal session, your account details, and a password of at least 12 characters.
5. After setup, remove `INVENTORY_SETUP_KEY` from the server environment. The setup route is disabled once an administrator account has a password.

The database is created or updated at `database/inventory.sqlite`. You can inspect it with the SQLite and SQLite Viewer extensions in VS Code.

If the database already contains the earlier sample accounts, the first security migration removes their shared sample passwords and marks those rows inactive. Use the one-time setup screen to create or activate the first administrator. The sample staff rows are demonstration data and cannot sign in until account password assignment is implemented.

The PHP built-in server is for local development and testing. Use a properly configured production web server and HTTPS before deployment.
