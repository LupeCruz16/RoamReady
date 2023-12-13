import '../../../globalCSS/constants.css'
import '../../../globalCSS/common.css'
import Navigation from '../../../components/Navigation/NavigationBar.js';
import DiscoverHero from "./DiscoverHero";
import HowItWorks from './HowItWorks.js';
import Footer from '../../../components/Footer/Footer.js';

function Discover () {
    return (
        <div className = "App">
        <main className = "App-main">
            <Navigation />
            <DiscoverHero />
            <HowItWorks />
            <Footer />
        </main>
        </div>
    );
}

export default Discover;