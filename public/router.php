<?php
if (preg_match('/\.(?:js|css|gif|jpg|jpeg|png|ico|svg|woff|woff2|ttf)$/', $_SERVER["REQUEST_URI"])) {
    return false;
}

$_GET['_route'] = $_SERVER["REQUEST_URI"];
require_once __DIR__ . '/index.php';
