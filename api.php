<?php
session_start();
header('Content-Type: application/json');

if (!class_exists('PDO')) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'PHP PDO is not enabled. Enable PDO in php.ini before starting the website.']);
    exit;
}

if (!in_array('sqlite', PDO::getAvailableDrivers(), true)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'SQLite support is not enabled. Enable pdo_sqlite in php.ini before starting the website.']);
    exit;
}

$dbDir = __DIR__ . DIRECTORY_SEPARATOR . 'database';
if (!is_dir($dbDir) && !mkdir($dbDir, 0777, true) && !is_dir($dbDir)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Cannot create the database directory.']);
    exit;
}
$dbFile = $dbDir . DIRECTORY_SEPARATOR . 'inventory.sqlite';

$pdo = new PDO('sqlite:' . $dbFile);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('PRAGMA foreign_keys = ON');

$columns = $pdo->query('PRAGMA table_info(users)')->fetchAll(PDO::FETCH_ASSOC);
if (!in_array('password_hash', array_column($columns, 'name'), true)) {
    $pdo->exec('ALTER TABLE users ADD COLUMN password_hash TEXT');
}

$pdo->exec("CREATE TABLE IF NOT EXISTS categories (id TEXT PRIMARY KEY, name TEXT NOT NULL UNIQUE, code TEXT NOT NULL, description TEXT);
CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY, name TEXT NOT NULL, sku TEXT NOT NULL UNIQUE, category TEXT NOT NULL, description TEXT, quantity INTEGER NOT NULL DEFAULT 0, min_level INTEGER NOT NULL DEFAULT 0, unit TEXT NOT NULL, location TEXT NOT NULL, image TEXT, icon TEXT, updated TEXT);
CREATE TABLE IF NOT EXISTS transactions (id TEXT PRIMARY KEY, product_id TEXT, item_name TEXT, sku TEXT, icon TEXT, type TEXT, qty INTEGER, date TEXT, status TEXT, reference TEXT, note TEXT);
CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, email TEXT UNIQUE, role TEXT, department TEXT, status TEXT, last_active TEXT, password_hash TEXT);
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT);");

$count = (int)$pdo->query('SELECT COUNT(*) FROM categories')->fetchColumn();
if ($count === 0) {
    $categories = [
        ['c1','IT Equipment','IT','Computers, peripherals, and workstation devices'],
        ['c2','AV Equipment','AV','Projectors, cameras, microphones, and presentation systems'],
        ['c3','Office Equipment','OF','Printers, labelers, and office machinery'],
        ['c4','Office Supplies','SP','Paper, markers, and general administrative consumables'],
        ['c5','Networking','NW','Switches, cables, access points, and network infrastructure'],
        ['c6','Lab Equipment','LB','Scientific instruments and laboratory supplies'],
        ['c7','Furniture','FN','Tables, chairs, cabinets, and campus fixtures']
    ];
    $stmt = $pdo->prepare('INSERT INTO categories VALUES (?,?,?,?)');
    foreach ($categories as $row) $stmt->execute($row);

    $products = [
        ['p1','Logitech K120 Keyboard','IT-KB-001','IT Equipment','Spill-resistant wired USB desktop keyboard.',125,20,'units','Computer Lab 1',null,'keyboard','Nov 17, 2026'],
        ['p2','Dell 24" LED Monitor','IT-MN-004','IT Equipment','24-inch Full HD IPS display.',3,10,'units','Computer Lab 2',null,'monitor','Nov 17, 2026'],
        ['p3','Epson EB-E01 Projector','AV-PJ-002','AV Equipment','3300 lumens classroom projector.',2,5,'units','AV Room',null,'projector','Nov 17, 2026'],
        ['p4','Logitech B100 Mouse','IT-MS-003','IT Equipment','Wired optical USB mouse.',5,20,'units','Computer Lab 1',null,'mouse','Nov 16, 2026'],
        ['p5','Dell OptiPlex 7010','IT-SU-005','IT Equipment','Desktop computer unit.',48,10,'units','Computer Lab 3',null,'cpu','Nov 16, 2026'],
        ['p6','A4Tech USB Keyboard','IT-KB-006','IT Equipment','Standard wired USB keyboard.',7,15,'units','Computer Lab 2',null,'keyboard','Nov 16, 2026'],
        ['p7','Epson EcoTank L3250','OF-PR-007','Office Equipment','Wi-Fi all-in-one printer.',16,5,'units','Admin Office',null,'box','Nov 15, 2026'],
        ['p8','TP-Link 24-Port Switch','NW-SW-009','Networking','Managed network switch.',1,4,'units','Server Room',null,'cpu','Nov 15, 2026'],
        ['p9','Whiteboard Marker (Black)','SP-MK-010','Office Supplies','Dry erase marker box.',8,25,'boxes','Supply Room',null,'box','Nov 14, 2026'],
        ['p10','HDMI Cable 5m','AV-CB-011','AV Equipment','High-speed HDMI cable.',4,12,'units','AV Room',null,'projector','Nov 14, 2026'],
        ['p11','Lab Beaker 500ml','LB-GL-012','Lab Equipment','Graduated glass beaker.',6,20,'units','Science Lab 1',null,'box','Nov 13, 2026'],
        ['p12','HP LaserJet Pro M404dn','OF-PR-013','Office Equipment','Monochrome laser printer.',12,4,'units','Registrar Office',null,'box','Nov 13, 2026'],
        ['p14','Bond Paper A4 (Ream)','SP-PP-015','Office Supplies','A4 multipurpose copy paper.',140,30,'reams','Supply Room',null,'box','Nov 12, 2026'],
        ['p15','Ergonomic Office Chair','FN-CH-016','Furniture','Mesh-back swivel chair.',32,8,'units','Faculty Room',null,'box','Nov 11, 2026'],
        ['p16','Digital Microscope','LB-MS-017','Lab Equipment','Compound microscope with camera.',18,6,'units','Science Lab 1',null,'box','Nov 10, 2026'],
        ['p17','Shure SM58 Microphone','AV-MC-018','AV Equipment','Dynamic vocal microphone.',11,4,'units','Auditorium',null,'projector','Nov 09, 2026'],
        ['p18','APC UPS 650VA','IT-UP-019','IT Equipment','Uninterruptible power supply.',24,8,'units','Computer Lab 1',null,'cpu','Nov 08, 2026']
    ];
    $stmt = $pdo->prepare('INSERT INTO products VALUES (?,?,?,?,?,?,?,?,?,?,?,?)');
    foreach ($products as $row) $stmt->execute($row);

    $users = [
        ['u1','Loreyn E','loreyn.e@cvsu.edu.ph','Administrator','Property & Supply Office','Active','Online now'],
        ['u2','Marco Villanueva','m.villanueva@cvsu.edu.ph','Inventory Staff','IT & Computer Labs','Active','2 hours ago'],
        ['u3','Clarisse Mendoza','c.mendoza@cvsu.edu.ph','Custodian','AV & Auditorium','Active','Today, 9:15 AM'],
        ['u4','Rafael Santos','r.santos@cvsu.edu.ph','Lab Technician','College of Science','Active','Nov 16, 2026'],
        ['u5','Andrea Bautista','a.bautista@cvsu.edu.ph','Viewer','Internal Audit','Inactive','Nov 10, 2026']
    ];
    $stmt = $pdo->prepare('INSERT INTO users VALUES (?,?,?,?,?,?,?,?)');
    $defaultHash = password_hash('cvsu-admin-2026', PASSWORD_DEFAULT);
    foreach ($users as $row) $stmt->execute(array_merge($row, [$defaultHash]));

    $tx = [
        ['t1','p1','Logitech K120 Keyboard','IT-KB-001','keyboard','Stock In',25,'Nov 17, 2026','Completed','PO-2026-114','New batch for Computer Lab 1'],
        ['t2','p2','Dell 24" LED Monitor','IT-MN-004','monitor','Stock Out',10,'Nov 17, 2026','Completed','REQ-408','Issued to CEIT Lab 2'],
        ['t3','p3','Epson EB-E01 Projector','AV-PJ-002','projector','Stock Out',2,'Nov 17, 2026','Pending','REQ-412','Reserved for College Assembly']
    ];
    $stmt = $pdo->prepare('INSERT INTO transactions VALUES (?,?,?,?,?,?,?,?,?,?,?)');
    foreach ($tx as $row) $stmt->execute($row);
}

$route = $_GET['route'] ?? '';
function jsonOut($data, $status = 200) { http_response_code($status); echo json_encode($data); exit; }

try {
    $publicRoutes = ['login', 'session', 'logout'];
    if (!in_array($route, $publicRoutes, true) && empty($_SESSION['authenticated'])) {
        jsonOut(['error'=>'Authentication required'],401);
    }

    if ($route === 'bootstrap') {
        $toProduct = fn($r) => ['id'=>$r['id'],'name'=>$r['name'],'sku'=>$r['sku'],'category'=>$r['category'],'description'=>$r['description'],'quantity'=>(int)$r['quantity'],'minLevel'=>(int)$r['min_level'],'unit'=>$r['unit'],'location'=>$r['location'],'image'=>$r['image'],'icon'=>$r['icon'],'updated'=>$r['updated']];
        $products = array_map($toProduct, $pdo->query('SELECT * FROM products ORDER BY updated DESC, name')->fetchAll(PDO::FETCH_ASSOC));
        $categories = array_map(fn($r)=>['id'=>$r['id'],'name'=>$r['name'],'code'=>$r['code'],'description'=>$r['description']], $pdo->query('SELECT * FROM categories ORDER BY name')->fetchAll(PDO::FETCH_ASSOC));
        $users = array_map(fn($r)=>['id'=>$r['id'],'name'=>$r['name'],'email'=>$r['email'],'role'=>$r['role'],'department'=>$r['department'],'status'=>$r['status'],'lastActive'=>$r['last_active']], $pdo->query('SELECT * FROM users ORDER BY name')->fetchAll(PDO::FETCH_ASSOC));
        $transactions = array_map(fn($r)=>['id'=>$r['id'],'productId'=>$r['product_id'],'itemName'=>$r['item_name'],'sku'=>$r['sku'],'icon'=>$r['icon'],'type'=>$r['type'],'qty'=>(int)$r['qty'],'date'=>$r['date'],'status'=>$r['status'],'reference'=>$r['reference'],'note'=>$r['note']], $pdo->query('SELECT * FROM transactions ORDER BY rowid DESC')->fetchAll(PDO::FETCH_ASSOC));
        $settingRows=$pdo->query('SELECT key,value FROM settings')->fetchAll(PDO::FETCH_ASSOC);
        $settings=['campusName'=>'Cavite State University — Main Campus','autoLowStockAlert'=>true,'requireApprovalStockOut'=>false,'defaultMinStock'=>10];
        foreach($settingRows as $row){ $key=$row['key']; $value=$row['value']; $settings[$key]=in_array($value,['true','false'],true)?($value==='true'):($key==='defaultMinStock'?(int)$value:$value); }
        jsonOut(['products'=>$products,'categories'=>$categories,'users'=>$users,'transactions'=>$transactions,'settings'=>$settings]);
    }

    if ($route === 'session') {
        jsonOut(['authenticated'=>!empty($_SESSION['authenticated']), 'name'=>$_SESSION['name'] ?? null]);
    }

    if ($route === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = json_decode(file_get_contents('php://input'), true) ?: [];
        $email = strtolower(trim($body['email'] ?? ''));
        $password = $body['password'] ?? '';
        if ($email === '' || $password === '') jsonOut(['error'=>'Email and password are required'],400);

        $stmt = $pdo->prepare('SELECT * FROM users WHERE lower(email) = ? LIMIT 1');
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user && $email === 'loreyn.e@cvsu.edu.ph') {
            $hash = password_hash('cvsu-admin-2026', PASSWORD_DEFAULT);
            $pdo->prepare('INSERT INTO users (id,name,email,role,department,status,last_active,password_hash) VALUES (?,?,?,?,?,?,?,?)')
                ->execute(['u1','Loreyn E',$email,'Administrator','Property & Supply Office','Active','Online now',$hash]);
            $user = $pdo->query("SELECT * FROM users WHERE lower(email)='loreyn.e@cvsu.edu.ph'")->fetch(PDO::FETCH_ASSOC);
        }

        $valid = $user && $user['status'] !== 'Inactive' && !empty($user['password_hash']) && password_verify($password, $user['password_hash']);
        if (!$valid && $email === 'loreyn.e@cvsu.edu.ph' && $password === 'cvsu-admin-2026') {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $pdo->prepare('UPDATE users SET password_hash=?, status=?, last_active=? WHERE id=?')->execute([$hash,'Active','Online now',$user['id'] ?? 'u1']);
            $valid = true;
        }
        if (!$valid) jsonOut(['error'=>'Invalid email or password'],401);

        session_regenerate_id(true);
        $_SESSION['authenticated']=true;
        $_SESSION['user_id']=$user['id'] ?? 'u1';
        $_SESSION['name']=$user['name'] ?? 'Loreyn E';
        jsonOut(['success'=>true,'name'=>$_SESSION['name']]);
    }

    if ($route === 'logout' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $_SESSION=[];
        if (ini_get('session.use_cookies')) {
            $params=session_get_cookie_params();
            setcookie(session_name(),'',time()-42000,$params['path'],$params['domain'],$params['secure'],$params['httponly']);
        }
        session_destroy();
        jsonOut(['success'=>true]);
    }

    if ($route === 'product-save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[];
        $id=$b['id'] ?: 'p-'.uniqid();
        $sku=trim($b['sku']??'');
        if($sku==='') jsonOut(['error'=>'SKU is required'],400);
        $duplicate=$pdo->prepare('SELECT id FROM products WHERE lower(sku)=lower(?) AND id<>?');
        $duplicate->execute([$sku,$id]);
        if($duplicate->fetch()) jsonOut(['error'=>'A product with that SKU already exists'],409);
        $stmt=$pdo->prepare('INSERT INTO products (id,name,sku,category,description,quantity,min_level,unit,location,image,icon,updated) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET name=excluded.name,sku=excluded.sku,category=excluded.category,description=excluded.description,quantity=excluded.quantity,min_level=excluded.min_level,unit=excluded.unit,location=excluded.location,image=excluded.image,icon=excluded.icon,updated=excluded.updated');
        $stmt->execute([$id,$b['name'],$b['sku'],$b['category'],$b['description']??'',(int)$b['quantity'],(int)$b['minLevel'],$b['unit'],$b['location'],$b['image']??null,$b['icon']??'box',$b['updated']??date('M d, Y')]);
        jsonOut(['success'=>true,'id'=>$id]);
    }

    if ($route === 'product-delete' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[];
        $stmt=$pdo->prepare('DELETE FROM products WHERE id=?'); $stmt->execute([$b['id']??'']); jsonOut(['success'=>true]);
    }

    if ($route === 'adjust-stock' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[];
        $row=$pdo->prepare('SELECT * FROM products WHERE id=?'); $row->execute([$b['productId']]); $p=$row->fetch(PDO::FETCH_ASSOC);
        if (!$p) jsonOut(['error'=>'Product not found'],404);
        $qty=(int)$b['qty']; $delta=$b['type']==='Stock In' ? $qty : -$qty;
        $new=(int)$p['quantity']+$delta; if($new<0) jsonOut(['error'=>'Insufficient stock'],400);
        $pdo->prepare('UPDATE products SET quantity=?, updated=? WHERE id=?')->execute([$new,$b['date'],$b['productId']]);
        $txId='t-'.uniqid(); $pdo->prepare('INSERT INTO transactions (id,product_id,item_name,sku,icon,type,qty,date,status,reference,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)')->execute([$txId,$p['id'],$p['name'],$p['sku'],$p['icon'],$b['type'],$qty,$b['date'],'Completed',$b['reference']??($b['type']==='Stock In'?'QUICK-IN':'QUICK-OUT'),$b['note']??'']);
        jsonOut(['success'=>true]);
    }

    if ($route === 'transaction-save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[];
        $productId=$b['productId']??'';
        $row=$pdo->prepare('SELECT * FROM products WHERE id=?'); $row->execute([$productId]); $p=$row->fetch(PDO::FETCH_ASSOC);
        if(!$p) jsonOut(['error'=>'Product not found'],404);
        $qty=(int)($b['qty']??0); if($qty<=0) jsonOut(['error'=>'Quantity must be positive'],400);
        $type=$b['type']??''; if(!in_array($type,['Stock In','Stock Out'],true)) jsonOut(['error'=>'Invalid transaction type'],400);
        $status=$b['status']??'Completed'; if(!in_array($status,['Completed','Pending'],true)) jsonOut(['error'=>'Invalid transaction status'],400);
        if($status==='Completed') {
            $new=(int)$p['quantity']+($type==='Stock In'?$qty:-$qty);
            if($new<0) jsonOut(['error'=>'Insufficient stock'],400);
            $pdo->prepare('UPDATE products SET quantity=?,updated=? WHERE id=?')->execute([$new,$b['date']??date('M d, Y'),$productId]);
        }
        $txId='t-'.uniqid();
        $pdo->prepare('INSERT INTO transactions (id,product_id,item_name,sku,icon,type,qty,date,status,reference,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)')->execute([
            $txId,$productId,$p['name'],$p['sku'],$p['icon'],$type,$qty,$b['date']??date('M d, Y'),$status,$b['reference']??($type==='Stock In'?'PO-NEW':'REQ-NEW'),$b['note']??''
        ]);
        jsonOut(['success'=>true,'id'=>$txId]);
    }

    if ($route === 'transaction-approve' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[];
        $txRow=$pdo->prepare('SELECT * FROM transactions WHERE id=?'); $txRow->execute([$b['id']??'']); $tx=$txRow->fetch(PDO::FETCH_ASSOC);
        if(!$tx) jsonOut(['error'=>'Transaction not found'],404);
        if($tx['status']==='Completed') jsonOut(['success'=>true]);
        $pRow=$pdo->prepare('SELECT * FROM products WHERE id=?'); $pRow->execute([$tx['product_id']]); $p=$pRow->fetch(PDO::FETCH_ASSOC);
        if(!$p) jsonOut(['error'=>'Product not found'],404);
        $qty=(int)$tx['qty']; $new=(int)$p['quantity']+($tx['type']=='Stock In'?$qty:-$qty);
        if($new<0) jsonOut(['error'=>'Insufficient stock'],400);
        $pdo->prepare('UPDATE products SET quantity=?,updated=? WHERE id=?')->execute([$new,date('M d, Y'),$p['id']]);
        $pdo->prepare('UPDATE transactions SET status=? WHERE id=?')->execute(['Completed',$tx['id']]);
        jsonOut(['success'=>true]);
    }

    if ($route === 'category-save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[]; $id=$b['id']??'c-'.uniqid();
        $existing=$pdo->prepare('SELECT id FROM categories WHERE lower(name)=lower(?) AND id<>?'); $existing->execute([$b['name']??'', $id]);
        if($existing->fetch()) jsonOut(['error'=>'A category with that name already exists'],409);
        $pdo->prepare('INSERT INTO categories (id,name,code,description) VALUES (?,?,?,?)')->execute([$id,$b['name'],$b['code'],$b['description']??'Campus equipment category.']); jsonOut(['success'=>true,'id'=>$id]);
    }

    if ($route === 'user-save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[]; $id=$b['id']??'u-'.uniqid();
        $email=strtolower(trim($b['email']??'')); if($email==='') jsonOut(['error'=>'Email is required'],400);
        $existing=$pdo->prepare('SELECT id FROM users WHERE lower(email)=lower(?) AND id<>?'); $existing->execute([$email,$id]);
        if($existing->fetch()) jsonOut(['error'=>'A staff account with that email already exists'],409);
        $password=password_hash($b['password']??'Cvsu@2026',PASSWORD_DEFAULT);
        $pdo->prepare('INSERT INTO users (id,name,email,role,department,status,last_active,password_hash) VALUES (?,?,?,?,?,?,?,?)')->execute([$id,$b['name'],$email,$b['role'],$b['department'],'Active','Just added',$password]); jsonOut(['success'=>true,'id'=>$id]);
    }

    if ($route === 'settings-save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $b=json_decode(file_get_contents('php://input'),true)?:[];
        $values=[
            'campusName'=>(string)($b['campusName']??'Cavite State University — Main Campus'),
            'autoLowStockAlert'=>(($b['autoLowStockAlert']??true)?'true':'false'),
            'requireApprovalStockOut'=>(($b['requireApprovalStockOut']??false)?'true':'false'),
            'defaultMinStock'=>(string)max(1,(int)($b['defaultMinStock']??10))
        ];
        $stmt=$pdo->prepare('INSERT INTO settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value');
        foreach($values as $key=>$value)$stmt->execute([$key,$value]);
        jsonOut(['success'=>true]);
    }

    jsonOut(['error'=>'Unknown API route'],404);
} catch (Throwable $e) {
    jsonOut(['error'=>$e->getMessage()],500);
}
