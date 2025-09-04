import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage'; // Import the new RefundPage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/our-terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} /> {/* New route for Refund Policy */}
          {/* Future routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;