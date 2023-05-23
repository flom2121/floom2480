<?php
// Code in connection.php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "login_sample_db";

// Connection code
$conn = mysqli_connect($host, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
