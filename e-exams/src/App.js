import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the AuthProvider
import { AuthProvider } from "./contexts/AuthContext";

// Router pages
import { Home } from "./pages/Home";
import { Exam } from "./pages/Exam";
import { Auth } from "./pages/Auth";
import { Statistics } from "./pages/Statistics";
import { Contact } from "./pages/Contact";
import { Signup } from "./pages/Signup";
import { PreExam } from "./pages/PreExam";
import { Profile } from "./pages/Profile";
// import NotFound from "./pages/NotFound"; // Import NotFound component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Stats" element={<Statistics />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Auth />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Pre-exam" element={<PreExam />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> Catch all unmatched routes */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
