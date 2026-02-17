
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ResearchDomains from './pages/ResearchDomains';
import ForStudents from './pages/ForStudents';
import GuidanceModel from './pages/GuidanceModel';
import Contact from './pages/Contact';
import WhyLabx from './pages/WhyLabx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/domains" element={<ResearchDomains />} />
            <Route path="/students" element={<ForStudents />} />
            <Route path="/model" element={<GuidanceModel />} />
            <Route path="/why" element={<WhyLabx />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
