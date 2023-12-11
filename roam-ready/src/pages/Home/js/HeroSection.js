import '../css/hero.css'

function HeroSection () {
    return (
        <div className = "heroSection heroSectionBackgroundImg">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-L">
                        <div className = "heroContent">
                            <div className = "textSizeL">
                                Randomize your next travel getaway
                            </div>
                            <div className = "paddingS"></div>
                            <div className="getStartedButton">
                                <a
                                    href="somewhere.com"
                                    rel="noopener noreferrer"
                                    className = "getStartedLink"
                                    >
                                    <div className="textSizeS textColor-Secondary">Get Started</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>

    );
}

export default HeroSection