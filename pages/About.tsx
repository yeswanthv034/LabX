
import React from 'react';
// Added missing 'Quote' icon to imports
import { Target, ShieldCheck, Cpu, Lightbulb, Award, Sparkles, BookOpen, Code, Terminal, FlaskConical, Microscope, Database, BarChart3, FileText, CheckCircle2, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="pt-40 pb-24 bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-premium-dark text-[#D4AF37] px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.4em]">
            About Labx
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tighter">
            Authentic <span className="text-gold-gradient italic">Idea-Driven</span> <br /> Informatics.
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
            LabX is a life sciences–focused computational research and informatics hub designed to support final-year undergraduate and postgraduate students in developing ethical, idea-driven computational projects.
          </p>
        </div>
      </section>

      {/* Main Narrative - Preserving User Text */}
      <section className="py-24 max-w-5xl mx-auto px-4 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <div className="h-8 w-1 bg-gold-gradient mr-4"></div>
              The LabX Philosophy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              LabX does not provide ready-made or pre-written projects. Instead, it functions as a collaborative research platform where students bring their own research ideas, and those ideas are strengthened through guided computational workflows, domain expertise, and structured scientific documentation.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <div className="h-8 w-1 bg-gold-gradient mr-4"></div>
              Learning By Doing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The focus at LabX is on learning by doing, ensuring that students understand the concepts, methods, and reasoning behind every computational step they perform.
            </p>
          </div>
        </div>

        {/* Supports Section */}
        <div className="bg-[#FAFAFA] p-12 md:p-20 rounded-[4rem] border border-gray-100">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">What LabX Supports</h2>
            <p className="text-gray-500 font-medium italic">Across multiple computational and informatics-based life-science domains:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Computational Biology", icon: <Terminal className="h-6 w-6" /> },
              { title: "Bioinformatics", icon: <Code className="h-6 w-6" /> },
              { title: "Molecular Docking & Virtual Screening", icon: <FlaskConical className="h-6 w-6" /> },
              { title: "Cheminformatics", icon: <Database className="h-6 w-6" /> },
              { title: "Omics Data Analysis", icon: <BarChart3 className="h-6 w-6" /> },
              { title: "Research Documentation", icon: <FileText className="h-6 w-6" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 flex items-center space-x-4 shadow-sm group hover:border-[#D4AF37]/50 transition-all">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Student ideas form the foundation of every project",
              "Step-by-step computational guidance and mentoring",
              "Emphasis on originality, clarity, and research ethics",
              "Structured documentation aligned with academic standards",
              "Focus on skill development, not project selling"
            ].map((approach, idx) => (
              <div key={idx} className="flex items-center space-x-4 bg-white p-6 rounded-2xl border border-gray-100">
                <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />
                <span className="text-lg font-medium text-gray-700">{approach}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LabX & Lifora Vision */}
        <div className="bg-premium-dark p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[#D4AF37]/5 pointer-events-none"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em]">LabX & Lifora Vision</h3>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              LabX operates as a specialized initiative under <strong>Lifora Vision</strong>, an educational and research-oriented mission focused on making advanced scientific knowledge accessible to students.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Lifora Vision emphasizes integrity, innovation, and affordability in education. LabX aligns with this vision by offering student-centric computational research guidance that prioritizes understanding, innovation, and academic growth over commercial outcomes.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center space-y-12 py-16 border-t border-gray-100">
          <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
          <div className="relative max-w-4xl mx-auto">
             <Quote className="absolute -top-10 -left-10 h-20 w-20 text-[#D4AF37]/5" />
             <p className="text-3xl font-serif text-gray-500 italic leading-snug">
               "To empower students to build their own computational research projects with confidence, ethical guidance, and scientific rigor."
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
