import './globalCSS/App.css';
import './globalCSS/common.css';
import './globalCSS/constants.css';
import Home from './pages/Home/js/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="App-main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;