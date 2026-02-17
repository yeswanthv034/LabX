
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, Network, GraduationCap, ShieldCheck, Sparkles, ArrowUpRight, Cpu, Binary, BarChart3, FlaskConical, Microscope } from 'lucide-react';

const Home: React.FC = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const domains = [
    { 
      title: 'Bioinformatics', 
      desc: 'Advanced sequence analysis and biological data mining pipelines.', 
      icon: <Network className="h-8 w-8" />,
      tag: 'Genomic Data'
    },
    { 
      title: 'Molecular Docking', 
      desc: 'Predictive protein-ligand binding and virtual screening workflows.', 
      icon: <Database className="h-8 w-8" />,
      tag: 'Drug Discovery'
    },
    { 
      title: 'Omics Analysis', 
      desc: 'High-throughput transcriptomic and metabolic data processing.', 
      icon: <BarChart3 className="h-8 w-8" />,
      tag: 'Systems Biology'
    },
    { 
      title: 'Cheminformatics', 
      desc: 'Computational chemistry for molecular property prediction.', 
      icon: <FlaskConical className="h-8 w-8" />,
      tag: 'Chemical Space'
    },
    { 
      title: 'Computational Genomics', 
      desc: 'High-throughput genomic informatics and population mapping.', 
      icon: <Binary className="h-8 w-8" />,
      tag: 'Precision Medicine'
    },
    { 
      title: 'Structural Proteomics', 
      desc: 'In-silico protein structure prediction and dynamics modeling.', 
      icon: <Cpu className="h-8 w-8" />,
      tag: 'Protein Design'
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-10 reveal" ref={addToRefs}>
            <div className="inline-flex items-center space-x-3 bg-premium-dark/[0.03] border border-[#D4AF37]/20 px-5 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-[10px] font-bold text-[#996515] uppercase tracking-[0.3em]">Labx | Powered by Lifora Vision</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tighter">
              Research <br />
              <span className="text-gold-gradient italic">Empowered</span> <br />
              Innovation.
            </h1>
            
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
              A specialized computational informatics hub for final-year students. We transform biological hypotheses into professional-grade projects through elite mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-premium-dark text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl hover:bg-[#D4AF37] transition-all duration-500 flex items-center justify-center group">
                Begin Inquiry <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link to="/about" className="text-sm font-bold uppercase tracking-widest text-[#996515] hover:text-[#D4AF37] flex items-center transition-colors">
                About the Hub <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 bg-premium-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { icon: <ShieldCheck className="h-8 w-8" />, title: 'Authentic Mentorship', desc: 'We prioritize scientific accuracy and originality.' },
              { icon: <Cpu className="h-8 w-8" />, title: 'Computational Expertise', desc: 'High-level informatics knowledge to validate complex data.' },
              { icon: <GraduationCap className="h-8 w-8" />, title: 'Project Documentation', desc: 'Professional reporting meeting rigorous UG and PG standards.' }
            ].map((v, i) => (
              <div key={i} className="space-y-6 reveal" ref={addToRefs}>
                <div className="h-16 w-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains Section - 6 Bold Text-Driven Boxes */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal" ref={addToRefs}>
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 block">Specialized Support</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter">Research Domains</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {domains.map((domain, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#FAFAFA] hover:bg-premium-dark p-12 rounded-[3rem] border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-700 reveal flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-2xl" 
                ref={addToRefs}
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-white shadow-xl rounded-2xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
                      {domain.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#996515] group-hover:text-[#D4AF37]/60">
                      {domain.tag}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-white tracking-tight leading-none transition-colors duration-500">
                      {domain.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-400 text-sm font-medium leading-relaxed transition-colors duration-500">
                      {domain.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex items-center text-[#D4AF37] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explore Methodologies <ArrowUpRight className="ml-2 h-4 w-4" />
                </div>

                {/* Animated Background Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-gradient opacity-0 group-hover:opacity-5 blur-3xl rounded-full transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation Section */}
      <section className="py-32 bg-premium-dark relative text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-12 reveal" ref={addToRefs}>
          <div className="inline-flex items-center space-x-2 border-b border-[#D4AF37]/50 pb-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.5em]">Labx by Lifora Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white">"Where biological intuition meets <br /> computational precision."</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Labx is a specialized initiative under <strong>Lifora Vision</strong>, an educational and research-oriented mission focused on making advanced scientific knowledge accessible.
          </p>
          <div className="pt-8">
            <Link to="/contact" className="px-12 py-5 bg-gold-gradient text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl hover:scale-105 transition-transform duration-500 inline-block">
              Submit Your Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
