# How the ITEC 85 Inventory System Works

## Quick overview

This project is a browser-based inventory system for a university. It has three main parts:

1. `index.php` creates the visible page and contains the login screen and application shell.
2. `assets/js/app.js` controls the screens, forms, local display state, and requests to the server.
3. `api.php` checks authentication, reads and changes inventory records, and returns JSON data.

The database is `database/inventory.sqlite`. It is a SQLite database with one table for categories, one for products, one for transactions, one for users, and one for saved settings.

The normal request flow is:

```text
Browser screen
    -> JavaScript function
    -> POST or GET request to api.php
    -> PHP route in api.php
    -> SQLite database
    -> JSON response
    -> JavaScript updates appState
    -> Screen is rendered again
```

The PHP built-in server is the intended way to run the project:

```text
php -S 127.0.0.1:8080
```

After that, open `127.0.0.1:8080` in a browser.

---

# index.php

## What it does

`index.php` provides the main HTML document. It loads the logo, stylesheet, JavaScript file, login screen, application layout, modal container, and toast notification container.

It does not contain inventory calculations or database queries. JavaScript performs the application work after the page loads.

## Parts

### Page metadata and assets

The document:

- Sets the page title to “CvSU Inventory Management System.”
- Uses `assets/logo.png` as the favicon.
- Loads `assets/css/styles.css`.
- Loads `assets/js/app.js?v=20261121g`.
- Uses a cache-busting version suffix on the JavaScript URL.

### Login view

The login view is the element with the ID `login-view`.

It contains:

- The university logo and system name.
- A short description of the system.
- The administrator sign-in form.
- Email and password inputs.
- A forgot-password button.
- A password visibility button.
- A sign-in submit button.

The login fields start empty. There is no built-in administrator password. On a new or migrated database, the first administrator must be created with the setup form and a server-side one-time setup key.

The password eye button is handled by JavaScript. It changes the password input between password and plain-text display modes.

The login form is marked `novalidate`, so JavaScript controls the basic empty-field check instead of relying on the browser.

### Application view

The application view is the element with the ID `app-view`. It is hidden until a valid PHP session is detected or login succeeds.

It contains:

- `sidebar-overlay`: closes the mobile sidebar when clicked.
- `sidebar`: contains the navigation menu and sign-out button.
- `sidebar-nav`: is filled with navigation buttons by JavaScript.
- `topbar`: contains the page title, global search, notification button, profile button, and mobile menu button.
- `page-content`: is filled with the currently selected page.

The profile button currently navigates to Settings. The notification button opens low-stock alerts.

### Shared temporary UI areas

The page also contains:

- `modal-root`: holds dialogs such as stock adjustment, category creation, user creation, and command search.
- `toast-stack`: holds temporary success, warning, and error messages.

These containers start empty and are populated by `assets/js/app.js`.

---

# assets/css/styles.css

## What it does

`assets/css/styles.css` defines the entire visual layout and responsive behavior.

It is not responsible for data or application decisions. It only controls appearance and element layout.

## Main sections

The stylesheet contains these general areas:

### CSS variables

The `:root` section defines shared colors, text colors, surfaces, borders, shadows, and corner sizes.

Examples include:

- Navy colors for the sidebar and primary buttons.
- Green styles for successful and in-stock states.
- Amber styles for low stock and pending states.
- Red styles for out-of-stock and delete actions.

### Utilities and buttons

This section defines:

- The `.hidden` rule.
- Primary, secondary, soft, danger, and small buttons.
- Status badges.
- Card surfaces.
- Shared box sizing and text rendering.

### Login layout

This section styles:

- The two-column login screen.
- The logo and campus description.
- Login fields and password icons.
- The sign-in card.
- The “Remember me” and forgot-password controls.

### Sidebar and top bar

This section defines:

- Sidebar width and fixed layout.
- Navigation item appearance.
- The active page indicator.
- The top bar.
- Search, notification, and profile controls.

### Page and table layout

This section defines:

- Page headers.
- Dashboard cards and metric cards.
- Table headers and rows.
- Inventory filters.
- Pagination.
- Low-stock cards.
- Categories and reports.

### Forms and uploads

This section styles:

- Text fields, number fields, selects, and text areas.
- Invalid field borders.
- Stock and location form grids.
- Product image upload drop areas.
- Preview images.
- Tips and information panels.

### Mobile behavior

Near the end of the stylesheet, media queries change the layout for smaller screens.

Important behavior:

- Below 1180 pixels, dashboard and form grids become one column.
- Below 900 pixels, the sidebar becomes a slide-out drawer.
- A sidebar overlay appears behind the open drawer.
- Below 640 pixels, grids become one column and the desktop search control is hidden.

---

# assets/js/app.js

## What it does

`assets/js/app.js` controls the entire front-end application. It stores display data, decides what appears on each page, attaches click and submit events, sends API requests, and converts server responses into visible updates.

The file has no separate framework. It uses browser JavaScript, DOM elements, `fetch`, and template strings.

## 1. Icon library

### `ICONS`

`ICONS` is an object of inline SVG strings.

It provides icons for boxes, keyboards, monitors, projectors, mice, network devices, users, reports, settings, warning states, and common controls.

### `hydrateIcons(root)`

This function searches an area of the page for elements with a `data-icon` attribute.

For each matching element, it inserts the SVG stored under the matching key in `ICONS`.

It is called at startup and after page rendering so icons remain present when JavaScript replaces the HTML.

## 2. Initial data and application state

### `INITIAL_PRODUCTS`

This is a JavaScript copy of example inventory products.

Each product includes:

- ID
- Name
- SKU
- Category
- Location
- Quantity
- Minimum stock level
- Unit
- Last-updated text
- Icon name
- Description
- Optional image

### `INITIAL_TRANSACTIONS`

This is an example list of stock-in and stock-out records.

### `INITIAL_CATEGORIES`

This is an example list of category cards.

### `LOCATIONS`

This is the fixed list used in location filters and product forms.

### `INITIAL_USERS`

This is example staff and account data.

### `appState`

`appState` is the main in-memory state used by the interface. It includes:

- Whether the user is marked as authenticated in the browser.
- The current page.
- Product, category, user, and transaction arrays.
- Search values and filters.
- Inventory pagination.
- Selected product IDs.
- The open row menu.
- The add/edit product draft.
- Uploaded image data.
- Saved settings.

The JavaScript initial state begins with the built-in example arrays. Once the API bootstrap succeeds after login, the database values replace these arrays.

## 3. Basic calculations and helpers

### `getStatus(product)`

Returns:

- `Out of Stock` when quantity is zero or less.
- `Low Stock` when quantity is below the minimum level.
- `In Stock` otherwise.

### `getLowStockProducts()`

Returns every product whose quantity is below its minimum level.

### `getMetrics()`

Calculates dashboard totals:

- Total products.
- Total available stock units.
- Low-stock item count.
- Total transactions.
- Category count.

### `formatNumber(num)`

Formats numbers using the `en-US` number format.

### `todayFormatted()`

Returns the current date in the browser's locale, for display in forms.

### `escapeHtml(str)`

Converts characters that have meaning in HTML into safe text forms.

It protects dynamically inserted text from being interpreted as markup.

### `showToast(message, tone)`

Creates a temporary notification in `toast-stack`.

The tone can change the message dot:

- Success: green.
- Warning: amber.
- Error: red.

The notification automatically disappears after about three seconds.

## 4. Navigation and page rendering

### `NAV_ITEMS`

Lists the sidebar destinations:

- Dashboard
- Inventory
- Stock In
- Stock Out
- Transactions
- Categories
- User Management
- Reports
- Settings

### `navigate(page, options)`

Changes `appState.currentPage`, closes a mobile drawer, refreshes the sidebar and title, renders the selected page, and scrolls to the top.

It also handles reset options for product editing and inventory status/category filters.

### `renderSidebar()`

Builds the sidebar buttons from `NAV_ITEMS`.

It marks the current page as active and adds a product-count badge to Inventory.

### `renderTopbar()`

Updates the top-bar title and shows or hides the notification dot based on low-stock count.

### `renderPage()`

The central page dispatcher. It examines `appState.currentPage` and calls the matching renderer.

After inserting a page's HTML, it calls `hydrateIcons()` for that page.

## 5. Page renderers

### `renderDashboard(container)`

Displays:

- Welcome header.
- Date range control.
- Add-new-item control.
- Four metrics.
- Recent inventory activity.
- Low-stock items.
- Dashboard activity filters and pagination.

The low-stock review control changes to Inventory with `Low Stock` selected.

### `getFilteredInventory()` and `renderInventory(container)`

`getFilteredInventory()` combines:

- Product name search.
- SKU search.
- Location search.
- Category filter.
- Location filter.
- Stock-status filter.

`renderInventory(container)` displays the resulting records with checkboxes, pagination, and row actions.

Row actions can:

- Quick Stock In.
- Quick Stock Out.
- Edit product.
- Delete product.

Bulk deletion sends one delete request for each selected product ID.

### `renderAddProduct(container)`

Displays the Add or Edit Product form.

Its functions include:

- Required-field checking.
- Initial quantity and minimum-level entry.
- Read-only current quantity when editing; use a Stock In/Stock Out flow to make auditable quantity changes.
- Category and location selection.
- PNG or JPG image selection and preview.
- Drag-and-drop image selection.
- Removal of an attached image.
- Saving or updating through `product-save`.

Image validation is performed in the browser. The user interface accepts PNG and JPG files, but the file size note is not enforced by the API.

### `renderStockMovement(container, mode)`

Displays a form for either Stock In or Stock Out.

The form accepts:

- Product.
- Quantity.
- Reference or requisition number.
- Completed or Pending status.
- Notes.

Submitting sends `transaction-save`.

- `Completed` transactions immediately update stock.
- `Pending` transactions create a log entry but do not change stock until approved.

### `renderTransactionsPage(container)`

Displays all transaction records with item, reference, quantity, date, status, and approval action.

It supports:

- Text search.
- Type filtering.
- Status filtering.
- Approval of Pending transactions.

Approval sends `transaction-approve`, which then changes the product quantity and marks the transaction Completed.

### `renderCategoriesPage(container)`

Displays category cards and calculates each category's:

- Number of records.
- Total quantity.

The `View items` button filters Inventory by that category.

The Add Category button opens a modal and submits `category-save`.

### `renderUsersPage(container)`

Displays the staff table and account details.

The Add Staff Account button opens a modal. The modal requires a name, email, initial password, department, and role, then submits `user-save`. Each other account has a Remove button that asks for confirmation before submitting `user-delete`; the signed-in account has no remove button.

### `renderReportsPage(container)`

Calculates and displays:

- Stock units by category.
- Active SKU count.
- Total stock units.
- Low-stock count.
- Pending-approval count.

The Download Report button exports the displayed product rows as CSV.

### `renderSettingsPage(container)`

Displays:

- Campus name.
- Default minimum stock threshold.
- Automatic low-stock highlighting.
- Requirement for administrator approval on Stock Out.

Saving sends `settings-save`. The API stores the values in the SQLite `settings` table.

## 6. Dialogs and exports

### `closeModal()`

Removes all dialog HTML from `modal-root`.

### `openQuickAdjustModal(productId, defaultType)`

Opens a small Stock In or Stock Out dialog for one product.

It sends `adjust-stock` with:

- Product ID.
- Movement type.
- Quantity.
- Reference.
- Date.
- Note.

Quick adjustments are always immediately completed.

### `deleteProduct(id)`

Deletes one product through `product-delete`, refreshes the application data, and removes the selected ID if needed.

### `openAddCategoryModal()`

Opens the category form and sends `category-save`.

### `openAddUserModal()`

Opens the staff-account form and sends `user-save`.

The browser requires at least 12 password characters before submission.

The Remove button handler asks for confirmation and sends `user-delete`. On success, the account list is refreshed. An administrator cannot remove their own account or the last active administrator. Removing an account does not delete inventory or transaction records.

### `openCommandPalette()`

Opens global search.

It searches both workspace pages and products, based on:

- Page labels.
- Product name.
- SKU.
- Storage location.

Selecting a product moves to Inventory and places the SKU in the inventory search field. Selecting a page opens that page.

The search is opened with the search button or with Ctrl+K / Command+K.

### `exportInventoryCSV(rows)`

Turns product rows into CSV text and creates a browser download named `cvsu-inventory-export.csv`.

Text values containing quotes are escaped for CSV.

## 7. Notifications and startup

### `renderNotificationsPopover()`

Creates a notification panel for products below their minimum stock level.

It provides a restock action and a link to the complete low-stock inventory filter.

### `closeMobileSidebar()`

Closes the mobile sidebar and removes the overlay state.

### `enterApp()`

Marks the browser state authenticated, hides the login view, shows the application view, and renders the sidebar and current page.

### `signOut()`

Calls `logout`, clears browser authentication state, hides the application, restores the login view, and clears the password field.

### `hydrateFromApi()`

Calls `api.php?route=bootstrap`.

If successful, it replaces the in-memory product, category, user, transaction, and settings arrays with the API values.

If it fails, it logs the error in the browser console and leaves the current data in place.

### Startup behavior

When the document finishes loading:

1. Inline icons are added.
2. `api.php?route=session` checks the PHP session.
3. If authenticated, it downloads the database state and enters the application.
4. If not authenticated, it leaves the login screen visible.
5. Login, logout, search, notification, drawer, and keyboard events are attached.

---

# api.php

## What it does

`api.php` is the server-side data and authentication entry point.

It starts a PHP session, checks whether PDO and SQLite are available, opens `database/inventory.sqlite`, creates missing tables, optionally inserts seed records, reads the route name from the URL, and returns JSON.

All routes use the URL form:

```text
api.php?route=ROUTE_NAME
```

## Server startup

### PDO and SQLite checks

The API first checks for:

- PHP PDO support.
- A SQLite PDO driver.

If either is missing, it returns HTTP 500 and an error response.

### Database location

The database directory is created if missing. The database file is:

```text
database/inventory.sqlite
```

### PDO configuration

The code enables:

- Exception-based database errors.
- SQLite foreign-key checks with `PRAGMA foreign_keys = ON`.

### Database setup

`api.php` creates these tables if they do not exist:

| Table | Purpose |
| --- | --- |
| `categories` | Inventory categories and prefix codes. |
| `products` | Product names, SKU values, stock quantities, locations, and details. |
| `transactions` | Stock-in and stock-out history. |
| `users` | Staff accounts and account status. |
| `settings` | Key/value pairs for campus settings. |
| `app_meta` | One-time database migration markers. |
| `login_attempts` | Hashed client address, email, and temporary sign-in lockout data. |

Before table creation is complete, it adds a `password_hash` column to `users` if the column is missing.

### Seed data and administrator setup

If the category table is empty, the API inserts example categories, products, users, and transactions. Seed account rows are inactive and have no usable passwords.

The first administrator is created through the setup form. The server must have `INVENTORY_SETUP_KEY` configured. During the first schema migration, the password hashes on seed IDs `u1` to `u5` are cleared and those sample accounts are marked inactive.

## Common API behavior

### `jsonOut($data, $status)`

Sets the HTTP status code, prints the data as JSON, and stops the script.

The frontend reads both the HTTP status and the returned `error` field.

### Authentication gate

Before processing most routes, PHP checks `$_SESSION["authenticated"]`.

Public routes are:

- `login`
- `session`
- `setup-status`
- `setup-admin` (only before an administrator account is initialized)

All other routes require an active PHP session. Every POST also requires a CSRF token in the `X-CSRF-Token` header.

If the session flag is missing, the API returns:

- HTTP status: 401
- JSON: `{"error":"Authentication required"}`

## API routes

### `GET api.php?route=bootstrap`

Returns all data needed to populate the application:

- Products.
- Categories.
- Users.
- Transactions.
- Settings.

The response uses JavaScript-friendly field names such as `minLevel`, `lastActive`, and `productId`.

The SQLite field names are converted to these names in PHP.

### `GET api.php?route=session`

Returns whether a PHP session is authenticated, the signed-in user's ID, display name and role, and the CSRF token used for POST requests.

Example shape:

```json
{
  "authenticated": true,
  "userId": "u-example",
  "name": "Staff member",
  "role": "Administrator",
  "csrfToken": "token-from-this-session"
}
```

The API also checks the active user record and expires sessions after 30 minutes without activity.

### `GET api.php?route=setup-status`

Returns whether an active administrator account with a password exists and whether `INVENTORY_SETUP_KEY` is configured.

### `POST api.php?route=setup-admin`

Creates the first administrator, or activates a migrated seed account with that email. Requires the one-time setup key, a valid email address, and a password of at least 12 characters. This route is disabled after an administrator password has been set.

After setup, PHP signs in the new administrator and returns a fresh session CSRF token.

### `POST api.php?route=login`

Expects JSON containing:

```json
{
  "email": "administrator@example.edu",
  "password": "a-password-chosen-during-setup"
}
```

The request must also include `X-CSRF-Token` from the `session` route.

Process:

1. Reads raw JSON from the request body.
2. Trims and lowers the email.
3. Checks that the email is valid and the password is text.
4. Returns 400 if either value is missing.
5. Searches for the case-insensitive email in the `users` table.
6. Rejects inactive accounts.
7. Uses `password_verify` against the stored `password_hash`.
8. Limits an address/email pair to five failed attempts within 15 minutes, then pauses sign-in for 15 minutes.
9. Regenerates the PHP session ID after a valid login.
10. Stores the authenticated user ID, name, role, and activity time in the session.

On success it returns the display name, role, and a rotated CSRF token.

On failure it returns HTTP 401.

### `POST api.php?route=logout`

Clears all PHP session values, expires the session cookie, destroys the session, and returns success. The request must have a valid session CSRF token.

### `POST api.php?route=product-save`

Creates or updates a product.

The body can contain:

- `id`
- `name`
- `sku`
- `category`
- `description`
- `quantity`
- `minLevel`
- `unit`
- `location`
- `image`
- `icon`
- `updated`

Behavior:

- A missing ID creates a unique `p-` ID.
- A missing SKU returns 400.
- A case-insensitive duplicate SKU returns 409.
- The SQL uses an insert/update form to create or update the product.
- Quantity and minimum level are converted to integers.
- Changing an existing product's quantity through this route is rejected. Creating a product with an opening quantity records an initial Stock In transaction.

### `POST api.php?route=product-delete`

Deletes the product whose `id` matches the request body.

It returns success even if no product matched.

### `POST api.php?route=adjust-stock`

Immediately changes stock for a product.

The body contains:

- `productId`
- `type`
- `qty`
- `reference`
- `date`
- `note`

Behavior:

- Stock In adds quantity.
- Stock Out subtracts quantity.
- A stock-out that would make quantity negative returns 400.
- A matching transaction record is inserted immediately.
- The quick-adjust transaction status is always `Completed`.

### `POST api.php?route=transaction-save`

Creates a Stock In or Stock Out transaction.

It validates:

- Product existence.
- Positive quantity.
- Allowed type: `Stock In` or `Stock Out`.
- Allowed status: `Completed` or `Pending`.

For a Completed transaction:

- Stock In increases quantity.
- Stock Out decreases quantity.
- An insufficient stock level returns 400.
- The product quantity and updated date are changed.

For a Pending transaction:

- No product quantity is changed.
- A transaction record is saved for later approval.

### `POST api.php?route=transaction-approve`

Approves a Pending transaction.

The body contains the transaction `id`.

Behavior:

- A missing transaction returns 404.
- A transaction already marked Completed returns success without changing it again.
- Stock In increases quantity.
- Stock Out decreases quantity.
- Insufficient stock returns 400.
- Otherwise, stock is updated and the transaction status becomes Completed.

### `POST api.php?route=category-save`

Creates a category.

It checks for a duplicate name without considering letter case.

It requires and stores:

- Name.
- Prefix code.
- Description.

It returns 409 for a duplicate category name.

### `POST api.php?route=user-save`

Creates a staff account.

It stores:

- Name.
- Lowercase email.
- Role.
- Department.
- Active status.
- “Just added” for last activity.
- A newly hashed password.

A duplicate email returns 409.

The browser requires at least 12 password characters, and the API hashes the submitted password.

### `POST api.php?route=user-delete`

Removes the account with the supplied ID. Only administrators can use this route. The server rejects attempts to remove the signed-in administrator or the last active administrator, and returns 404 if the account does not exist. Removed accounts can no longer sign in; their unrelated inventory and transaction records remain.

### `POST api.php?route=settings-save`

Stores these setting values in the `settings` table:

- `campusName`
- `autoLowStockAlert`
- `requireApprovalStockOut`
- `defaultMinStock`

Boolean values are stored as the text `true` or `false`.

The minimum stock setting is converted to an integer and must be at least 1.

## Errors

The API normally returns JSON for:

- Missing database support.
- Missing authentication.
- Missing or invalid form values.
- Duplicate products or emails.
- Missing products or transactions.
- Insufficient stock.
- Unknown routes.
- Unexpected database exceptions.

Common HTTP statuses used in this project:

| Status | Meaning |
| --- | --- |
| 200 | Success. |
| 400 | Invalid or incomplete input. |
| 401 | Authentication is missing or login credentials are invalid. |
| 404 | Product, transaction, or route was not found. |
| 409 | A duplicate SKU, category name, or email was found. |
| 500 | Server or database failure. |

---

# Database

## `categories`

| Column | Purpose |
| --- | --- |
| `id` | Text primary key. |
| `name` | Unique category name. |
| `code` | Short category prefix. |
| `description` | Category explanation. |

## `products`

| Column | Purpose |
| --- | --- |
| `id` | Text primary key. |
| `name` | Product name. |
| `sku` | Unique product code. |
| `category` | Category name. |
| `description` | Product description. |
| `quantity` | Current stock quantity. |
| `min_level` | Low-stock threshold. |
| `unit` | Units, boxes, reams, sets, pairs, or pcs. |
| `location` | Storage location. |
| `image` | Optional image data or URL text. |
| `icon` | Icon name used by JavaScript. |
| `updated` | Display date of the latest update. |

## `transactions`

| Column | Purpose |
| --- | --- |
| `id` | Text primary key. |
| `product_id` | Related product ID. |
| `item_name` | Stored product name. |
| `sku` | Stored SKU. |
| `icon` | Stored icon name. |
| `type` | `Stock In` or `Stock Out`. |
| `qty` | Transaction quantity. |
| `date` | Display date. |
| `status` | `Completed` or `Pending`. |
| `reference` | Purchase order or requisition reference. |
| `note` | Optional notes. |

The transaction table stores item details as copies instead of only referring to a product. This keeps the transaction readable if the product record changes later.

## `users`

| Column | Purpose |
| --- | --- |
| `id` | Text primary key. |
| `name` | Staff display name. |
| `email` | Unique email address. |
| `role` | Role label. |
| `department` | Department or office. |
| `status` | `Active` or `Inactive`. |
| `last_active` | Display text describing recent activity. |
| `password_hash` | PHP password hash. |

## `settings`

| Column | Purpose |
| --- | --- |
| `key` | Unique setting name. |
| `value` | Setting value as text. |

---

# Authentication

## Login

The browser sends the email and password in a POST request to `api.php?route=login`.

PHP then:

1. Finds the matching account.
2. Checks that it is not inactive.
3. Uses `password_verify` to compare the submitted password with the stored hash.
4. Regenerates the session ID.
5. Stores authentication and identity values in `$_SESSION`.

The browser receives the display name and calls `enterApp()`.

## Session check

On page load, JavaScript calls `api.php?route=session`.

This is how a page refresh can keep the user signed in as long as the PHP session remains valid.

## Logout

Logout clears session values and expires the session cookie.

The browser also clears its own `isAuthenticated` state and returns to the login view.

## Account roles

The `users.role` field exists and stores labels such as:

- Administrator
- Inventory Staff
- Custodian
- Lab Technician
- Viewer

The API enforces these write permissions:

| Action | Roles allowed |
| --- | --- |
| Save or delete products | Administrator, Inventory Staff |
| Create categories | Administrator, Inventory Staff |
| Record stock adjustments or transactions | Administrator, Inventory Staff, Custodian, Lab Technician |
| Approve a pending transaction | Administrator |
| Add or remove staff accounts, or save settings | Administrator |

The interface also hides actions and pages that the current role cannot use. The API checks authorization independently, so hiding a button is not the security control.

---

# Security features present

## Session and browser protections

- Session IDs use strict mode and cookie-only transport.
- Session cookies are HTTP-only and SameSite Strict; they are marked Secure when PHP detects HTTPS.
- Sessions expire after 30 minutes without activity.
- Login and first-admin setup regenerate the session ID.
- POST requests require a session-specific CSRF token.
- The HTML and API responses include security headers, including a Content Security Policy, frame protection, and content-type protection.
- Responses from the API are marked as not cacheable.

## Login and permissions

- Passwords use PHP's `password_hash` and `password_verify`.
- There is no source-code default administrator password.
- First-admin setup requires `INVENTORY_SETUP_KEY` and a 12-character minimum password.
- Failed sign-ins are rate-limited per hashed client address and email.
- Inactive users are rejected, and active account status is checked during later requests.
- Administrators can remove other accounts. The API prevents self-removal and protects the last active administrator.
- The API checks roles for every protected write action.
- The browser hides actions that the current role cannot use, but API checks remain authoritative.

## Input and data protection

- API values are validated on the server for type, length, allowed values, and numeric range.
- Product images must be valid PNG or JPEG data, under 5 MB.
- SQL values use PDO prepared statements.
- Stock changes and their transaction records are committed together.
- Stock updates check the current available quantity in the database.
- Exported text fields are protected against spreadsheet formula execution.
- Dynamic text is escaped by the front-end `escapeHtml` helper.
- SQLite foreign-key enforcement is enabled.

## Limitations that still apply

- Password reset is not implemented. The interface directs users to contact an administrator.
- There is no audit record of which signed-in user created or approved a transaction.
- There is no backup, restore, or data-retention workflow.
- Role permissions are fixed in PHP and are not configurable.
- The app stores product images as base64 text in SQLite, which can increase database size.
- The built-in PHP server is intended for local development, not as a production deployment server.
- HTTPS must be configured by the host. The Secure cookie and HSTS behavior depends on PHP seeing a direct HTTPS request.
- The one-time setup key must be kept private and removed from the server environment after the initial administrator is created.

---

# Security limits and current prototype risks

This section describes behavior that is currently missing or incomplete. It is useful because the system works as a local prototype but should not be considered a complete production security design.

## Prototype notes

The database still includes sample inventory and user records for demonstration. The sample user accounts are inactive, do not have passwords, and cannot be used to sign in until a password is set through an administrator workflow. A real production deployment should still receive an independent security review and use a production-ready web server, HTTPS, protected database backups, and operational monitoring.

---

# Complete request examples

## Opening the application

```text
GET /
```

Returns `index.php`, the HTML page, CSS references, and JavaScript reference.

## Checking the session

```text
GET api.php?route=session
```

Returns whether PHP considers the browser authenticated.

## Signing in

```text
POST api.php?route=login
Content-Type: application/json
X-CSRF-Token: token-from-the-session-route

{
  "email": "administrator@example.edu",
  "password": "the-administrator-password"
}
```

First-time setup uses `POST api.php?route=setup-admin` with the same CSRF header and JSON fields `name`, `email`, `password`, and `setupKey`. Configure `INVENTORY_SETUP_KEY` in the server environment before using that route.

## Loading inventory

```text
GET api.php?route=bootstrap
```

Requires the login session.

## Saving a product

```text
POST api.php?route=product-save
Content-Type: application/json
X-CSRF-Token: token-from-the-session-route

{
  "id": null,
  "name": "Example Keyboard",
  "sku": "IT-KB-999",
  "category": "IT Equipment",
  "description": "Example item",
  "quantity": 20,
  "minLevel": 5,
  "unit": "units",
  "location": "Computer Lab 1",
  "image": null,
  "icon": "keyboard",
  "updated": "Nov 17, 2026"
}
```

## Recording a transaction

```text
POST api.php?route=transaction-save
Content-Type: application/json
X-CSRF-Token: token-from-the-session-route

{
  "productId": "p1",
  "type": "Stock In",
  "qty": 10,
  "status": "Completed",
  "date": "Nov 17, 2026",
  "reference": "PO-2026-999",
  "note": "Delivery received"
}
```

## Approving a Pending transaction

```text
POST api.php?route=transaction-approve
Content-Type: application/json
X-CSRF-Token: token-from-the-session-route

{
  "id": "t-unique-id"
}
```

## Signing out

```text
POST api.php?route=logout
X-CSRF-Token: token-from-the-session-route
```
