import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';
import './styles/theme.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Organs from './pages/Organs/Organs';
import Login from './pages/Login/Login';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <header className="app-header">
            <Navbar />
          </header>

          <main className="app-main" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/organs" element={<Organs />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <Footer />
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
