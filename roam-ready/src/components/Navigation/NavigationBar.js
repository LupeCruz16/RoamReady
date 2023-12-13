import '../../globalCSS/constants.css'
import '../../globalCSS/common.css'
import './navigation.css'
import logo from '../../assets/images/Logo2.png'
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
                            <Link to = "/" className = "navTextElement textSizeS">
                                Home
                            </Link>
                            <Link to = "/Discover"className = "navTextElement textSizeS">
                                Discover
                            </Link>
                            <a href="#discover"
                            className = "navTextElement textSizeS"
                            >Plan&nbsp;Trip
                            </a>
                        </div>
                        <div className = "navContent-Right">
                            <Link to = "/Login" className = "navTextElement textSizeS">
                                Login
                            </Link>
                            <Link to = "/SignUp" className = "navTextElement textSizeS signUpText">
                                Sign&nbsp;Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
