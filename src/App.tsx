import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import WelcomePage from './pages/WelcomePage';
import ErrorPage from './pages/ErrorPage'; // Import the new ErrorPage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/our-terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/error" element={<ErrorPage />} /> {/* New route for Error Page */}
          {/* Fallback for any unmatched routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;