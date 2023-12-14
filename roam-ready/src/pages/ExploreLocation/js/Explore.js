import '../../../globalCSS/constants.css'
import '../../../globalCSS/common.css'
import Navigation from '../../../components/Navigation/NavigationBar.js';
import ExploreHero from "./ExploreHero.js";
import LocationNavBar from './LocationNavBar.js';
import LocationlikesSec from './LocationLikesSec.js';
import Footer from '../../../components/Footer/Footer.js';

function Explore () {
    return (
        <div className = "App">
        <main className = "App-main">
            <Navigation />
            <ExploreHero />
            <LocationNavBar />
            <LocationlikesSec />
            <Footer />
        </main>
        </div>
    );
}

export default Explore;