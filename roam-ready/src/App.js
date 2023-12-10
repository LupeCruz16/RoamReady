import './App.css';
import './css/common.css'
import Navigation from './js/NavigationBar.js';
import HeroSection from './js/HeroSection.js';
import OurMission from './js/OurMission.js';
import Footer from './js/Footer.js';
import GettingStarted from './js/GettingStarted.js'
import Recommendations from './js/Recommendations.js';

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
