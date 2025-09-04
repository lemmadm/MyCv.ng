import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import WelcomePage from './pages/WelcomePage';
import ErrorPage from './pages/ErrorPage';
import MePage from './pages/MePage'; // Import the new MePage

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
          <Route path="/me" element={<MePage />} /> {/* New route for Me Page */}
          <Route path="/error" element={<ErrorPage />} />
          {/* Fallback for any unmatched routes */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;