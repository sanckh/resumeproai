import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import WaitlistPage from "./pages/Waitlist/WaitlistPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      {/* Main route for the waitlist */}
      <Route path="/waitlist" element={<WaitlistPage />} />
      
      {/* Redirect any other route to /waitlist */}
      <Route path="*" element={<Navigate to="/waitlist" replace />} />
    </Routes>
  </Router>
);

export default App;
