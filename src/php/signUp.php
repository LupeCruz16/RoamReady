<!DOCTYPE html>
<html>
<head>
    <title>Sign Up Page</title>
    <link rel="stylesheet" type="text/css" href="../css/signUp.css">
    <link rel="stylesheet" type="text/css" href="../css/global/app.css">
    <link rel="stylesheet" type="text/css" href="../css/global/constant.css">
    <link rel="stylesheet" type="text/css" href="../css/global/common.css">
</head>
<body>
    <div class="container">
        <form id="signUpForm" action="signUp.php" method="post">
            <h2 class = "textSizeM">Sign Up</h2>
            <div class = "paddingXS"></div>
            <input type="text" class = "textSizeXS" name="firstName" placeholder="First Name" required>
            <div class = "paddingXS"></div>
            <input type="text" class = "textSizeXS" name="lastName" placeholder="Last Name" required>
            <div class = "paddingXS"></div>
            <input type="email" class = "textSizeXS" name="email" placeholder="Email" required>
            <div class = "paddingXS"></div>
            <input type="password" class = "textSizeXS" name="password" placeholder="Password" required>
            <div class = "paddingXS"></div>
            <input type="password" class = "textSizeXS" name="confirmPassword" placeholder="Confirm Password" required>
            <div class = "paddingXS"></div>
            <button type="submit" class = "textSizeXS darkButton">Sign Up</button>
            <div class = "paddingS"></div>
            <p class = "textSizeXS">Have an account? <a href="signIn.php" class = "textSizeXS">Log in</a></p>
            <div class = "paddingXS"></div>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST['email']) || empty($_POST['password']) || empty($_POST['confirmPassword']) || $_POST['password'] != $_POST['confirmPassword']) {
                echo "<div class = 'paddingS'></div><p class = 'textSizeS'>Invalid input. Please make sure all fields are filled correctly.</p>";
            } else {
                $email = $_POST['email'];
                $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

                require_once("configure.php");

                $tableName = "users";

                // Check if email already exists
                $stmt = $pdo->prepare("SELECT * FROM $tableName WHERE email = :email");
                $stmt->execute(['email' => $email]);
                if ($stmt->fetch()) {
                    echo "<div class = 'paddingS'></div><p class = 'textSizeS'>Email already registered. Please use a different email.</p>";
                } else {
                    // Insert new user
                    $stmt = $pdo->prepare("INSERT INTO $tableName (firstName, lastName, email, password_hash) VALUES (:firstName, :lastName, :email, :password)");
                    $stmt->execute([
                        'firstName' => $_POST['firstName'],
                        'lastName' => $_POST['lastName'],
                        'email' => $email,
                        'password' => $password
                    ]);
                    echo "<div class = 'paddingS'></div><p class = 'textSizeS'>Registration successful. <a href='signIn.php'>Sign in</a></p>";
                }

                $pdo = null;
            }
        }
        ?>
    </div>
    <script src="../js/signUp.js"></script>
</body>
</html>
