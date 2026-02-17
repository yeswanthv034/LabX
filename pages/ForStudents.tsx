
import React from 'react';
import { CheckCircle2, FlaskConical, Microscope, Database, Network, Binary, ShieldCheck, Target, Award, Terminal, Code, Cpu } from 'lucide-react';

const ForStudents: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Introduction */}
        <div className="max-w-4xl mb-24 space-y-8">
          <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.5em]">Academic Collaboration Hub</span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tighter">
            Scholarly Support for <br /> <span className="text-gold-gradient italic">Final Year</span> Researchers.
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Labx provides the computational framework and domain expertise to strengthen student-driven ideas in life sciences. No project selling—only guided innovation.
          </p>
        </div>

        {/* Structured Support Domains - Solid Headings with Tag Points */}
        <div className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Domain 1 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-900">
                <div className="bg-premium-dark p-3 rounded-xl"><Terminal className="h-6 w-6 text-[#D4AF37]" /></div>
                <h2 className="text-3xl font-bold tracking-tight">Computational Biology</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {["Ab-initio Modeling Strategy", "Protein Loop Refinement", "Metabolic Network Curation"].map(pt => (
                  <li key={pt} className="flex items-center p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 font-bold text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mr-3" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain 2 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-900">
                <div className="bg-premium-dark p-3 rounded-xl"><Code className="h-6 w-6 text-[#D4AF37]" /></div>
                <h2 className="text-3xl font-bold tracking-tight">Bioinformatics</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {["Comparative Genomic Analysis", "Phylogenetic Informatics", "NGS Data Interpretation"].map(pt => (
                  <li key={pt} className="flex items-center p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 font-bold text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mr-3" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain 3 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-900">
                <div className="bg-premium-dark p-3 rounded-xl"><Database className="h-6 w-6 text-[#D4AF37]" /></div>
                <h2 className="text-3xl font-bold tracking-tight">Molecular Docking</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {["Ligand Library Architecture", "Virtual Screening Workflows", "Binding Affinity Validation"].map(pt => (
                  <li key={pt} className="flex items-center p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 font-bold text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mr-3" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain 4 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-900">
                <div className="bg-premium-dark p-3 rounded-xl"><FlaskConical className="h-6 w-6 text-[#D4AF37]" /></div>
                <h2 className="text-3xl font-bold tracking-tight">Cheminformatics</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {["SAR Analysis & Descriptors", "ADMET Property Prediction", "Molecular Scaffolding"].map(pt => (
                  <li key={pt} className="flex items-center p-4 bg-[#FAFAFA] rounded-xl border border-gray-100 font-bold text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-[#D4AF37] mr-3" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* The Labx Hybrid Approach Section */}
        <div className="mt-32 bg-premium-dark rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[#D4AF37]/5 pointer-events-none"></div>
          <div className="max-w-4xl space-y-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
              A Totally <span className="text-[#D4AF37]">Computational</span> <br /> Hybrid Hub
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Labx operates as a hybrid hub, utilizing global computational expertise to support student projects. No physical equipment is needed—only your ideas and our professional informatics architecture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Cpu className="h-6 w-6 text-[#D4AF37]" />
                  <h4 className="font-bold text-xl">Hybrid Collaboration</h4>
                </div>
                <p className="text-sm text-gray-500">Expert guidance delivered through structured digital workflows, ensuring accessibility and flexibility for students.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
                  <h4 className="font-bold text-xl">Scientific Integrity</h4>
                </div>
                <p className="text-sm text-gray-500">Strictly focused on student understanding. We ensure you can defend every line of code and every simulation result.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-32 text-center space-y-10">
          <h2 className="text-4xl font-bold text-gray-900">Initiate Your Project Cycle</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Project validation is now open for the 2025 academic session. Secure your position for specialized informatics mentorship.
          </p>
          <div className="pt-4">
            <a href="#/contact" className="px-12 py-5 bg-premium-dark text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-500">
              Apply for Mentorship
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForStudents;
