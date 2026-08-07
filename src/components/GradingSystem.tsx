import React, { useState } from 'react';
import { SCHOLASTIC_GRADING_SCALE, CO_SCHOLASTIC_AREAS } from '../data/policyData';
import { Award, Layers, Check, HelpCircle } from 'lucide-react';

export const GradingSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scholastic' | 'coscholastic'>('scholastic');

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1d4a] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              CBSE & NEP Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Grading Scale & Rubrics Matrix
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Transparent 9-Point Direct Grading Scale for scholastic subjects alongside holistic 3-point co-scholastic rubrics.
            </p>
          </div>

          {/* Toggle Button Group */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveTab('scholastic')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'scholastic'
                  ? 'bg-white text-[#0f1d4a] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Scholastic Grading (A1 - E)
            </button>
            <button
              onClick={() => setActiveTab('coscholastic')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'coscholastic'
                  ? 'bg-white text-[#f37021] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Co-Scholastic & Life Skills
            </button>
          </div>
        </div>

        {activeTab === 'scholastic' ? (
          /* Scholastic Table View */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden animate-in fade-in duration-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Grade</th>
                    <th className="py-3.5 px-4 font-bold">Marks Range</th>
                    <th className="py-3.5 px-4 font-bold">Grade Point</th>
                    <th className="py-3.5 px-4 font-bold">Performance Descriptor & Guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {SCHOLASTIC_GRADING_SCALE.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold">
                        <span className={`inline-block px-2.5 py-1 rounded-md border text-xs font-black ${item.badgeColor}`}>
                          {item.grade}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-extrabold text-slate-800">{item.marksRange}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-600">{item.gradePoint}</td>
                      <td className="py-3.5 px-4 text-slate-600 leading-relaxed max-w-md">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 font-medium">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                Minimum passing marks in each scholastic subject is 33% (Grade D).
              </span>
              <span className="text-[11px] bg-white px-2.5 py-1 rounded border border-slate-200 font-semibold text-slate-700">
                Grade E requires compulsory re-assessment module.
              </span>
            </div>
          </div>
        ) : (
          /* Co-Scholastic View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {CO_SCHOLASTIC_AREAS.map((area, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-xs transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 text-[#f37021] rounded-xl font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{area.area}</h3>
                    <span className="text-[11px] text-slate-500 font-medium">Evaluated on 3-Point Scale (A, B, C)</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{area.description}</p>
                
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">3-Point Criteria:</span>
                  <div className="flex items-center gap-2 font-bold">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">A = Exemplary</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">B = Proficient</span>
                    <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded">C = Developing</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
