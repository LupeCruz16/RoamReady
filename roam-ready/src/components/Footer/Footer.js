import './footer.css'
import { Link } from 'react-router-dom';
import XSmallButton from '../Buttons/XSmallButton.js'
import logo from '../../assets/images/Logo2.png'

function Footer () {
    return (
        <footer className = "footerSection backgroundColor-Secondary">
            <div className = "paddingGlobal">
                <div className = "largeConainter">
                    <div className = "paddingSection-M">
                        <div className = "footerContent textColor-Secondary">
                            <div className = "footerColumn">
                                <div className = "footerImageWrapper textAlign-Left">
                                    <Link to = "/">
                                        <img src={logo}  loading="lazy" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className = "footerColumn textAlign-Left">
                                <div className = "textSizeS">Support</div>
                                <Link to = "/Account" className = "textSizeXS">My Account</Link>
                                <div className = "textSizeXS">Contact Us</div>
                                <div className = "textSizeXS">FAQ</div>
                            </div>
                            <div className = "footerColumn textAlign-Left">
                                <div className = "textSizeS">Explore</div>
                                <Link to = "/" className = "footerElem textColor-Secondary textSizeXS">
                                    Home
                                </Link>
                                <div className = "textSizeXS">Discover</div>
                                <div className = "textSizeXS">Plan Trip</div>
                            </div>
                            <div className = "footerColumnLast">
                                <div className = "textSizeS">Save your travel inspirations</div>
                                <div className = "paddingS"></div>
                                <XSmallButton href = '/SignUp' buttonText= 'Sign Up' backgroundColor= 'var(--primary-100)' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;