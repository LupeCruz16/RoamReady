import '../globalCSS/constants.css'
import '../globalCSS/common.css'
import './navigation.css'
import logo from '../assets/images/Logo2.png'
import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <div className = "navComponent">
            <div className = "paddingGlobal">
                <div className="largeContainer">
                    <div className="navContent">
                        <div className="navContent-Left">
                            <div className = "imageWrapper">
                                <Link to = "/">
                                    <img src={logo}  loading="lazy" alt="Logo" />
                                </Link>
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
                            <Link to = "/Login" className = "navTextElement textSizeS">
                                Login
                            </Link>
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
