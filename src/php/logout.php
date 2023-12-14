<?php
session_start();
session_unset();  // remove all session variables
session_destroy(); // destroy the session

// Check if the HTTP referer is set
if(isset($_SERVER['HTTP_REFERER'])) {
    // Redirect back to the page they came from
    header("Location: " . $_SERVER['HTTP_REFERER']);
} else {
    // If HTTP referer not set, redirect to the homepage
    header("Location: index.php");
}
exit();
?>
