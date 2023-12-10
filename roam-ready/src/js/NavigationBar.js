import '../css/constants.css'
import '../css/common.css'
import '../css/navigation.css'
import logo from '../images/Logo2.png'

function Navigation () {
    return (
        <div className = "navComponent">
            <div className = "paddingGlobal">
                <div className="largeContainer">
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
                            className = "navTextElement textSizeS"
                            >Home
                            </a>
                            <a href="#plan"
                            className = "navTextElement textSizeS"
                            >Discover
                            </a>
                            <a href="#discover"
                            className = "navTextElement textSizeS"
                            >Plan&nbsp;Trip
                            </a>
                        </div>
                        <div className = "navContent-Right">
                            <a href="#login"
                            className = "navTextElement textSizeS"
                            >Login
                            </a>
                            <a href="#signup"
                            className = "navTextElement textSizeS signUpText"
                            >Sign&nbsp;Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
