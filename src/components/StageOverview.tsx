import React, { useState } from 'react';
import { STAGES_DATA } from '../data/policyData';
import { Sparkles, BookOpen, Brain, GraduationCap, CheckCircle2, BarChart3, Clock, ChevronRight } from 'lucide-react';

export const StageOverview: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>("middle");

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-teal-500" />;
      case 'Brain': return <Brain className="w-5 h-5 text-indigo-500" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-orange-500" />;
      default: return <BookOpen className="w-5 h-5 text-blue-500" />;
    }
  };

  const activeStage = STAGES_DATA.find(s => s.id === selectedStageId) || STAGES_DATA[2];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] bg-orange-100 px-3 py-1 rounded-full inline-block mb-3">
            Academic Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Stage-Wise Assessment Architecture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Tailored evaluation methodologies aligned with child developmental milestones from early childhood through board examinations.
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {STAGES_DATA.map((stage) => {
            const isSelected = selectedStageId === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#f37021] shadow-md ring-2 ring-orange-500/20'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-orange-50' : 'bg-slate-100'}`}>
                    {getStageIcon(stage.iconName)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-[#f37021] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {stage.grades}
                  </span>
                </div>
                <div>
                  <h3 className={`font-bold text-sm sm:text-base ${isSelected ? 'text-[#0f1d4a]' : 'text-slate-800'}`}>
                    {stage.stageName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{stage.focus}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Display Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-300">
          
          <div className="bg-gradient-to-r from-[#0f1d4a] to-[#1e3a8a] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <span>{activeStage.grades}</span>
                <span>•</span>
                <span>{activeStage.ageGroup}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif">{activeStage.stageName}</h3>
              <p className="text-blue-100/90 text-sm mt-1 max-w-2xl">{activeStage.description}</p>
            </div>

            <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center min-w-[200px]">
              <div className="flex items-center justify-center gap-1.5 text-xs text-blue-200 font-semibold mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Reporting Cycle</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white">{activeStage.reportingFrequency}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Key Policy Highlights (Left Column - 6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f37021]" />
                  <span>Key Policy Principles</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeStage.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-[#f37021] mt-1.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Assessment Component Breakdown (Right Column - 6 Cols) */}
            <div className="lg:col-span-6 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span>Evaluation Weightage Matrix</span>
              </h4>

              <div className="space-y-4">
                {activeStage.assessmentBreakdown.map((item, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{item.category}</span>
                      <span className="text-xs font-extrabold text-[#f37021] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                        {item.weightage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-1.5">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-[#f37021] h-full rounded-full transition-all duration-500" 
                        style={{ width: `${item.weightage}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-500 leading-snug">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
