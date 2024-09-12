<?php
// Database connection
$host = "localhost";   
$user = "root";        
$pass = "";            
$dbname = "gift_suggestions"; 

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode("Connection failed: " . $conn->connect_error)); 
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capture user selections sent via POST
    $age = isset($_POST['age']) ? $_POST['age'] : null;
    $gender = isset($_POST['gender']) ? $_POST['gender'] : null;
    $relationship = isset($_POST['relationship']) ? $_POST['relationship'] : null;
    $occasion = isset($_POST['occasion']) ? $_POST['occasion'] : null;
    $hobbies = isset($_POST['hobbies']) ? $_POST['hobbies'] : null;

    // Debugging: print received values
    if (!$age || !$gender || !$relationship || !$occasion || !$hobbies) {
        die(json_encode("Missing data from POST: " . json_encode($_POST)));
    }

    // SQL query to fetch the gift suggestion
    $query = "SELECT Gift FROM gift_data WHERE Age = '$age' AND Gender = '$gender' AND Relationship = '$relationship' AND Occasion = '$occasion' AND Hobbies = '$hobbies'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row['Gift']);
    } else {
        echo json_encode("No gift suggestion found for your selection.");
    }
} else {
    echo json_encode("Invalid request method. Use POST.");
}

$conn->close();
?>
