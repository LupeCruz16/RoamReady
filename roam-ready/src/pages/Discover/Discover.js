import '../../globalCSS/constants.css'
import '../../globalCSS/common.css'
import './discover.css'
import Navigation from '../../components/Navigation/NavigationBar.js';
import Footer from '../../components/Footer/Footer.js';

function Discover () {
    return (
        <div className = "discoverSection">
            <div className = "paddingGlobal">
                <div className = "largeContainer">
                    <Navigation />
                    <div className = "paddingSection-M">
                        <div className = "discoverContent">

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Discover;