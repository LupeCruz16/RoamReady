import XSmallButton from '../../../components/Buttons/XSmallButton.js'
import '../css/footer.css'
import logo from '../../../assets/images/Logo2.png'

function Footer () {
    return (
        <footer className = "footerSection backgroundColor-Secondary">
            <div className = "paddingGlobal">
                <div className = "largeConainter">
                    <div className = "paddingSection-M">
                        <div className = "footerContent textColor-Secondary">
                            <div className = "footerColumn">
                                <div className = "footerImageWrapper textAlign-Left">
                                    <img
                                    href = "#home"
                                    src={logo} 
                                    loading="lazy"
                                    alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className = "footerColumn textAlign-Left">
                                <div className = "textSizeS">Support</div>
                                <div className = "textSizeXS">Contact Us</div>
                                <div className = "textSizeXS">FAQ</div>
                            </div>
                            <div className = "footerColumn textAlign-Left">
                                <div className = "textSizeS">Explore</div>
                                <div className = "textSizeXS">Home</div>
                                <div className = "textSizeXS">Discover</div>
                                <div className = "textSizeXS">Plan Trip</div>
                            </div>
                            <div className = "footerColumnLast">
                                <div className = "textSizeS">Save your travel inspirations</div>
                                <div className = "paddingS"></div>
                                <XSmallButton href = 'somewhere.com' buttonText= 'Sign Up' backgroundColor= 'var(--primary-100)' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;