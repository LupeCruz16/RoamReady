import '../css/constants.css'
import '../css/common.css'
import '../css/navigation.css'

import logo from '../images/Logo2.png'

function Navigation () {
    return (
        <div className="paddingGlobal">
            <div className="largeContainer">
                <div className="navComponent">
                    <div className="navContent">
                        <div className="navContent-Left">
                            <a href="#home" className="home-link">
                                <img 
                                    src={logo} 
                                    loading="lazy"
                                    alt="Logo"
                                />
                            </a>
                            <a href="#explore">Explore Destinations</a>
                            <a href="#plan">Plan Your Trip</a>
                            <a href="#discover">Discover Experiences</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
