import './globalCSS/App.css';
import './globalCSS/common.css';
import './globalCSS/constants.css';
import Home from './pages/Home/js/Home.js';
import Login from './pages/Login/Login.js';
import SignUp from './pages/SignUp/SignUp.js';
import Account from './pages/Account/Account.js'
import Discover from './pages/Discover/Discover.js'
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
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Discover" element={<Discover />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;