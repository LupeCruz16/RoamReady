import Navigation from '../../../components/Navigation/NavigationBar.js';
import HeroSection from './HeroSection.js';
import OurMission from './OurMission.js';
import Footer from '../../../components/Footer/Footer.js';
import GettingStarted from './GettingStarted.js'
import Recommendations from './Recommendations.js';

function Home () {
    return (
        <div className = "App">
        <main className = "App-main">
            <Navigation />
            <HeroSection />
            <OurMission />
            <GettingStarted />
            <Recommendations />
            <Footer />
        </main>
        </div>
    );
}

export default Home;