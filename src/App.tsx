import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage'; // Import the new TermsPage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/our-terms" element={<TermsPage />} /> {/* New route for Terms & Conditions */}
          {/* Future routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;