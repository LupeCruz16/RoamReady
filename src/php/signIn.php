<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Sign In Page</title>
    <link rel="stylesheet" type="text/css" href="../css/constant.css">
    <link rel="stylesheet" type="text/css" href="../css/signIn.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form id="signInForm" action="signIn.php" method="post">
                <h2>Sign In</h2>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Sign In</button>
                <p>Don't have an account? <a href="signUp.php">Sign up</a></p>
            </form>

            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (!empty($_POST['email']) && !empty($_POST['password'])) {
                    $email = $_POST['email'];
                    $password = $_POST['password'];

                    require_once("configure.php");
                    $tableName = "users"; 

                    // Use prepared statements for security
                    $sql = "SELECT * FROM $tableName WHERE email = :email";
                    $stmt = $pdo->prepare($sql);
                    $stmt->execute(['email' => $email]);

                    if ($row = $stmt->fetch()) {
                        if (password_verify($password, $row['password_hash'])) {
                            $_SESSION['user_id'] = $row['user_id'];
                            $_SESSION['email'] = $email;

                            header("Location: index.php"); // Redirect to index.php
                            exit();
                        } else{
                            echo "<p>Invalid password. Please try again.</p>";
                        }
                    } else {
                        echo "<p>Email not found. Please try again or sign up.</p>";
                    }

                    $pdo = null;
                }
            }
            ?>

        </div>
    </div>
</body>
</html>
