<!DOCTYPE html>
<html>
<head>
    <title>Sign Up Page</title>
    <link rel="stylesheet" type="text/css" href="../css/constant.css">
    <link rel="stylesheet" type="text/css" href="../css/signUp.css">
</head>
<body>
    <div class="container">
        <form id="signUpForm" action="signUp.php" method="post">
            <h2>Sign Up</h2>
            <input type="text" name="firstName" placeholder="First Name" required>
            <input type="text" name="lastName" placeholder="Last Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required>
            <button type="submit">Sign Up</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST['email']) || empty($_POST['password']) || empty($_POST['confirmPassword']) || $_POST['password'] != $_POST['confirmPassword']) {
                echo "<p>Invalid input. Please make sure all fields are filled correctly.</p>";
            } else {
                $email = $_POST['email'];
                $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

                require_once("configure.php");

                $tableName = "users";

                // Check if email already exists
                $stmt = $pdo->prepare("SELECT * FROM $tableName WHERE email = :email");
                $stmt->execute(['email' => $email]);
                if ($stmt->fetch()) {
                    echo "<p>Email already registered. Please use a different email.</p>";
                } else {
                    // Insert new user
                    $stmt = $pdo->prepare("INSERT INTO $tableName (firstName, lastName, email, password_hash) VALUES (:firstName, :lastName, :email, :password)");
                    $stmt->execute([
                        'firstName' => $_POST['firstName'],
                        'lastName' => $_POST['lastName'],
                        'email' => $email,
                        'password' => $password
                    ]);
                    echo "<p>Registration successful. <a href='signIn.php'>Sign in</a></p>";
                }

                $pdo = null;
            }
        }
        ?>
    </div>
    <script src="../js/signUp.js"></script>
</body>
</html>
