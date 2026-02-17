
import React from 'react';
import { CheckCircle2, XCircle, Shield, Award, Users } from 'lucide-react';

const WhyLabx: React.FC = () => {
  const comparisons = [
    { labx: "Collaborative research hub", others: "Commercial project shop" },
    { labx: "Customized mentorship based on ideas", others: "Fixed lists of pre-done titles" },
    { labx: "Transparent computational methodology", others: "Black-box results" },
    { labx: "Focus on academic learning", others: "Purely transactional service" },
    { labx: "Structured informatics documentation", others: "Basic report generation" }
  ];

  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 block">The Labx Advantage</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Uncompromising <br /><span className="text-gold-gradient">Standards.</span></h1>
          <p className="text-xl text-gray-500 font-medium">Elevating student research beyond mass-produced commercial solutions.</p>
        </div>

        <div className="bg-premium-dark rounded-[4rem] shadow-3xl overflow-hidden relative border border-[#D4AF37]/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* The Labx Side */}
            <div className="p-16 md:p-24 border-r border-[#D4AF37]/10">
              <div className="flex items-center space-x-4 mb-12">
                <div className="bg-gold-gradient p-3 rounded-2xl shadow-xl shadow-[#D4AF37]/20">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white font-serif">LABX Hub</h2>
              </div>
              <ul className="space-y-10">
                {comparisons.map((c, i) => (
                  <li key={i} className="flex items-start space-x-6 group">
                    <CheckCircle2 className="h-7 w-7 text-[#D4AF37] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xl font-bold text-white leading-tight">{c.labx}</p>
                      <p className="text-xs text-[#D4AF37]/60 mt-1 uppercase tracking-widest font-bold">Research Excellence</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Others Side */}
            <div className="p-16 md:p-24 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-12 opacity-40">
                <div className="bg-gray-800 p-3 rounded-2xl">
                  <XCircle className="h-8 w-8 text-gray-500" />
                </div>
                <h2 className="text-4xl font-bold text-gray-400 font-serif">Commercial</h2>
              </div>
              <ul className="space-y-10">
                {comparisons.map((c, i) => (
                  <li key={i} className="flex items-start space-x-6 opacity-30">
                    <XCircle className="h-7 w-7 text-red-900/40 shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-bold text-gray-500 leading-tight">{c.others}</p>
                      <p className="text-xs text-gray-600 mt-1 uppercase tracking-widest font-bold">Transactional Model</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1579154235884-332324a2519d?auto=format&fit=crop&q=80&w=800" alt="Informatics Research" className="w-full h-[500px] object-cover" />
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Academic Integrity First</h3>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              Labx ensures that your research is not just "completed," but is scientifically defensible, technologically advanced, and ethically sound.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100">
                  <Award className="h-6 w-6 text-[#D4AF37] mb-3" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Impact</p>
                  <p className="text-sm font-bold text-gray-900">Conference Ready</p>
               </div>
               <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100">
                  <Users className="h-6 w-6 text-[#D4AF37] mb-3" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Network</p>
                  <p className="text-sm font-bold text-gray-900">Expert Mentorship</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLabx;
