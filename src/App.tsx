import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage'; // Import the new PrivacyPage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} /> {/* New route for Privacy Policy */}
          {/* Future routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;