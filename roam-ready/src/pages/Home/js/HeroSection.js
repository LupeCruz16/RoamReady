import SmallButton from '../../../components/Buttons/SmallButton.js'
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
                            <SmallButton href = 'somewhere.com' buttonText = 'Get Started' backgroundColor = 'var(--primary-100)' />
                        </div>
                    </div>
                </div>               
            </div>
        </div>

    );
}

export default HeroSection