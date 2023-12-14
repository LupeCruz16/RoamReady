import '../css/discoverHero.css'
import SmallButton from '../../../components/Buttons/SmallButton.js'
import { Link } from 'react-router-dom';

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
                            <Link to = "/Explore">
                                <SmallButton buttonText = 'Click for inspirtation' backgroundColor = 'var(--primary-100)' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverHero;