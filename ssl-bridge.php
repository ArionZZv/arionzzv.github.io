<?php
$file = $_GET['file'] ?? '';

$file = preg_replace('/[^a-zA-Z0-9_\-]/', '', $file);

$filePath = __DIR__ . '/ssl-check/' . $file;

if (!empty($file) && file_exists($filePath)) {
    header('Content-Type: text/plain');
    echo file_get_contents($filePath);
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "Punch Salad.";
}