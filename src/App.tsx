import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import EventDetail from './pages/EventDetail';
import ProgramDetail from './pages/ProgramDetail';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/program/:id" element={<ProgramDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
          <WhatsAppChat />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;