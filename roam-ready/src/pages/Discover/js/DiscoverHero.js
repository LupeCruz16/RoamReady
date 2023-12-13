import '../css/discoverHero.css'
import SmallButton from '../../../components/Buttons/SmallButton.js'

function DiscoverHero () {
    return (
        <div className = "discoverHeroSection discoverHeroSectionBackgroundImg">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <div className = "paddingSection-L">
                        <div className = "discoverHeroContent">
                            <div className = "textSizeL">
                                Discover your next adventure
                            </div>
                            <div className = "paddingS"></div>
                            <SmallButton href = 'somewhere.com' buttonText = 'Click for inspirtation' backgroundColor = 'var(--primary-100)' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverHero;