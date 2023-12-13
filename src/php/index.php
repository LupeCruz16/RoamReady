<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoamReady</title>
    <link rel="stylesheet" type="text/css" href="../css/constant.css">
    <link rel="stylesheet" href="../css/index.css">
</head>
<body>
    <div class="navbar">
        <div class="nav-links">
            <a href="#home" class="home-link"><img src="../images/Logo1.png" alt="Logo" height="50" width="50"></a>
            <a href="#explore">Explore Destinations</a>
            <a href="#plan">Plan Your Trip</a>
            <a href="#discover">Discover Experiences</a>
        </div>
        <div class="signin">
            <?php
            if (isset($_SESSION['user_id'])) {
                // If the user is logged in, show a Log Out button
                echo '<a href="logout.php" class="signin-btn">Log Out</a>';
            } else {
                // If the user is not logged in, show a Sign In button
                echo '<a href="test.php" class="signin-btn">Sign In</a>';
            }
            ?>
        </div>
    </div>    
    
    <div class="header">
        <div class="image-container">
            <div class="overlay"></div>
        </div>
        <h1>Ready to Roam?</h1>
        <p>Explore new and exciting locations with our random travel location generator.</p>
    
        <div class="user-input">
            <input type="text" class="locationInput" placeholder="Enter a location">
            <button class="travelButton">Travel</button>
        </div>
    </div>

    <div class="suggested-locations">
        <div class="destination">
            <img src="../images/Sydney.jpg" alt="Sydney">
            <h3>Sydney</h3>
            <p>123 Sample St, Sydney NSW 2000 AU</p>
        </div>
        <div class="destination">
            <img src="../images/NewYork.jpg" alt="New York">
            <h3>New York</h3>
            <p>123 Sample St, New York NY 10000 USA</p>
        </div>
        <div class="destination">
            <img src="../images/Switzerland.jpg" alt="Switzerland">
            <h3>Switzerland</h3>
            <p>123 Sample St, Switzerland NYW 10000 SW</p>
        </div>
    </div>

    <div class="next-adventure">
        <table class="next-adventure-table">
            <tr>
                <td class="next-adventure-content">
                    <h1>Discover Your Next Adventure with Us</h1>
                    <p>Explore unique travel desinations and create unforgettable memories.</p>
                    <button class = "next-adventure-start-button">Start</button>
                    <button class = "next-adventure-learn-more-button">Learn More</button>
                </td>
                <td class="next-adventure-img">
                    <img src="../images/nextAdventure.png" alt="Next Adventure Awaits">
                </td>
            </tr>
        </table>
    </div>
    
    <div class="info-section">
        <div class="info-section-column">
            <img src="../images/map-Icon.png" alt="Icon 1">
            <h2>Dicover Your Next<br> Adventure</h2>
            <p>Our random travel location generator takes the<br> guess work out of planning your next trip.</p>
        </div>
        <div class="info-section-column">
            <img src="../images/suitcase-Icon.png" alt="Icon 2">
            <h2>Plan Your Dream Vacation</h2>
            <p>Our travel gwenerator helps you create unforgettable<br> memories.</p>
        </div>
        <div class="info-section-column">
            <img src="../images/plane-Icon.png" alt="Icon 3">
            <h2>Find Hidden Gems<br> Around the World</h2>
            <p>Uncover unique desinations you never knew existed.</p>
        </div>
    </div>

    <div class = "social-network">
        <div class = "social-network-col1">
            <a href="#home" class="home-link"><img src="../images/Logo1.png" alt="Logo" height="120" width="120"></a>
            <p class = "social-col1">Stay up to date on the latest features and releases by joining our newsettler.</p>
            <div>
                <input type="text" class="emailInput" placeholder="Email Address">
                <button class="subscribeButton">Subscribe</button>
            </div>
            <p style = "font-size: 12px;">By subscribing you aree to our Privacy Policy and consent to receive updates from our<br> company.</p>
        </div>
        <div class = "social-network-col2">
            <h2 style = "font-size: 25px;">Explore</h2>
            <p>Explore Desinations</p>
            <p>Plan Your Trip</p>
            <p>Discover Experiences</p>
        </div>
        <div class = "social-network-col3">
            <h2 style = "font-size: 25px;">Follow us</h2>
            <p style = "display: flex; align-items: center;">
                <a href="#facebook" class="facebook-logo"><img src="../images/facebookLogo.png" alt="Facebook Logo" height="40" width="40"></a>
                Facebook
            </p>
            <p style = "display: flex; align-items: center;">
                <a href="#instagram" class="instagram-logo"><img src="../images/instagramLogo.png" alt="Instagram Logo" height="40" width="40"></a>
                Instagram
            </p>
            <p style = "display: flex; align-items: center;">
                <a href="#twitter" class="twitter-logo"><img src="../images/twitterLogo.png" alt="Twitter Logo" height="40" width="40"></a>
                X
            </p>
        </div>
    </div>

    <div class="footer">
        <div class = "copyright">
            <p>&copy; 2023 RoamReady. All rights reserved.</p>
        </div>
    </div>
    
</body>
</html>
