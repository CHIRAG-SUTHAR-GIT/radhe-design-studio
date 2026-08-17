<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['success' => true, 'message' => 'Thank you.']);
    exit;
}

$clean = fn(string $key, int $max = 500) => mb_substr(trim(strip_tags((string) ($_POST[$key] ?? ''))), 0, $max);
$name = $clean('name', 120);
$email = filter_var($clean('email', 190), FILTER_VALIDATE_EMAIL);
$phone = $clean('phone', 40);
$type = $clean('project_type', 80);
$budget = $clean('budget', 80);
$timeline = $clean('timeline', 120);
$message = $clean('message', 3000);

if (!$name || !$email || !$type || !$message) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(503);
    echo json_encode(['success' => false, 'message' => 'Form setup is not complete. Please email us directly.']);
    exit;
}

$config = require $configFile;

try {
    $pdo = new PDO($config['db_dsn'], $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $statement = $pdo->prepare('INSERT INTO inquiries (name,email,phone,project_type,budget,timeline,message,ip_address) VALUES (?,?,?,?,?,?,?,?)');
    $statement->execute([$name, $email, $phone, $type, $budget, $timeline, $message, $_SERVER['REMOTE_ADDR'] ?? null]);

    $subject = 'New website inquiry — ' . $name;
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nProject: $type\nBudget: $budget\nTimeline: $timeline\n\n$message";
    @mail($config['mail_to'], $subject, $body, "From: website@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\nReply-To: $email");

    echo json_encode(['success' => true, 'message' => 'Thank you — we’ll be in touch within two working days.']);
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'We could not send your inquiry. Please email us directly.']);
}
