<?php
/* ─────────────────────────────────────────────────────────────────────────
   The website's enquiries, for the desk.

   contact-handler.php writes every submission to the inquiries table. The
   desk keeps its own record in the browser. This is the one road between
   them: it reads what the website has taken and hands it over as JSON, and
   the desk folds anything new into its own list.

   It never writes. Whatever the studio then does with an enquiry — a stage,
   a follow-up date, notes — belongs to the desk, and a later sync leaves
   all of that alone.
   ───────────────────────────────────────────────────────────────────────── */
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$fail = function (string $reason, int $code = 200): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'reason' => $reason, 'rows' => []]);
    exit;
};

// The gate, without the login page: this is asked for by script, so an
// answer it can read is more use than a form it cannot.
if (empty($_SESSION['desk'])) { $fail('auth', 401); }

$configFile = __DIR__ . '/../config.php';
if (!is_file($configFile)) { $fail('no-config'); }

$config = require $configFile;

try {
    $pdo = new PDO($config['db_dsn'], $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $rows = $pdo->query(
        'SELECT id, name, email, phone, project_type, budget, timeline, message, status, created_at
           FROM inquiries
       ORDER BY id DESC
          LIMIT 500'
    )->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['ok' => true, 'rows' => $rows]);
} catch (Throwable $exception) {
    error_log('[desk] enquiries: ' . $exception->getMessage());
    $fail('db');
}
