import Navigation from '../../../components/NavigationBar.js';
import HeroSection from './HeroSection.js';
import OurMission from './OurMission.js';
import Footer from './Footer.js';
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