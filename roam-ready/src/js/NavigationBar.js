import '../css/constants.css'
import '../css/common.css'
import '../css/navigation.css'

import logo from '../images/Logo2.png'

function Navigation () {
    return (
        <div className="navComponent">
            <div className="navContent">
                <div className="navContent-Left">
                    <div className = "imageWrapper">
                        <img
                        href = "#home"
                        src={logo} 
                        loading="lazy"
                        alt="Logo"
                        />
                    </div>
                    <a href="#explore"
                    className = "navTextElement textSizeL"
                    >Explore Destinations
                    </a>
                    <a href="#plan"
                    className = "navTextElement textSizeL"
                    >Plan Your Trip
                    </a>
                    <a href="#discover"
                    className = "navTextElement textSizeL"
                    >Discover Experiences
                    </a>
                </div>
                <div className = "navContent-Right">
                    <button className = "signInButton" href="#signup">
                        <div className = "signInButtonText textSizeL">Sign Up</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
