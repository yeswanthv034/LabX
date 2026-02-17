
import React from 'react';
import { Database, Network, Binary, Cpu, BarChart3, FlaskConical, ArrowRight } from 'lucide-react';

const ResearchDomains: React.FC = () => {
  const domains = [
    {
      title: 'Bioinformatics',
      icon: <Network className="h-8 w-8" />,
      description: 'Comprehensive sequence analysis, phylogenetics, and comparative genomics for biological insights.',
      features: ['Genome Mapping', 'Sequence Alignment', 'Phylogeny', 'Gene Annotation']
    },
    {
      title: 'Molecular Docking',
      icon: <Database className="h-8 w-8" />,
      description: 'Predictive modeling of ligand-protein interactions to facilitate drug discovery and protein engineering.',
      features: ['Virtual Screening', 'Binding Affinity Study', 'Active Site Prediction', 'MD Simulation']
    },
    {
      title: 'Omics Analysis',
      icon: <BarChart3 className="h-8 w-8" />,
      description: 'Handling high-throughput data from transcriptomics, proteomics, and metabolomics pipelines.',
      features: ['Differential Expression', 'Pathway Enrichment', 'Network Analysis', 'Visualization']
    },
    {
      title: 'Cheminformatics',
      icon: <FlaskConical className="h-8 w-8" />,
      description: 'Using computational techniques to solve chemistry-related problems and predict molecular properties.',
      features: ['SAR Analysis', 'Molecular Fingerprinting', 'ADMET Prediction', 'Library Design']
    },
    {
      title: 'Computational Genomics',
      icon: <Binary className="h-8 w-8" />,
      description: 'High-throughput genomic informatics, population genomics, and disease mapping.',
      features: ['Variant Calling', 'Population Mapping', 'Association Studies', 'Epigenomics']
    },
    {
      title: 'Structural Proteomics',
      icon: <Cpu className="h-8 w-8" />,
      description: 'In-silico protein structure prediction, function assignment, and macromolecular dynamics.',
      features: ['Fold Recognition', 'Protein Design', 'Dynamic Simulation', 'Active Site ID']
    }
  ];

  return (
    <div className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.5em] block">Informatics Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter">Core Research <span className="text-gold-gradient italic">Domains.</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Specialized computational research areas where Labx provides expert technical guidance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-[#FAFAFA] rounded-[3rem] p-12 border border-gray-100 hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-2xl transition-all duration-700"
            >
              <div className="mb-10 flex justify-between items-start">
                <div className="bg-white p-4 rounded-2xl text-[#D4AF37] shadow-xl group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 border border-gray-50">
                  {domain.icon}
                </div>
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] transition-all">
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </div>
              </div>
              
              <div className="space-y-6 flex-grow">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-[#996515] transition-colors">{domain.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{domain.description}</p>
                
                <div className="pt-8 border-t border-gray-100 space-y-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Informatics Modules</p>
                  <div className="flex flex-wrap gap-2">
                    {domain.features.map((f, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-wider text-[#996515] bg-[#D4AF37]/5 border border-[#D4AF37]/10 px-4 py-2 rounded-full group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-all">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 p-16 bg-premium-dark rounded-[4rem] text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl font-serif">Ready to collaborate on a specialized workflow?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">We frequently support custom informatics tasks tailored to unique student hypotheses across all 6 major domains.</p>
            <div className="pt-4">
              <a href="#/contact" className="inline-block px-12 py-5 bg-gold-gradient text-white font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all shadow-2xl">
                Initiate Project Cycle
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDomains;
