import './App.css';
import Navigation from './js/NavigationBar.js';
import HeroSection from './js/HeroSection.js';

function App() {
  return (
    <div className = "App">
      <header className="App-header">
        <div><Navigation /></div>
        <div><HeroSection /></div>
      </header>
      <main className = "App-main">

      </main>
    </div>

  );
}

export default App;
