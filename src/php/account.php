<?php
session_start();
include './configure.php';
$userData = null;

if (isset($_SESSION['user_id'])) {
    try {
        // Prepare and execute query using PDO
        $stmt = $pdo->prepare("SELECT email, firstName, lastName FROM users WHERE user_id = ?");
        $stmt->bindParam(1, $_SESSION['user_id']);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            // Fetch user data
            $userData = $stmt->fetch(PDO::FETCH_ASSOC);
        }
    } catch (PDOException $e) {
        // Handle any errors here
        echo "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Account Portal Page</title>
    <link rel="stylesheet" type="text/css" href="../css/account.css">
    <link rel="stylesheet" type="text/css" href="../css/nav.css">
    <link rel="stylesheet" type="text/css" href="../css/footer.css">
    <link rel="stylesheet" type="text/css" href="../css/global/app.css">
    <link rel="stylesheet" type="text/css" href="../css/global/constant.css">
    <link rel="stylesheet" type="text/css" href="../css/global/common.css">
</head>
<body>
    <div class = "navComponent">
            <div class = "paddingGlobal">
                <div class="largeContainer">
                    <div class="navContent">
                        <div class="navContent-Left">
                            <div class = "imageWrapper">
                                <a href="index.php" class="signin-btn"><img src="../images/Logo1.png" loading="lazy" alt="Logo" height="50" width="50"/></a>
                            </div>
                            <a href="index.php" class = "navTextElement textSizeS">
                                Home
                            </a>
                            <a href="#plan"
                            class = "navTextElement textSizeS"
                            >Discover
                            </a>
                            <a href="#discover"
                            class = "navTextElement textSizeS"
                            >Plan&nbsp;Trip
                            </a>
                        </div>
                        <div class = "navContent-Right">
                            <div class = "signin-btn navTextElement textSizeS">
                                <?php
                                if (isset($_SESSION['user_id'])) {
                                    // If the user is logged in, show a Log Out button
                                    echo '<a href="logout.php" class="signin-btn navTextElement textSizeS">Log Out</a>';
                                } else {
                                    // If the user is not logged in, show a Log In button
                                    echo '<a href="signIn.php" class="signin-btn navTextElement textSizeS">Log In</a>';
                                }
                                ?>
                            </div>
                            <div class = "navTextElement textSizeS signUpText">
                                <?php
                                if (isset($_SESSION['user_id'])) {
                                    // If the user is logged in, show My Account
                                    echo '<a href="account.php" class = "navTextElement textSizeS signUpText"">My Account</a>';
                                } else {
                                    // If the user is not logged in, show Sign Up
                                    echo '<a href="signUp.php" class = "navTextElement textSizeS signUpText"> Sign&nbsp;Up </a>';
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class = "accountSection">
            <div class = "paddingGlobal">   
                <div class = "largeContainer">
                    <div class = "paddingSection-M">
                        <div class = "accountContent">
                            <div class = "accountContent-Left marginLeft-S">
                                <div class = "textSizeL textAlign-Left">RoamReady</div>
                                <div class = "paddingXS"></div>
                                <div class = "textSizeM textAlign-Left">
                                    <?php echo $userData ? htmlspecialchars($userData['firstName'] . ' ' . $userData['lastName']) : ''; ?>
                                </div>
                                <div class = "paddingXS"></div>
                                <div class = "textSizeS textAlign-Left">
                                    <?php echo $userData ? htmlspecialchars($userData['email']) : 'Not logged in'; ?>
                                </div>
                                <div class = "paddingS"></div>
                                <div class = "paddingS"></div>
                                <?php if (isset($_SESSION['user_id'])): ?>
                                    <a class="textSizeS textAlign-Left" href="deleteAccount.php" style="text-decoration: none; color: var(--text-100)">Delete Account</a>
                                    <div class="paddingXS"></div>
                                    <a class="textSizeS textAlign-Left" style="text-decoration: none; color: var(--text-100)">Change Password</a>
                                    <div class="paddingXS"></div>
                                    <a class="textSizeS textAlign-Left" style="text-decoration: none; color: var(--text-100)">Change Email</a>
                                    <div class="whiteSpace"></div>
                                <?php endif; ?>
                            </div>
                            <div class = "accountContent-Right">
                                <div class = "paddingS"></div>
                                <div class = "textSizeS textAlign-Left">Liked Trips</div>
                                <div class = "paddingXS"></div>
                                <div class = "likedTrips">
                                    <div class = "textSizeS">Nothing to see here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <footer class = "footerSection backgroundColor-Secondary">
            <div class = "paddingGlobal">
                <div class = "largeConainter">
                    <div class = "paddingSection-M">
                        <div class = "footerContent textColor-Secondary">
                            <div class = "footerColumn">
                                <div class = "footerImageWrapper textAlign-Left">
                                    <a href="index.php" class="signin-btn"><img src="../images/Logo1.png" loading="lazy" alt="Logo" height="100" width="100"/></a>
                                </div>
                            </div>
                            <div class = "footerColumn textAlign-Left">
                                <div class = "textSizeS">Support</div>
                                <a class = "textSizeXS footerElem textColor-Secondary" href = "account.php">My Account</a>
                                <div class = "textSizeXS">Contact Us</div>
                                <div class = "textSizeXS">FAQ</div>
                            </div>
                            <div class = "footerColumn textAlign-Left">
                                <div class = "textSizeS">Explore</div>
                                <a href="index.php" class = "footerElem textColor-Secondary textSizeXS">
                                    Home
                                </a>
                                <a class = "textSizeXS footerElem textColor-Secondary" href = "discover.php">Discover</a>
                                <div class = "textSizeXS">Plan Trip</div>
                            </div>
                            <div class = "footerColumnLast">
                                <div class = "textSizeS">Save your travel inspirations</div>
                                <div class = "paddingS"></div>
                                <a href = "signUp.php">
                                    <button class = "textSizeXS darkButton" href = "signUp.php">Sign Up</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</body>
</html>
