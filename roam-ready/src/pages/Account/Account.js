import '../../globalCSS/constants.css'
import '../../globalCSS/common.css'
import './account.css'
import Navigation from '../../components/Navigation/NavigationBar.js';
import Footer from '../../components/Footer/Footer.js';

function Account () {
    return (
        <div className = "accountSection">
            <div className = "paddingGlobal">   
                <div className = "largeContainer">
                    <Navigation />
                    <div className = "paddingSection-M">
                        <div className = "accountContent">
                            <div className = "accountContent-Left marginLeft-S">
                                <div className = "textSizeL textAlign-Left">RoamReady</div>
                                <div className = "textSizeS textAlign-Left">Username</div>
                                <div className = "textSizeM textAlign-Left">Name</div>
                                <div className = "whiteSpace"></div>
                            </div>
                            <div className = "accountContent-Right">
                                <div className = "paddingS"></div>
                                <div className = "textSizeS textAlign-Left">Liked Trips</div>
                                <div className = "likedTrips">
                                    <div className = "textSizeS">Nothing to see here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Account;