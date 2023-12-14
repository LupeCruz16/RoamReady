<?php
session_start();
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
    <div class="container">
        <div class="form-container">
            <form id="signInForm" action="signIn.php" method="post">
                <h2 class = "textSizeM">Log In</h2>
                <div class = "paddingXS"></div>
                <input type="email" class = "textSizeXS" name="email" placeholder="Email" required>
                <div class = "paddingXS"></div>
                <input type="password" class = "textSizeXS" class = "textSizeXS" name="password" placeholder="Password" required>
                <div class = "paddingXS"></div>
                <button type="submit" class = "textSizeXS darkButton">Log In</button>
                <div class = "paddingS"></div>
                <p class = "textSizeXS">Don't have an account? <a href="signUp.php" class = "textSizeXS">Sign up</a></p>
                <div class = "paddingXS"></div>
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
                            echo "<div class = 'paddingS'></div><p class = 'textSizeS'>Invalid password. Please try again.</p>";
                        }
                    } else {
                        echo "<div class = 'paddingS'></div><p class = 'textSizeS'>Email not found. Please try again or sign up.</p>";
                    }

                    $pdo = null;
                }
            }
            ?>

        </div>
    </div>
</body>
</html>
