
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919390892527', '_blank');
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="max-w-md w-full text-center space-y-8 bg-[#FAFAFA] p-16 rounded-[4rem] shadow-2xl border border-gray-100">
          <div className="mx-auto h-24 w-24 bg-green-50 rounded-full flex items-center justify-center text-green-500">
            <CheckCircle className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Inquiry Logged</h2>
          <p className="text-gray-500 font-medium">Labx Academic Council will review your project proposal. Expect a formal response via email within 48-72 hours.</p>
          <button onClick={() => setSubmitted(false)} className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest hover:underline">New Inquiry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
            <div>
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.5em] mb-4 block">Connect with the Hub</span>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-8">Initiate <br /><span className="text-gold-gradient">Research.</span></h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">Reach out to our informatics council to validate your idea and start your collaborative journey.</p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="bg-[#D4AF37]/10 p-4 rounded-2xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all"><Mail className="h-6 w-6" /></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-1">Academic Email</h4>
                  <p className="text-gray-500 font-medium">masterclassliforavision@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-[#D4AF37]/10 p-4 rounded-2xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all"><Phone className="h-6 w-6" /></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-1">Academic Registry</h4>
                  <p className="text-gray-500 font-medium">+91 9390892527</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Instant Support</p>
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Chat via WhatsApp
              </button>
            </div>

            <div className="p-8 bg-premium-dark rounded-3xl border border-[#D4AF37]/20 flex items-center space-x-4">
               <Sparkles className="h-6 w-6 text-[#D4AF37]" />
               <p className="text-xs text-gray-400 font-medium leading-relaxed italic">
                 "Totally computational. Totally original. Student-led research innovation."
               </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-[#FAFAFA] p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4AF37]/5 blur-3xl rounded-full -mr-24 -mb-24"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Researcher Name</label>
                    <input required type="text" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all font-medium" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scholarly Email</label>
                    <input required type="email" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all font-medium" placeholder="name@domain.edu" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Academic Institution</label>
                  <input required type="text" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all font-medium" placeholder="University / College" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Inquiry Brief</label>
                  <textarea required rows={4} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all font-medium resize-none" placeholder="Briefly describe your research question or idea..."></textarea>
                </div>
              </div>

              <button type="submit" className="w-full py-5 bg-premium-dark text-white font-bold uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl hover:bg-[#D4AF37] transition-all flex items-center justify-center space-x-3">
                <span>Submit Proposal</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
