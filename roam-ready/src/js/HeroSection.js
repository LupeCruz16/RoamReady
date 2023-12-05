import '../css/constants.css'
import '../css/common.css'
import '../css/hero.css'

import VideoPlayer from "./VideoPlayer.js"

function HeroSection () {
    return (
        <div className = "paddingGlobal">
            <div className = "largeContainer">
                <div className = "heroComponent">
                    <div className = "heroContent">
                        <div className = "heroContent-Left">
                            <div className = "heroTextContainer">
                                <h2>Discover Your Next Adventure</h2>
                                <button className = "nextAdventureButton" href="#randomizeAdventure">
                                    <div className = "nextAdventureButtonText textSizeL">Get Started</div>
                                </button>
                            </div>
                        </div>
                            
                        <div className = "heroVideoWrapper">
                            <VideoPlayer />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection