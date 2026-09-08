<?php
/* ─────────────────────────────────────────────────────────────────────────
   The gate on the studio desk.

   Apache's own directory password needs an absolute path to the .htpasswd
   file, and that path is not knowable from here — so the check is done in
   PHP instead, which works wherever the site is hosted without anyone
   having to look up a server path.

   The password itself is not in this file. What is stored is a PBKDF2-
   SHA256 digest over a random salt at 210000 iterations, which cannot be
   read backwards; a guess is hashed the same way and the two digests are
   compared in constant time.
   ───────────────────────────────────────────────────────────────────────── */
declare(strict_types=1);

const DESK_USER = 'radhe';
const DESK_SALT = '34292fb63aaf9f3d563bd7b0fee3d546';
const DESK_HASH = 'd94bb8731ee0ea426bb460ff50cb024cedecd48a52247956ea19098d3e8ab0c1';
const DESK_ITER = 210000;

session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Lax',
    // Sent over HTTPS only, once the certificate is live.
    'secure'   => (($_SERVER['HTTPS'] ?? '') === 'on'),
]);
session_start();

if (isset($_GET['logout'])) {
    $_SESSION = [];
    session_destroy();
    header('Location: index.php');
    exit;
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    $given = hash_pbkdf2('sha256', (string) $_POST['password'],
                         hex2bin(DESK_SALT), DESK_ITER, 32, true);
    $userOk = hash_equals(DESK_USER, (string) ($_POST['user'] ?? ''));
    $passOk = hash_equals(hex2bin(DESK_HASH), $given);
    if ($userOk && $passOk) {
        session_regenerate_id(true);          // a fresh id, so a stolen one is useless
        $_SESSION['desk'] = true;
        header('Location: ' . basename($_SERVER['PHP_SELF']));
        exit;
    }
    // A wrong answer costs a moment, which makes guessing at scale pointless.
    usleep(600000);
    $error = 'That is not right.';
}

if (empty($_SESSION['desk'])) {
    http_response_code(401);
    header('Content-Type: text/html; charset=utf-8');
    ?><!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>Studio desk</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0; min-height: 100svh;
      display: grid; place-items: center;
      padding: 1.5rem;
      background: #14130f; color: #f5f2ec;
      font: 400 16px/1.6 Inter, system-ui, sans-serif;
    }
    form {
      width: min(100%, 22rem);
      display: grid; gap: .9rem;
    }
    .brand { font-size: 1.5rem; font-weight: 600; letter-spacing: -.02em; }
    .brand span { display: block; margin-top: .2rem; font-size: .72rem; font-weight: 400;
                  letter-spacing: .22em; text-transform: uppercase; color: rgba(245,242,236,.5); }
    label { display: grid; gap: .35rem; font-size: .72rem; letter-spacing: .1em;
            text-transform: uppercase; color: rgba(245,242,236,.55); }
    input {
      width: 100%; padding: .85rem .9rem;
      border: 1px solid rgba(245,242,236,.14); border-radius: 10px;
      background: rgba(245,242,236,.04); color: #f5f2ec;
      font: inherit; font-size: .95rem; outline: none;
      transition: border-color .3s ease, background-color .3s ease;
    }
    input:focus { border-color: #C1712C; background: rgba(245,242,236,.07); }
    button {
      margin-top: .3rem; padding: .85rem 1rem;
      border: 0; border-radius: 10px;
      background: #f5f2ec; color: #14130f;
      font: inherit; font-weight: 600; font-size: .92rem; cursor: pointer;
      transition: background-color .3s ease;
    }
    button:hover { background: #C1712C; color: #fff; }
    .bad { margin: 0; font-size: .8rem; color: #ff9b9b; }
    .back { font-size: .75rem; color: rgba(245,242,236,.45); text-decoration: none; }
    .back:hover { color: rgba(245,242,236,.8); }
  </style>
</head>
<body>
  <form method="post" autocomplete="on">
    <p class="brand">Radhe<span>Studio desk</span></p>
    <?php if ($error !== '') { echo '<p class="bad">' . htmlspecialchars($error) . '</p>'; } ?>
    <label>User
      <input name="user" autocomplete="username" autofocus required>
    </label>
    <label>Password
      <input name="password" type="password" autocomplete="current-password" required>
    </label>
    <button type="submit">Open the desk</button>
    <a class="back" href="../index.html">&larr; back to the site</a>
  </form>
</body>
</html><?php
    exit;
}
