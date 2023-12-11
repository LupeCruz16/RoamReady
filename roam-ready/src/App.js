import './globalCSS/App.css';
import './globalCSS/common.css'
import './globalCSS/constants.css'
import Navigation from './components/NavigationBar.js';
import HeroSection from './pages/Home/js/HeroSection.js';
import OurMission from './pages/Home/js/OurMission.js';
import Footer from './pages/Home/js/Footer.js';
import GettingStarted from './pages/Home/js/GettingStarted.js'
import Recommendations from './pages/Home/js/Recommendations.js';

function App() {
  return (
    <div className = "App">
      <header className="App-header">
      </header>
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

export default App;
