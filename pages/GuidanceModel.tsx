
import React from 'react';
import { Lightbulb, PenTool, Cpu, FileText, ArrowRight } from 'lucide-react';

const GuidanceModel: React.FC = () => {
  const steps = [
    {
      title: 'Idea Conception',
      icon: <Lightbulb className="h-10 w-10" />,
      desc: 'Students bring their core biological ideas or questions. We help refine these into feasible computational research goals.',
      color: 'bg-yellow-50 text-yellow-600 border-yellow-100'
    },
    {
      title: 'Workflow Design',
      icon: <PenTool className="h-10 w-10" />,
      desc: 'Architecture of the study. Selection of datasets, tools, software versions, and statistical methodologies.',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Computation & Analysis',
      icon: <Cpu className="h-10 w-10" />,
      desc: 'Collaborative execution of informatics pipelines. We provide high-performance support and technical troubleshooting.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      title: 'Documentation',
      icon: <FileText className="h-10 w-10" />,
      desc: 'Final structured results, biological interpretations, and academic reporting suitable for UG/PG submissions.',
      color: 'bg-green-50 text-green-600 border-green-100'
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Guidance <span className="text-gold">Model</span></h1>
          <p className="text-xl text-gray-500">A structured, mentor-driven approach to scientific discovery that emphasizes learning over transactional services.</p>
        </div>

        <div className="relative">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 border transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${step.color}`}>
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-2xl group-hover:bg-gray-50 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2 text-gray-300">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Philosophy */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-gray-100 pt-32">
          <div>
            <h2 className="text-3xl font-bold mb-8">Why this model works</h2>
            <div className="space-y-6">
              {[
                "Active student participation ensures deep learning.",
                "Professional computational infrastructure prevents 'dead-end' research.",
                "Peer-review level methodology documentation.",
                "Tailored to academic calendar deadlines and UG/PG requirements."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-charcoal p-12 rounded-[2.5rem] text-white">
            <h3 className="text-2xl font-bold mb-6 text-gold">Commitment to Integrity</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              "We provide the tools and the map, but the student holds the compass. Every project guided by Labx reflects the student's own intellectual journey, backed by professional-grade computation."
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-gold"></div>
              <div>
                <p className="text-sm font-bold">Informatics Research Council</p>
                <p className="text-xs text-gray-500">Labx Informatics Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceModel;
