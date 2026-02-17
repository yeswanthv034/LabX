
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Domains', path: '/domains' },
    { name: 'For Students', path: '/students' },
    { name: 'Guidance', path: '/model' },
    { name: 'Why Labx', path: '/why' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-premium-dark p-2.5 rounded-xl border border-[#D4AF37]/30">
                  <Microscope className="h-6 w-6 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tighter leading-none">LABX</span>
                <span className="text-[9px] text-[#996515] font-bold uppercase tracking-[0.2em] leading-none mt-1.5 flex items-center">
                  By Lifora Vision <Sparkles className="h-2 w-2 ml-1" />
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  isActive(link.path) ? 'text-[#996515]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-3 bg-premium-dark text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-500 gold-shimmer"
            >
              Start Research
            </Link>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[#D4AF37] p-2 transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold ${
                isActive(link.path) ? 'text-[#D4AF37]' : 'text-gray-700 hover:text-[#D4AF37]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-4 text-center bg-premium-dark text-[#D4AF37] font-bold rounded-xl"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
