<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gift_suggestions";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$user = $_POST['username'];
$pass = $_POST['password'];

// Check user credentials using prepared statements
$stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])) {
        // Set user as logged in using localStorage via JavaScript and store the username
        echo "<script>
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('username', '" . $user . "');
                window.location.href = 'index.html';
              </script>";
        exit();
    } else {
        // Redirect to login page with error message
        header("Location: login_page.html?error=invalidpassword");
        exit();
    }
} else {
    // Redirect to login page with error message
    header("Location: login_page.html?error=invalidusername");
    exit();
}

$conn->close();
?>
