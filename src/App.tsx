import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import WelcomePage from './pages/WelcomePage'; // Import the new WelcomePage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/our-terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/welcome" element={<WelcomePage />} /> {/* New route for Welcome Page */}
          {/* Future routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;