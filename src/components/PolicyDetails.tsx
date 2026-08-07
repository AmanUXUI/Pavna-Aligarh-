import React from 'react';
import { POLICY_RULES } from '../data/policyData';
import { CalendarCheck, ShieldAlert, Award, Users, CheckCircle, FileText } from 'lucide-react';

export const PolicyDetails: React.FC = () => {

  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-orange-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-600" />;
      default: return <FileText className="w-6 h-6 text-[#f37021]" />;
    }
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full inline-block mb-3">
            School Code & Guidelines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Governance & Examination Regulations
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Essential institutional rules ensuring equity, transparency, and academic discipline across all evaluations.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {POLICY_RULES.map((rule, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-white rounded-xl shadow-2xs border border-slate-100 shrink-0">
                    {getRuleIcon(rule.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{rule.title}</h3>
                    <p className="text-xs font-semibold text-[#f37021]">{rule.summary}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 pl-1 border-l-2 border-orange-200">
                  {rule.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-medium text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Mandatory Compliance
                </span>
                <span className="font-semibold text-slate-700">Ref: Sec 14/CBSE-E</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner for Medical/Absence Requests */}
        <div className="mt-8 bg-gradient-to-r from-[#0f1d4a] to-[#1c3070] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Examination Helpdesk</span>
            <h3 className="text-xl font-bold font-serif">Need to submit a Medical Leave or Exam Absence Request?</h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Submit your verified medical certificate within 72 hours via the Parent Portal or directly to the Examination In-Charge office.
            </p>
          </div>

          <a 
            href="#downloads"
            className="shrink-0 bg-[#f37021] hover:bg-[#d95d13] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md text-center"
          >
            Download Absence Request Form
          </a>
        </div>

      </div>
    </section>
  );
};
