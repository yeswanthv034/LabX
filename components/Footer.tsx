
import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Mail, MapPin, Linkedin, Globe, Sparkles, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-premium-dark text-white pt-24 pb-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/30">
                <Microscope className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter">LABX</span>
                <span className="text-[8px] text-[#D4AF37] font-bold uppercase tracking-[0.3em]">Lifora Vision</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              A premier computational informatics hub for life science excellence. Empowering student innovators with authentic research mentorship.
            </p>
          </div>

          {/* Hub */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">The Hub</h3>
            <ul className="space-y-5 text-sm font-bold text-gray-500">
              <li><Link to="/about" className="hover:text-white transition-colors">Vision & Mission</Link></li>
              <li><Link to="/domains" className="hover:text-white transition-colors">Informatics Domains</Link></li>
              <li><Link to="/why" className="hover:text-white transition-colors">The Labx Advantage</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Submit Proposal</Link></li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#D4AF37]">Project Focus</h3>
            <ul className="space-y-5 text-sm font-bold text-gray-500">
              <li><Link to="/domains" className="hover:text-white transition-colors">Molecular Docking</Link></li>
              <li><Link to="/domains" className="hover:text-white transition-colors">Omics Analysis</Link></li>
              <li><Link to="/domains" className="hover:text-white transition-colors">Genomic Informatics</Link></li>
              <li><Link to="/domains" className="hover:text-white transition-colors">Cheminformatics</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Connect</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs font-bold text-gray-500">masterclassliforavision@gmail.com</span>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span className="text-xs font-bold text-gray-500">+91 9390892527</span>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-[#D4AF37]" />
              <p className="text-[10px] font-bold text-gray-400 leading-tight">
                LABX is an initiative powered <br />
                <span className="text-white text-xs">By Lifora Vision.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} LABX Informatics. Excellence in Computational Mentorship.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-white transition-colors">Ethics Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
