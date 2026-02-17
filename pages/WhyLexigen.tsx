
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhyLexigen: React.FC = () => {
  const comparisons = [
    {
      lexigen: "Collaborative research hub",
      others: "Commercial project shop",
      isLexigen: true
    },
    {
      lexigen: "Customized mentorship based on student ideas",
      others: "Fixed lists of pre-done project titles",
      isLexigen: true
    },
    {
      lexigen: "Transparent computational methodology",
      others: "Black-box results with no explanation",
      isLexigen: true
    },
    {
      lexigen: "Focus on academic learning & discovery",
      others: "Purely transactional service",
      isLexigen: true
    },
    {
      lexigen: "Structured informatics workflow documentation",
      others: "Basic report generation",
      isLexigen: true
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Redefining <span className="text-gold">Project Support</span></h1>
          <p className="text-xl text-gray-500">We bridge the gap between commercial efficiency and academic ethics.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* The Lexigen Side */}
            <div className="p-12 md:p-16 bg-white">
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-gold/10 p-3 rounded-xl"><CheckCircle2 className="h-8 w-8 text-gold" /></div>
                <h2 className="text-3xl font-bold">Lexigen Hub</h2>
              </div>
              <ul className="space-y-8">
                {comparisons.map((c, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-semibold text-gray-900 leading-tight">{c.lexigen}</p>
                      <p className="text-sm text-gray-400 mt-1 italic">Student-centric approach</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Others Side */}
            <div className="p-12 md:p-16 bg-gray-50 border-l border-gray-100">
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-gray-200 p-3 rounded-xl"><XCircle className="h-8 w-8 text-gray-400" /></div>
                <h2 className="text-3xl font-bold text-gray-400">Commercial Centers</h2>
              </div>
              <ul className="space-y-8">
                {comparisons.map((c, i) => (
                  <li key={i} className="flex items-start space-x-4 opacity-50">
                    <XCircle className="h-6 w-6 text-red-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-semibold text-gray-600 leading-tight">{c.others}</p>
                      <p className="text-sm text-gray-400 mt-1 italic">Mass-produced model</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
            <div className="inline-block p-1 bg-gold/5 rounded-2xl border border-gold/10">
                <div className="px-10 py-12 bg-white rounded-xl shadow-sm max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Our Commitment to Final Year Students</h3>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                        We understand that your final year project is not just a requirement—it's your bridge to high-quality internships, Ph.D. positions, and industry roles. We ensure your research is robust enough to be presented in any professional environment.
                    </p>
                    <a href="#/students" className="text-gold font-bold hover:underline">Learn how students collaborate with us →</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLexigen;
