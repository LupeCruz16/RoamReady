<?php
session_start();
include 'configure.php'; // Include your database configuration file

if(isset($_POST['confirm_delete'])) {
    $userId = $_SESSION['user_id']; // Get user ID from session

    // SQL to delete a user record
    $sql = "DELETE FROM users WHERE user_id = :user_id";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':user_id', $userId, PDO::PARAM_INT);

    if($stmt->execute()) {
        // Handle successful deletion, e.g., logging out the user
        header("Location: index.php");
        exit();
    } else {
        // Handle error
        echo "Error deleting account";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Sign In Page</title>
    <link rel="stylesheet" type="text/css" href="../css/signIn.css">
    <link rel="stylesheet" type="text/css" href="../css/global/app.css">
    <link rel="stylesheet" type="text/css" href="../css/global/constant.css">
    <link rel="stylesheet" type="text/css" href="../css/global/common.css">
</head>
<body>
    <div class="container" style = "text-align: center">
        <form method="post">
            <div class = "textSizeS">Are you sure you want to delete your account?<br></br>This cannot be undone.</div>
            <div class = "paddingS"></div>
            <input type="submit" name="confirm_delete"  class = "textSizeXS darkButton"value="Yes, delete my account">
        </form>
    </div>
</body>
</html>

