<?php
// Set headers for security (optional but good practice)
header("X-Powered-By: Docker-PHP");

echo "<h1>Hello from PHP Docker Container 🚀</h1>";
echo "<p>This application is running inside Docker.</p>";

echo "<h3>Server Information:</h3>";
// Using htmlspecialchars to ensure output is safe
echo "PHP Version: " . htmlspecialchars(phpversion()) . "<br>";
echo "Server Date: " . date('Y-m-d H:i:s');
?>
