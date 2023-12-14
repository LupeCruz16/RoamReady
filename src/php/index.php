<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RoamReady</title>
    <link rel="stylesheet" type="text/css" href="../css/nav.css">
    <link rel="stylesheet" type="text/css" href="../css/home/hero.css">
    <link rel="stylesheet" type="text/css" href="../css/home/mission.css">
    <link rel="stylesheet" type="text/css" href="../css/home/gettingStarted.css">
    <link rel="stylesheet" type="text/css" href="../css/home/reccomendation.css">
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
                            <div class = "signin-btn navTextElement textSizeS"></div>
                            <?php
                            if (isset($_SESSION['user_id'])) {
                                // If the user is logged in, show a Log Out button
                                echo '<a href="logout.php" class="signin-btn navTextElement textSizeS">Log Out</a>';
                            } else {
                                // If the user is not logged in, show a Log In button
                                echo '<a href="signIn.php" class="signin-btn navTextElement textSizeS">Log In</a>';
                            }
                            ?>
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
    <div class = "heroSection heroSectionBackgroundImg">
            <div class = "paddingGlobal">
                <div class = "largeContainer">
                    <div class = "paddingSection-L">
                        <div class = "heroContent">
                            <div class = "textSizeL">
                                Randomize your next travel getaway
                            </div>
                            <div class = "paddingS"></div>
                            <button class = "textSizeS darkButton">Get Started</button>
                        </div>
                    </div>
                </div>               
            </div>
    </div>
    <div class = "missionSection">
            <div class = "paddingGlobal">
                <div class = "largeContainer">
                    <div class = "paddingSection-M">
                        <div class = "missionContent">
                            <div class = "missionContent-Left">
                                <div class = "textSizeM textAlign-Left">Our Mission</div>
                            </div>
                            <div class = "missionContent-Right">
                                <div class = "textSizeS marginLeft-S textAlign-Left">
                                Traveling is fun, however we run into the issue of where do we go too often. 
                                If you are a thrill seeker who is so spontaneous you would allow our site to give 
                                you your next travel location, then we have got you covered! 
                                <br></br>
                                <br></br>
                                We are proud to help inspire you and give you our known tips and tricks for 
                                traveling anywhere in the world!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class = "gettingStartedSection backgroundColor-Secondary">
            <div class = "svgIcon">
                <svg 
                    viewBox="0 0 32 32" 
                    enable-background="new 0 0 32 32" 
                    id="_x3C_Layer_x3E_" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="#000000">
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <g id="Airplane_x2C__plane_x2C__flight_x2C__takeoff"> <g id="XMLID_102_"> 
                    <line fill="none" id="XMLID_886_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.5" x2="5.295" y1="20.71" y2="19.474"></line> 
                    <line fill="none" id="XMLID_885_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.5" x2="7.295" y1="8.728" y2="6.774"></line> 
                    <line fill="none" id="XMLID_884_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="4.529" x2="10.295" y1="24.652" y2="22.774"></line> 
                    <path d=" M14.398,18.689l-1.339,3.767c-0.139,0.391,0.231,0.771,0.625,0.643l1.258-0.408c0.1-0.033,0.188-0.096,0.249-0.181l5.854-8.01" fill="none" id="XMLID_144_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> 
                    <path d=" M25.597,8.714l-5.506,1.789l-7.974-5.61c-0.126-0.096-0.29-0.116-0.442-0.066l-1.531,0.497c-0.304,0.1-0.437,0.468-0.265,0.738 l4.03,6.45l-6.115,1.986c-0.637,0.208-1.329,0.086-1.854-0.333l-1.783-1.408c-0.129-0.104-0.306-0.132-0.467-0.079l-0.97,0.314 c-0.333,0.109-0.456,0.506-0.24,0.783l1.948,2.532c1.3,1.67,3.499,2.354,5.505,1.702l19.668-6.391 c0.685-0.223,1.057-0.954,0.834-1.638C30.3,9.563,29.967,9.25,29.547,9.123l-1.632-0.458C27.152,8.451,26.349,8.47,25.597,8.714z" fill="none" id="XMLID_1011_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path> 
                    </g> </g> </g>
                </svg>
            </div>
            <div class = "paddingGlobal">
                <div class = "largeContainer">
                    <div class = "paddingSection-L">
                        <div class = "gettingStartedContent ">
                            <div class = "textSizeL textColor-Secondary">Let's Get Started</div>
                            <div class = "paddingXS"></div>
                            <button class = "textSizeS darkButton">Randomize my trip</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class = "recommendationsSection">
            <div class = "paddingGlobal">
                <div class = "largerContainer">
                    <div class = "paddingSection-M">
                        <div class  = "recommendationContent">
                            <div class = "textSizeM textAlign-Left">Recomendations</div>
                            <div class = "paddingS"></div>
                            <div class = "recommendationsList">
                                <div class = "recommendation">
                                    <img src = "../images/canada.jpg" class = "recImage" loading = "lazy" alt = "Canada"/>
                                    <div class="overlay">
                                        <div class="textSizeS textColor-Secondary">Ontario, Canada</div>
                                        <div class = "paddingS"></div>
                                        <button class = "textSizeXS lightButton">Explore</button>
                                    </div>
                                </div>
                                <div class = "recommendation">
                                    <img src = "../images/italy.jpg" class = "recImage" loading = "lazy" alt = "Italy"/>
                                    <div class="overlay">
                                        <div class="textSizeS textColor-Secondary">Milan, Italy</div>
                                        <div class = "paddingS"></div>
                                        <button class = "textSizeXS lightButton">Explore</button>
                                    </div>
                                </div>
                                <div class = "recommendation">
                                    <img src = "../images/greece.webp" class = "recImage" loading = "lazy" alt = "Gereece"/>
                                    <div class="overlay">
                                        <div class="textSizeS textColor-Secondary">Santorini, Greece</div>
                                        <div class = "paddingS"></div>
                                        <button class = "textSizeXS lightButton">Explore</button>
                                    </div>
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
                                <div class = "textSizeXS">Contact Us</div>
                                <div class = "textSizeXS">FAQ</div>
                                <a class = "textSizeXS footerElem textColor-Secondary" href = "account.php">My Account</a>
                            </div>
                            <div class = "footerColumn textAlign-Left">
                                <div class = "textSizeS">Explore</div>
                                <a href="index.php" class = "footerElem textColor-Secondary textSizeXS">
                                    Home
                                </a>
                                <div class = "textSizeXS">Discover</div>
                                <div class = "textSizeXS">Plan Trip</div>
                            </div>
                            <div class = "footerColumnLast">
                                <div class = "textSizeS">Save your travel inspirations</div>
                                <div class = "paddingS"></div>
                                <button class = "textSizeXS darkButton" href = "signUp.php">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</body>
</html>
