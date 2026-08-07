import React, { useState } from 'react';
import { Calculator, RefreshCw, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SCHOLASTIC_GRADING_SCALE } from '../data/policyData';

export const GradeCalculator: React.FC = () => {
  const [stage, setStage] = useState<'middle' | 'secondary'>('middle');
  const [ptScore, setPtScore] = useState<number>(8.5); // out of 10
  const [notebookScore, setNotebookScore] = useState<number>(4.5); // out of 5
  const [enrichmentScore, setEnrichmentScore] = useState<number>(4.5); // out of 5
  const [termExamScore, setTermExamScore] = useState<number>(68); // out of 80

  // Calculate total out of 100
  const totalScore = Math.min(100, Math.max(0, parseFloat((ptScore + notebookScore + enrichmentScore + termExamScore).toFixed(1))));

  // Determine Grade
  const getGradeInfo = (score: number) => {
    if (score >= 91) return SCHOLASTIC_GRADING_SCALE[0];
    if (score >= 81) return SCHOLASTIC_GRADING_SCALE[1];
    if (score >= 71) return SCHOLASTIC_GRADING_SCALE[2];
    if (score >= 61) return SCHOLASTIC_GRADING_SCALE[3];
    if (score >= 51) return SCHOLASTIC_GRADING_SCALE[4];
    if (score >= 41) return SCHOLASTIC_GRADING_SCALE[5];
    if (score >= 33) return SCHOLASTIC_GRADING_SCALE[6];
    return SCHOLASTIC_GRADING_SCALE[7];
  };

  const calculatedGrade = getGradeInfo(totalScore);

  const handleReset = () => {
    setPtScore(8);
    setNotebookScore(4);
    setEnrichmentScore(4);
    setTermExamScore(65);
  };

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-950/60 border border-orange-500/30 px-3.5 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 text-orange-400" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Grade & Marks Calculator Simulator
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Simulate your Term evaluation scores according to Pavna School weightage rules to estimate your final CBSE Grade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-md">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Stage Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <span className="text-xs font-bold uppercase text-slate-400">Select Grade Level</span>
              <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setStage('middle')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    stage === 'middle' ? 'bg-[#f37021] text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Grades 6 - 8 (Middle)
                </button>
                <button
                  type="button"
                  onClick={() => setStage('secondary')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    stage === 'secondary' ? 'bg-[#f37021] text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Grades 9 - 10 (Secondary)
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
              
              {/* Periodic Test (Out of 10) */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">Periodic Tests (Average Best 2 out of 3)</span>
                  <span className="text-orange-400 font-mono text-sm">{ptScore} / 10 Marks</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={ptScore}
                  onChange={(e) => setPtScore(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              {/* Notebook & Assignment (Out of 5) */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">Notebook Submission & Work Habits</span>
                  <span className="text-orange-400 font-mono text-sm">{notebookScore} / 5 Marks</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={notebookScore}
                  onChange={(e) => setNotebookScore(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              {/* Subject Enrichment / Practicals (Out of 5) */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">Subject Enrichment (ASL / Lab Tasks)</span>
                  <span className="text-orange-400 font-mono text-sm">{enrichmentScore} / 5 Marks</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={enrichmentScore}
                  onChange={(e) => setEnrichmentScore(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              {/* Term End Written Exam (Out of 80) */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-300">Half-Yearly / Term Written Exam</span>
                  <span className="text-orange-400 font-mono text-sm">{termExamScore} / 80 Marks</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="1"
                  value={termExamScore}
                  onChange={(e) => setTermExamScore(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to default values</span>
              </button>
            </div>

          </div>

          {/* Result Card Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Simulated Outcome</span>
              
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                    {totalScore}
                    <span className="text-xl font-normal text-slate-400">/100</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Calculated Cumulative Score</p>
                </div>

                <div className="text-right">
                  <div className="inline-block text-2xl font-black px-4 py-1.5 rounded-xl bg-orange-500 text-white shadow-lg">
                    {calculatedGrade.grade}
                  </div>
                  <p className="text-[10px] text-orange-300 font-medium mt-1">Grade Point: {calculatedGrade.gradePoint}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Evaluation Feedback</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {calculatedGrade.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Includes Internal Assessment (20) + Written Exam (80).</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
