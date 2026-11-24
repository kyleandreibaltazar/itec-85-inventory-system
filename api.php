<?php
ini_set("session.use_strict_mode", "1");
ini_set("session.use_only_cookies", "1");
ini_set("session.use_trans_sid", "0");
ini_set("session.gc_maxlifetime", "1800");
ini_set("session.cookie_httponly", "1");
ini_set("session.cookie_samesite", "Strict");
$isHttps = !empty($_SERVER["HTTPS"]) && strtolower((string) $_SERVER["HTTPS"]) !== "off";
session_set_cookie_params([
    "lifetime" => 0,
    "path" => "/",
    "secure" => $isHttps,
    "httponly" => true,
    "samesite" => "Strict",
]);
session_start();
header("Content-Type: application/json");
header("Cache-Control: no-store");
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("Referrer-Policy: strict-origin-when-cross-origin");
header(
    "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
);

if (!class_exists("PDO")) {
    http_response_code(500);
    header("Content-Type: application/json");
    echo json_encode([
        "error" => "PHP PDO is not enabled. Enable PDO in php.ini before starting the website.",
    ]);
    exit();
}

if (!in_array("sqlite", PDO::getAvailableDrivers(), true)) {
    http_response_code(500);
    header("Content-Type: application/json");
    echo json_encode([
        "error" =>
            "SQLite support is not enabled. Enable pdo_sqlite in php.ini before starting the website.",
    ]);
    exit();
}

$configuredDb = getenv("INVENTORY_DB_PATH");
$dbFile = $configuredDb !== false && $configuredDb !== ""
    ? $configuredDb
    : __DIR__ . DIRECTORY_SEPARATOR . "database" . DIRECTORY_SEPARATOR . "inventory.sqlite";
$dbDir = dirname($dbFile);
if (!is_dir($dbDir) && !mkdir($dbDir, 0700, true) && !is_dir($dbDir)) {
    http_response_code(500);
    header("Content-Type: application/json");
    echo json_encode(["error" => "Cannot create the database directory."]);
    exit();
}

$pdo = new PDO("sqlite:" . $dbFile);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("PRAGMA foreign_keys = ON");

$pdo->exec("CREATE TABLE IF NOT EXISTS categories (id TEXT PRIMARY KEY, name TEXT NOT NULL UNIQUE, code TEXT NOT NULL, description TEXT);
CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY, name TEXT NOT NULL, sku TEXT NOT NULL UNIQUE, category TEXT NOT NULL, description TEXT, quantity INTEGER NOT NULL DEFAULT 0, min_level INTEGER NOT NULL DEFAULT 0, unit TEXT NOT NULL, location TEXT NOT NULL, image TEXT, icon TEXT, updated TEXT);
CREATE TABLE IF NOT EXISTS transactions (id TEXT PRIMARY KEY, product_id TEXT, item_name TEXT, sku TEXT, icon TEXT, type TEXT, qty INTEGER, date TEXT, status TEXT, reference TEXT, note TEXT);
CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, email TEXT UNIQUE, role TEXT, department TEXT, status TEXT, last_active TEXT, password_hash TEXT);
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS app_meta (key TEXT PRIMARY KEY, value TEXT);
CREATE TABLE IF NOT EXISTS login_attempts (ip_hash TEXT NOT NULL, email TEXT NOT NULL, attempts INTEGER NOT NULL DEFAULT 0, first_attempt INTEGER NOT NULL, locked_until INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (ip_hash, email));");

$columns = $pdo->query("PRAGMA table_info(users)")->fetchAll(PDO::FETCH_ASSOC);
if (!in_array("password_hash", array_column($columns, "name"), true)) {
    $pdo->exec("ALTER TABLE users ADD COLUMN password_hash TEXT");
}

$legacyMigration = $pdo->prepare("SELECT value FROM app_meta WHERE key = ?");
$legacyMigration->execute(["default_password_removed"]);
if (!$legacyMigration->fetchColumn()) {
    $pdo->exec("UPDATE users SET password_hash = NULL, status = 'Inactive' WHERE id IN ('u1','u2','u3','u4','u5')");
    $pdo->prepare("INSERT INTO app_meta (key, value) VALUES (?, ?)")->execute([
        "default_password_removed",
        "1",
    ]);
}

$count = (int) $pdo->query("SELECT COUNT(*) FROM categories")->fetchColumn();
if ($count === 0) {
    $categories = [
        ["c1", "IT Equipment", "IT", "Computers, peripherals, and workstation devices"],
        ["c2", "AV Equipment", "AV", "Projectors, cameras, microphones, and presentation systems"],
        ["c3", "Office Equipment", "OF", "Printers, labelers, and office machinery"],
        ["c4", "Office Supplies", "SP", "Paper, markers, and general administrative consumables"],
        ["c5", "Networking", "NW", "Switches, cables, access points, and network infrastructure"],
        ["c6", "Lab Equipment", "LB", "Scientific instruments and laboratory supplies"],
        ["c7", "Furniture", "FN", "Tables, chairs, cabinets, and campus fixtures"],
    ];
    $stmt = $pdo->prepare("INSERT INTO categories VALUES (?,?,?,?)");
    foreach ($categories as $row) {
        $stmt->execute($row);
    }

    $products = [
        [
            "p1",
            "Logitech K120 Keyboard",
            "IT-KB-001",
            "IT Equipment",
            "Spill-resistant wired USB desktop keyboard.",
            125,
            20,
            "units",
            "Computer Lab 1",
            null,
            "keyboard",
            "Nov 17, 2026",
        ],
        [
            "p2",
            'Dell 24" LED Monitor',
            "IT-MN-004",
            "IT Equipment",
            "24-inch Full HD IPS display.",
            3,
            10,
            "units",
            "Computer Lab 2",
            null,
            "monitor",
            "Nov 17, 2026",
        ],
        [
            "p3",
            "Epson EB-E01 Projector",
            "AV-PJ-002",
            "AV Equipment",
            "3300 lumens classroom projector.",
            2,
            5,
            "units",
            "AV Room",
            null,
            "projector",
            "Nov 17, 2026",
        ],
        [
            "p4",
            "Logitech B100 Mouse",
            "IT-MS-003",
            "IT Equipment",
            "Wired optical USB mouse.",
            5,
            20,
            "units",
            "Computer Lab 1",
            null,
            "mouse",
            "Nov 16, 2026",
        ],
        [
            "p5",
            "Dell OptiPlex 7010",
            "IT-SU-005",
            "IT Equipment",
            "Desktop computer unit.",
            48,
            10,
            "units",
            "Computer Lab 3",
            null,
            "cpu",
            "Nov 16, 2026",
        ],
        [
            "p6",
            "A4Tech USB Keyboard",
            "IT-KB-006",
            "IT Equipment",
            "Standard wired USB keyboard.",
            7,
            15,
            "units",
            "Computer Lab 2",
            null,
            "keyboard",
            "Nov 16, 2026",
        ],
        [
            "p7",
            "Epson EcoTank L3250",
            "OF-PR-007",
            "Office Equipment",
            "Wi-Fi all-in-one printer.",
            16,
            5,
            "units",
            "Admin Office",
            null,
            "box",
            "Nov 15, 2026",
        ],
        [
            "p8",
            "TP-Link 24-Port Switch",
            "NW-SW-009",
            "Networking",
            "Managed network switch.",
            1,
            4,
            "units",
            "Server Room",
            null,
            "cpu",
            "Nov 15, 2026",
        ],
        [
            "p9",
            "Whiteboard Marker (Black)",
            "SP-MK-010",
            "Office Supplies",
            "Dry erase marker box.",
            8,
            25,
            "boxes",
            "Supply Room",
            null,
            "box",
            "Nov 14, 2026",
        ],
        [
            "p10",
            "HDMI Cable 5m",
            "AV-CB-011",
            "AV Equipment",
            "High-speed HDMI cable.",
            4,
            12,
            "units",
            "AV Room",
            null,
            "projector",
            "Nov 14, 2026",
        ],
        [
            "p11",
            "Lab Beaker 500ml",
            "LB-GL-012",
            "Lab Equipment",
            "Graduated glass beaker.",
            6,
            20,
            "units",
            "Science Lab 1",
            null,
            "box",
            "Nov 13, 2026",
        ],
        [
            "p12",
            "HP LaserJet Pro M404dn",
            "OF-PR-013",
            "Office Equipment",
            "Monochrome laser printer.",
            12,
            4,
            "units",
            "Registrar Office",
            null,
            "box",
            "Nov 13, 2026",
        ],
        [
            "p14",
            "Bond Paper A4 (Ream)",
            "SP-PP-015",
            "Office Supplies",
            "A4 multipurpose copy paper.",
            140,
            30,
            "reams",
            "Supply Room",
            null,
            "box",
            "Nov 12, 2026",
        ],
        [
            "p15",
            "Ergonomic Office Chair",
            "FN-CH-016",
            "Furniture",
            "Mesh-back swivel chair.",
            32,
            8,
            "units",
            "Faculty Room",
            null,
            "box",
            "Nov 11, 2026",
        ],
        [
            "p16",
            "Digital Microscope",
            "LB-MS-017",
            "Lab Equipment",
            "Compound microscope with camera.",
            18,
            6,
            "units",
            "Science Lab 1",
            null,
            "box",
            "Nov 10, 2026",
        ],
        [
            "p17",
            "Shure SM58 Microphone",
            "AV-MC-018",
            "AV Equipment",
            "Dynamic vocal microphone.",
            11,
            4,
            "units",
            "Auditorium",
            null,
            "projector",
            "Nov 09, 2026",
        ],
        [
            "p18",
            "APC UPS 650VA",
            "IT-UP-019",
            "IT Equipment",
            "Uninterruptible power supply.",
            24,
            8,
            "units",
            "Computer Lab 1",
            null,
            "cpu",
            "Nov 08, 2026",
        ],
    ];
    $stmt = $pdo->prepare("INSERT INTO products VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
    foreach ($products as $row) {
        $stmt->execute($row);
    }

    $users = [
        [
            "u1",
            "Loreyn E",
            "loreyn.e@cvsu.edu.ph",
            "Administrator",
            "Property & Supply Office",
            "Inactive",
            "Online now",
        ],
        [
            "u2",
            "Marco Villanueva",
            "m.villanueva@cvsu.edu.ph",
            "Inventory Staff",
            "IT & Computer Labs",
            "Inactive",
            "2 hours ago",
        ],
        [
            "u3",
            "Clarisse Mendoza",
            "c.mendoza@cvsu.edu.ph",
            "Custodian",
            "AV & Auditorium",
            "Inactive",
            "Today, 9:15 AM",
        ],
        [
            "u4",
            "Rafael Santos",
            "r.santos@cvsu.edu.ph",
            "Lab Technician",
            "College of Science",
            "Inactive",
            "Nov 16, 2026",
        ],
        [
            "u5",
            "Andrea Bautista",
            "a.bautista@cvsu.edu.ph",
            "Viewer",
            "Internal Audit",
            "Inactive",
            "Nov 10, 2026",
        ],
    ];
    $stmt = $pdo->prepare("INSERT INTO users VALUES (?,?,?,?,?,?,?,?)");
    foreach ($users as $row) {
        $stmt->execute(array_merge($row, [null]));
    }

    $tx = [
        [
            "t1",
            "p1",
            "Logitech K120 Keyboard",
            "IT-KB-001",
            "keyboard",
            "Stock In",
            25,
            "Nov 17, 2026",
            "Completed",
            "PO-2026-114",
            "New batch for Computer Lab 1",
        ],
        [
            "t2",
            "p2",
            'Dell 24" LED Monitor',
            "IT-MN-004",
            "monitor",
            "Stock Out",
            10,
            "Nov 17, 2026",
            "Completed",
            "REQ-408",
            "Issued to CEIT Lab 2",
        ],
        [
            "t3",
            "p3",
            "Epson EB-E01 Projector",
            "AV-PJ-002",
            "projector",
            "Stock Out",
            2,
            "Nov 17, 2026",
            "Pending",
            "REQ-412",
            "Reserved for College Assembly",
        ],
    ];
    $stmt = $pdo->prepare("INSERT INTO transactions VALUES (?,?,?,?,?,?,?,?,?,?,?)");
    foreach ($tx as $row) {
        $stmt->execute($row);
    }
}

$route = $_GET["route"] ?? "";
function jsonOut($data, $status = 200)
{
    http_response_code($status);
    echo json_encode($data, JSON_INVALID_UTF8_SUBSTITUTE);
    exit();
}

function requestBody()
{
    $contentType = strtolower(trim(explode(";", $_SERVER["CONTENT_TYPE"] ?? "")[0]));
    if ($contentType !== "application/json") {
        jsonOut(["error" => "Content-Type must be application/json"], 415);
    }

    try {
        $body = json_decode(file_get_contents("php://input"), true, 512, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        jsonOut(["error" => "Request body must contain valid JSON"], 400);
    }
    if (!is_array($body)) {
        jsonOut(["error" => "Request body must be a JSON object"], 400);
    }
    return $body;
}

function requiredText($body, $key, $label, $maxLength)
{
    if (!isset($body[$key]) || !is_string($body[$key])) {
        jsonOut(["error" => "$label is required"], 400);
    }
    $value = trim($body[$key]);
    if ($value === "" || strlen($value) > $maxLength) {
        jsonOut(["error" => "$label is required and must be no more than $maxLength characters"], 400);
    }
    return $value;
}

function optionalText($body, $key, $maxLength)
{
    $value = $body[$key] ?? "";
    if (!is_string($value)) {
        jsonOut(["error" => "$key must be text"], 400);
    }
    $value = trim($value);
    if (strlen($value) > $maxLength) {
        jsonOut(["error" => "$key must be no more than $maxLength characters"], 400);
    }
    return $value;
}

function positiveInt($value, $label, $allowZero = false)
{
    $min = $allowZero ? 0 : 1;
    $validated = filter_var($value, FILTER_VALIDATE_INT);
    if ($validated === false || $validated < $min) {
        jsonOut(["error" => "$label must be " . ($allowZero ? "zero or greater" : "a positive whole number")], 400);
    }
    return $validated;
}

function validImage($image)
{
    if ($image === null || $image === "") {
        return null;
    }
    if (!is_string($image) || strlen($image) > 7_000_000) {
        jsonOut(["error" => "Image must be a PNG or JPG no larger than 5 MB"], 400);
    }
    if (!preg_match('/^data:image\/(png|jpeg);base64,([A-Za-z0-9+\/=\r\n]+)$/', $image, $matches)) {
        jsonOut(["error" => "Image must be a PNG or JPG data URL"], 400);
    }
    $binary = base64_decode($matches[2], true);
    if ($binary === false || strlen($binary) > 5 * 1024 * 1024) {
        jsonOut(["error" => "Image must be no larger than 5 MB"], 400);
    }
    $imageInfo = @getimagesizefromstring($binary);
    $expectedMime = $matches[1] === "png" ? "image/png" : "image/jpeg";
    if ($imageInfo === false || $imageInfo["mime"] !== $expectedMime) {
        jsonOut(["error" => "Image content does not match its PNG or JPG type"], 400);
    }
    return $image;
}

function createCsrfToken()
{
    $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    return $_SESSION["csrf_token"];
}

if (empty($_SESSION["csrf_token"])) {
    createCsrfToken();
}

try {
    $publicRoutes = ["login", "session", "setup-status", "setup-admin"];
    if (!empty($_SESSION["authenticated"])) {
        if (time() - (int) ($_SESSION["last_activity"] ?? 0) > 1800) {
            $_SESSION = [];
            session_regenerate_id(true);
            createCsrfToken();
        }
    }
    if (!empty($_SESSION["authenticated"])) {
        $activeUser = $pdo->prepare("SELECT name,role,status FROM users WHERE id=?");
        $activeUser->execute([$_SESSION["user_id"] ?? ""]);
        $sessionUser = $activeUser->fetch(PDO::FETCH_ASSOC);
        if (!$sessionUser || $sessionUser["status"] !== "Active") {
            $_SESSION = [];
            session_regenerate_id(true);
            createCsrfToken();
        } else {
            $_SESSION["name"] = $sessionUser["name"];
            $_SESSION["role"] = $sessionUser["role"];
            $_SESSION["last_activity"] = time();
        }
    }
    if (!in_array($route, $publicRoutes, true) && empty($_SESSION["authenticated"])) {
        jsonOut(["error" => "Authentication required"], 401);
    }

    if (($_SERVER["REQUEST_METHOD"] ?? "GET") === "POST") {
        $csrfToken = $_SERVER["HTTP_X_CSRF_TOKEN"] ?? "";
        if (
            !is_string($csrfToken) ||
            !isset($_SESSION["csrf_token"]) ||
            !hash_equals($_SESSION["csrf_token"], $csrfToken)
        ) {
            jsonOut(["error" => "Security token is missing or expired. Refresh the page and try again."], 403);
        }
    }

    $permissions = [
        "product-save" => ["Administrator", "Inventory Staff"],
        "product-delete" => ["Administrator", "Inventory Staff"],
        "adjust-stock" => ["Administrator", "Inventory Staff", "Custodian", "Lab Technician"],
        "transaction-save" => ["Administrator", "Inventory Staff", "Custodian", "Lab Technician"],
        "transaction-approve" => ["Administrator"],
        "category-save" => ["Administrator", "Inventory Staff"],
        "user-save" => ["Administrator"],
        "user-delete" => ["Administrator"],
        "settings-save" => ["Administrator"],
    ];
    if (isset($permissions[$route])) {
        if (!in_array($_SESSION["role"] ?? "", $permissions[$route], true)) {
            jsonOut(["error" => "Your account does not have permission to perform this action"], 403);
        }
    }

    if ($route === "bootstrap") {
        $toProduct = fn($r) => [
            "id" => $r["id"],
            "name" => $r["name"],
            "sku" => $r["sku"],
            "category" => $r["category"],
            "description" => $r["description"],
            "quantity" => (int) $r["quantity"],
            "minLevel" => (int) $r["min_level"],
            "unit" => $r["unit"],
            "location" => $r["location"],
            "image" => $r["image"],
            "icon" => $r["icon"],
            "updated" => $r["updated"],
        ];
        $products = array_map(
            $toProduct,
            $pdo
                ->query("SELECT * FROM products ORDER BY updated DESC, name")
                ->fetchAll(PDO::FETCH_ASSOC),
        );
        $categories = array_map(
            fn($r) => [
                "id" => $r["id"],
                "name" => $r["name"],
                "code" => $r["code"],
                "description" => $r["description"],
            ],
            $pdo->query("SELECT * FROM categories ORDER BY name")->fetchAll(PDO::FETCH_ASSOC),
        );
        $users = ($_SESSION["role"] ?? "") === "Administrator"
            ? array_map(
                fn($r) => [
                    "id" => $r["id"],
                    "name" => $r["name"],
                    "email" => $r["email"],
                    "role" => $r["role"],
                    "department" => $r["department"],
                    "status" => $r["status"],
                    "lastActive" => $r["last_active"],
                ],
                $pdo->query("SELECT * FROM users ORDER BY name")->fetchAll(PDO::FETCH_ASSOC),
            )
            : [];
        $transactions = array_map(
            fn($r) => [
                "id" => $r["id"],
                "productId" => $r["product_id"],
                "itemName" => $r["item_name"],
                "sku" => $r["sku"],
                "icon" => $r["icon"],
                "type" => $r["type"],
                "qty" => (int) $r["qty"],
                "date" => $r["date"],
                "status" => $r["status"],
                "reference" => $r["reference"],
                "note" => $r["note"],
            ],
            $pdo
                ->query("SELECT * FROM transactions ORDER BY rowid DESC")
                ->fetchAll(PDO::FETCH_ASSOC),
        );
        $settingRows = $pdo->query("SELECT key,value FROM settings")->fetchAll(PDO::FETCH_ASSOC);
        $settings = [
            "campusName" => "Cavite State University — Main Campus",
            "autoLowStockAlert" => true,
            "requireApprovalStockOut" => false,
            "defaultMinStock" => 10,
        ];
        foreach ($settingRows as $row) {
            $key = $row["key"];
            $value = $row["value"];
            $settings[$key] = in_array($value, ["true", "false"], true)
                ? $value === "true"
                : ($key === "defaultMinStock"
                    ? (int) $value
                    : $value);
        }
        jsonOut([
            "products" => $products,
            "categories" => $categories,
            "users" => $users,
            "transactions" => $transactions,
            "settings" => $settings,
        ]);
    }

    if ($route === "session") {
        jsonOut([
            "authenticated" => !empty($_SESSION["authenticated"]),
            "userId" => $_SESSION["user_id"] ?? null,
            "name" => $_SESSION["name"] ?? null,
            "role" => $_SESSION["role"] ?? null,
            "csrfToken" => $_SESSION["csrf_token"],
        ]);
    }

    if ($route === "setup-status") {
        $adminCount = (int) $pdo->query(
            "SELECT COUNT(*) FROM users WHERE role='Administrator' AND status='Active' AND password_hash IS NOT NULL AND password_hash <> ''",
        )->fetchColumn();
        jsonOut([
            "setupRequired" => $adminCount === 0,
            "setupEnabled" => getenv("INVENTORY_SETUP_KEY") !== false && getenv("INVENTORY_SETUP_KEY") !== "",
        ]);
    }

    if ($route === "setup-admin" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $setupKey = getenv("INVENTORY_SETUP_KEY");
        if ($setupKey === false || $setupKey === "") {
            jsonOut(["error" => "Administrator setup is disabled. Configure INVENTORY_SETUP_KEY on the server."], 503);
        }
        $body = requestBody();
        $providedKey = is_string($body["setupKey"] ?? null) ? $body["setupKey"] : "";
        if (strlen($providedKey) > 512) {
            jsonOut(["error" => "The one-time setup key is invalid"], 403);
        }
        if (!hash_equals($setupKey, $providedKey)) {
            jsonOut(["error" => "The one-time setup key is invalid"], 403);
        }
        $pdo->exec("BEGIN IMMEDIATE");
        $adminCount = (int) $pdo->query(
            "SELECT COUNT(*) FROM users WHERE role='Administrator' AND status='Active' AND password_hash IS NOT NULL AND password_hash <> ''",
        )->fetchColumn();
        if ($adminCount > 0) {
            jsonOut(["error" => "Administrator setup has already been completed"], 409);
        }
        $name = requiredText($body, "name", "Name", 120);
        $email = strtolower(requiredText($body, "email", "Email", 254));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            jsonOut(["error" => "Enter a valid email address"], 400);
        }
        $password = is_string($body["password"] ?? null) ? $body["password"] : "";
        if (strlen($password) < 12 || strlen($password) > 200) {
            jsonOut(["error" => "Password must be between 12 and 200 characters"], 400);
        }
        $existing = $pdo->prepare("SELECT id FROM users WHERE lower(email)=?");
        $existing->execute([$email]);
        $id = $existing->fetchColumn();
        if ($id) {
            $pdo->prepare(
                "UPDATE users SET name=?,role=?,department=?,status=?,last_active=?,password_hash=? WHERE id=?",
            )->execute([
                $name,
                "Administrator",
                "Property & Supply Office",
                "Active",
                "Online now",
                password_hash($password, PASSWORD_DEFAULT),
                $id,
            ]);
        } else {
            $id = "u-" . bin2hex(random_bytes(12));
            $pdo->prepare(
                "INSERT INTO users (id,name,email,role,department,status,last_active,password_hash) VALUES (?,?,?,?,?,?,?,?)",
            )->execute([
                $id,
                $name,
                $email,
                "Administrator",
                "Property & Supply Office",
                "Active",
                "Online now",
                password_hash($password, PASSWORD_DEFAULT),
            ]);
        }
        $pdo->commit();
        session_regenerate_id(true);
        $_SESSION["authenticated"] = true;
        $_SESSION["user_id"] = $id;
        $_SESSION["name"] = $name;
        $_SESSION["role"] = "Administrator";
        $_SESSION["last_activity"] = time();
        $csrfToken = createCsrfToken();
        jsonOut([
            "success" => true,
            "userId" => $id,
            "name" => $name,
            "role" => "Administrator",
            "csrfToken" => $csrfToken,
        ]);
    }

    if ($route === "login" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $body = requestBody();
        $emailValue = $body["email"] ?? "";
        if (!is_string($emailValue)) {
            jsonOut(["error" => "Email and password are required"], 400);
        }
        $email = strtolower(trim($emailValue));
        $password = $body["password"] ?? "";
        if ($email === "" || $password === "" || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            jsonOut(["error" => "Email and password are required"], 400);
        }
        if (!is_string($password)) {
            jsonOut(["error" => "Invalid email or password"], 401);
        }

        $ipHash = hash("sha256", (string) ($_SERVER["REMOTE_ADDR"] ?? "unknown"));
        $attempt = $pdo->prepare(
            "SELECT attempts, first_attempt, locked_until FROM login_attempts WHERE ip_hash=? AND email=?",
        );
        $attempt->execute([$ipHash, $email]);
        $attemptRow = $attempt->fetch(PDO::FETCH_ASSOC);
        $now = time();
        if ($attemptRow && (int) $attemptRow["locked_until"] > $now) {
            jsonOut(["error" => "Too many sign-in attempts. Try again later."], 429);
        }

        $stmt = $pdo->prepare("SELECT * FROM users WHERE lower(email) = ? LIMIT 1");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        $valid =
            $user &&
            $user["status"] !== "Inactive" &&
            !empty($user["password_hash"]) &&
            password_verify($password, $user["password_hash"]);
        if (!$valid) {
            $firstAttempt = $attemptRow && $now - (int) $attemptRow["first_attempt"] < 900
                ? (int) $attemptRow["first_attempt"]
                : $now;
            $attempts = $attemptRow && $now - (int) $attemptRow["first_attempt"] < 900
                ? (int) $attemptRow["attempts"] + 1
                : 1;
            $lockedUntil = $attempts >= 5 ? $now + 900 : 0;
            $pdo->prepare(
                "INSERT INTO login_attempts (ip_hash,email,attempts,first_attempt,locked_until) VALUES (?,?,?,?,?) ON CONFLICT(ip_hash,email) DO UPDATE SET attempts=excluded.attempts,first_attempt=excluded.first_attempt,locked_until=excluded.locked_until",
            )->execute([$ipHash, $email, $attempts, $firstAttempt, $lockedUntil]);
            jsonOut(["error" => "Invalid email or password"], 401);
        }

        $pdo->prepare("DELETE FROM login_attempts WHERE ip_hash=? AND email=?")->execute([$ipHash, $email]);
        session_regenerate_id(true);
        $_SESSION["authenticated"] = true;
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["name"] = $user["name"];
        $_SESSION["role"] = $user["role"];
        $_SESSION["last_activity"] = time();
        $csrfToken = createCsrfToken();
        jsonOut([
            "success" => true,
            "userId" => $user["id"],
            "name" => $_SESSION["name"],
            "role" => $_SESSION["role"],
            "csrfToken" => $csrfToken,
        ]);
    }

    if ($route === "logout" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $_SESSION = [];
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(
                session_name(),
                "",
                time() - 42000,
                $params["path"],
                $params["domain"],
                $params["secure"],
                $params["httponly"],
            );
        }
        session_destroy();
        jsonOut(["success" => true]);
    }

    if ($route === "product-save" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $providedId = $b["id"] ?? null;
        if ($providedId !== null && !is_string($providedId)) {
            jsonOut(["error" => "Invalid product identifier"], 400);
        }
        $id = trim($providedId ?? "") ?: "p-" . bin2hex(random_bytes(12));
        if (!preg_match('/^[A-Za-z0-9_-]{1,100}$/', $id)) {
            jsonOut(["error" => "Invalid product identifier"], 400);
        }
        $name = requiredText($b, "name", "Product name", 160);
        $sku = requiredText($b, "sku", "SKU", 80);
        $category = requiredText($b, "category", "Category", 100);
        $unit = requiredText($b, "unit", "Unit", 30);
        $location = requiredText($b, "location", "Location", 120);
        $categoryExists = $pdo->prepare("SELECT 1 FROM categories WHERE name=?");
        $categoryExists->execute([$category]);
        if (!$categoryExists->fetchColumn()) {
            jsonOut(["error" => "Select an existing category"], 400);
        }
        $description = optionalText($b, "description", 2000);
        $quantity = positiveInt($b["quantity"] ?? null, "Quantity", true);
        $minLevel = positiveInt($b["minLevel"] ?? null, "Minimum stock level", true);
        $image = validImage($b["image"] ?? null);
        $existingProduct = $pdo->prepare("SELECT quantity FROM products WHERE id=?");
        $existingProduct->execute([$id]);
        $previousQuantity = $existingProduct->fetchColumn();
        if ($previousQuantity !== false && (int) $previousQuantity !== $quantity) {
            jsonOut(["error" => "Use a stock transaction to change an existing product's quantity"], 400);
        }
        $duplicate = $pdo->prepare("SELECT id FROM products WHERE lower(sku)=lower(?) AND id<>?");
        $duplicate->execute([$sku, $id]);
        if ($duplicate->fetch()) {
            jsonOut(["error" => "A product with that SKU already exists"], 409);
        }
        $updated = date("M d, Y");
        $icon = in_array($b["icon"] ?? "box", ["box", "keyboard", "monitor", "projector", "mouse", "cpu"], true)
            ? ($b["icon"] ?? "box")
            : "box";
        $pdo->beginTransaction();
        $stmt = $pdo->prepare(
            "INSERT INTO products (id,name,sku,category,description,quantity,min_level,unit,location,image,icon,updated) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET name=excluded.name,sku=excluded.sku,category=excluded.category,description=excluded.description,quantity=excluded.quantity,min_level=excluded.min_level,unit=excluded.unit,location=excluded.location,image=excluded.image,icon=excluded.icon,updated=excluded.updated",
        );
        $stmt->execute([
            $id,
            $name,
            $sku,
            $category,
            $description,
            $quantity,
            $minLevel,
            $unit,
            $location,
            $image,
            $icon,
            $updated,
        ]);
        if ($previousQuantity === false && $quantity > 0) {
            $pdo->prepare(
                "INSERT INTO transactions (id,product_id,item_name,sku,icon,type,qty,date,status,reference,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            )->execute([
                "t-" . bin2hex(random_bytes(12)),
                $id,
                $name,
                $sku,
                $icon,
                "Stock In",
                $quantity,
                $updated,
                "Completed",
                "INITIAL-STOCK",
                "Opening stock recorded when product was created",
            ]);
        }
        $pdo->commit();
        jsonOut(["success" => true, "id" => $id]);
    }

    if ($route === "product-delete" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $id = requiredText($b, "id", "Product identifier", 100);
        $stmt = $pdo->prepare("DELETE FROM products WHERE id=?");
        $stmt->execute([$id]);
        jsonOut(["success" => true]);
    }

    if ($route === "adjust-stock" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $productId = requiredText($b, "productId", "Product", 100);
        $type = $b["type"] ?? "";
        if (!in_array($type, ["Stock In", "Stock Out"], true)) {
            jsonOut(["error" => "Invalid transaction type"], 400);
        }
        $qty = positiveInt($b["qty"] ?? null, "Quantity");
        $reference = optionalText($b, "reference", 160);
        $note = optionalText($b, "note", 1000);
        $date = date("M d, Y");
        $pdo->beginTransaction();
        $row = $pdo->prepare("SELECT * FROM products WHERE id=?");
        $row->execute([$productId]);
        $p = $row->fetch(PDO::FETCH_ASSOC);
        if (!$p) {
            $pdo->rollBack();
            jsonOut(["error" => "Product not found"], 404);
        }
        $delta = $type === "Stock In" ? $qty : -$qty;
        $update = $pdo->prepare(
            "UPDATE products SET quantity=quantity+?, updated=? WHERE id=? AND quantity+? >= 0",
        );
        $update->execute([$delta, $date, $productId, $delta]);
        if ($update->rowCount() !== 1) {
            $pdo->rollBack();
            jsonOut(["error" => "Insufficient stock"], 400);
        }
        $txId = "t-" . bin2hex(random_bytes(12));
        $pdo->prepare(
            "INSERT INTO transactions (id,product_id,item_name,sku,icon,type,qty,date,status,reference,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        )->execute([
            $txId,
            $p["id"],
            $p["name"],
            $p["sku"],
            $p["icon"],
            $type,
            $qty,
            $date,
            "Completed",
            $reference !== "" ? $reference : ($type === "Stock In" ? "QUICK-IN" : "QUICK-OUT"),
            $note,
        ]);
        $pdo->commit();
        jsonOut(["success" => true]);
    }

    if ($route === "transaction-save" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $productId = requiredText($b, "productId", "Product", 100);
        $qty = positiveInt($b["qty"] ?? null, "Quantity");
        $type = $b["type"] ?? "";
        if (!in_array($type, ["Stock In", "Stock Out"], true)) {
            jsonOut(["error" => "Invalid transaction type"], 400);
        }
        $status = $b["status"] ?? "Completed";
        if (!in_array($status, ["Completed", "Pending"], true)) {
            jsonOut(["error" => "Invalid transaction status"], 400);
        }
        $approvalSetting = $pdo->prepare("SELECT value FROM settings WHERE key=?");
        $approvalSetting->execute(["requireApprovalStockOut"]);
        if ($type === "Stock Out" && $approvalSetting->fetchColumn() === "true") {
            $status = "Pending";
        }
        $reference = optionalText($b, "reference", 160);
        $note = optionalText($b, "note", 1000);
        $date = date("M d, Y");
        $pdo->beginTransaction();
        $row = $pdo->prepare("SELECT * FROM products WHERE id=?");
        $row->execute([$productId]);
        $p = $row->fetch(PDO::FETCH_ASSOC);
        if (!$p) {
            $pdo->rollBack();
            jsonOut(["error" => "Product not found"], 404);
        }
        if ($status === "Completed") {
            $delta = $type === "Stock In" ? $qty : -$qty;
            $update = $pdo->prepare(
                "UPDATE products SET quantity=quantity+?,updated=? WHERE id=? AND quantity+? >= 0",
            );
            $update->execute([$delta, $date, $productId, $delta]);
            if ($update->rowCount() !== 1) {
                $pdo->rollBack();
                jsonOut(["error" => "Insufficient stock"], 400);
            }
        }
        $txId = "t-" . bin2hex(random_bytes(12));
        $pdo->prepare(
            "INSERT INTO transactions (id,product_id,item_name,sku,icon,type,qty,date,status,reference,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        )->execute([
            $txId,
            $productId,
            $p["name"],
            $p["sku"],
            $p["icon"],
            $type,
            $qty,
            $date,
            $status,
            $reference !== "" ? $reference : ($type === "Stock In" ? "PO-NEW" : "REQ-NEW"),
            $note,
        ]);
        $pdo->commit();
        jsonOut(["success" => true, "id" => $txId]);
    }

    if ($route === "transaction-approve" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $transactionId = requiredText($b, "id", "Transaction", 100);
        $pdo->beginTransaction();
        $txRow = $pdo->prepare("SELECT * FROM transactions WHERE id=?");
        $txRow->execute([$transactionId]);
        $tx = $txRow->fetch(PDO::FETCH_ASSOC);
        if (!$tx) {
            $pdo->rollBack();
            jsonOut(["error" => "Transaction not found"], 404);
        }
        if ($tx["status"] === "Completed") {
            $pdo->commit();
            jsonOut(["success" => true]);
        }
        if ($tx["status"] !== "Pending") {
            $pdo->rollBack();
            jsonOut(["error" => "Transaction cannot be approved"], 400);
        }
        $pRow = $pdo->prepare("SELECT * FROM products WHERE id=?");
        $pRow->execute([$tx["product_id"]]);
        $p = $pRow->fetch(PDO::FETCH_ASSOC);
        if (!$p) {
            $pdo->rollBack();
            jsonOut(["error" => "Product not found"], 404);
        }
        $qty = (int) $tx["qty"];
        $delta = $tx["type"] === "Stock In" ? $qty : -$qty;
        $update = $pdo->prepare(
            "UPDATE products SET quantity=quantity+?,updated=? WHERE id=? AND quantity+? >= 0",
        );
        $update->execute([$delta, date("M d, Y"), $p["id"], $delta]);
        if ($update->rowCount() !== 1) {
            $pdo->rollBack();
            jsonOut(["error" => "Insufficient stock"], 400);
        }
        $markDone = $pdo->prepare("UPDATE transactions SET status=? WHERE id=? AND status=?");
        $markDone->execute(["Completed", $tx["id"], "Pending"]);
        if ($markDone->rowCount() !== 1) {
            $pdo->rollBack();
            jsonOut(["error" => "Transaction was already processed"], 409);
        }
        $pdo->commit();
        jsonOut(["success" => true]);
    }

    if ($route === "category-save" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $id = "c-" . bin2hex(random_bytes(12));
        $name = requiredText($b, "name", "Category name", 100);
        $code = strtoupper(requiredText($b, "code", "Category code", 8));
        $description = optionalText($b, "description", 500);
        $existing = $pdo->prepare("SELECT id FROM categories WHERE lower(name)=lower(?) AND id<>?");
        $existing->execute([$name, $id]);
        if ($existing->fetch()) {
            jsonOut(["error" => "A category with that name already exists"], 409);
        }
        $pdo->prepare(
            "INSERT INTO categories (id,name,code,description) VALUES (?,?,?,?)",
        )->execute([
            $id,
            $name,
            $code,
            $description !== "" ? $description : "Campus equipment category.",
        ]);
        jsonOut(["success" => true, "id" => $id]);
    }

    if ($route === "user-save" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $id = "u-" . bin2hex(random_bytes(12));
        $name = requiredText($b, "name", "Name", 120);
        $email = strtolower(requiredText($b, "email", "Email", 254));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            jsonOut(["error" => "Enter a valid email address"], 400);
        }
        $role = $b["role"] ?? "";
        $allowedRoles = ["Administrator", "Inventory Staff", "Custodian", "Lab Technician", "Viewer"];
        if (!in_array($role, $allowedRoles, true)) {
            jsonOut(["error" => "Invalid account role"], 400);
        }
        $department = optionalText($b, "department", 120);
        $password = $b["password"] ?? "";
        if (!is_string($password) || strlen($password) < 12 || strlen($password) > 200) {
            jsonOut(["error" => "Password must be between 12 and 200 characters"], 400);
        }
        $existing = $pdo->prepare("SELECT id FROM users WHERE lower(email)=lower(?) AND id<>?");
        $existing->execute([$email, $id]);
        if ($existing->fetch()) {
            jsonOut(["error" => "A staff account with that email already exists"], 409);
        }
        $pdo->prepare(
            "INSERT INTO users (id,name,email,role,department,status,last_active,password_hash) VALUES (?,?,?,?,?,?,?,?)",
        )->execute([
            $id,
            $name,
            $email,
            $role,
            $department,
            "Active",
            "Just added",
            password_hash($password, PASSWORD_DEFAULT),
        ]);
        jsonOut(["success" => true, "id" => $id]);
    }

    if ($route === "user-delete" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $body = requestBody();
        $id = requiredText($body, "id", "Account ID", 64);
        if ($id === ($_SESSION["user_id"] ?? "")) {
            jsonOut(["error" => "You cannot remove your own account"], 409);
        }

        $pdo->exec("BEGIN IMMEDIATE");
        $targetStmt = $pdo->prepare("SELECT id,role,status,password_hash FROM users WHERE id=?");
        $targetStmt->execute([$id]);
        $target = $targetStmt->fetch(PDO::FETCH_ASSOC);
        if (!$target) {
            $pdo->rollBack();
            jsonOut(["error" => "Account not found"], 404);
        }

        if (
            $target["role"] === "Administrator" &&
            $target["status"] === "Active" &&
            !empty($target["password_hash"])
        ) {
            $adminCount = (int) $pdo->query(
                "SELECT COUNT(*) FROM users WHERE role='Administrator' AND status='Active' AND password_hash IS NOT NULL AND password_hash <> ''",
            )->fetchColumn();
            if ($adminCount <= 1) {
                $pdo->rollBack();
                jsonOut(["error" => "The last active administrator account cannot be removed"], 409);
            }
        }

        $deleteStmt = $pdo->prepare("DELETE FROM users WHERE id=?");
        $deleteStmt->execute([$id]);
        $pdo->commit();
        jsonOut(["success" => true]);
    }

    if ($route === "settings-save" && $_SERVER["REQUEST_METHOD"] === "POST") {
        $b = requestBody();
        $campusName = requiredText($b, "campusName", "Campus name", 160);
        $defaultMinStock = positiveInt($b["defaultMinStock"] ?? null, "Default minimum stock");
        foreach (["autoLowStockAlert", "requireApprovalStockOut"] as $setting) {
            if (!isset($b[$setting]) || !is_bool($b[$setting])) {
                jsonOut(["error" => "Setting $setting must be true or false"], 400);
            }
        }
        $values = [
            "campusName" => $campusName,
            "autoLowStockAlert" => $b["autoLowStockAlert"] ? "true" : "false",
            "requireApprovalStockOut" => $b["requireApprovalStockOut"] ? "true" : "false",
            "defaultMinStock" => (string) $defaultMinStock,
        ];
        $stmt = $pdo->prepare(
            "INSERT INTO settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",
        );
        foreach ($values as $key => $value) {
            $stmt->execute([$key, $value]);
        }
        jsonOut(["success" => true]);
    }

    jsonOut(["error" => "Unknown API route"], 404);
} catch (Throwable $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    error_log("Inventory API failure: " . $e->getMessage());
    jsonOut(["error" => "The request could not be completed"], 500);
}
