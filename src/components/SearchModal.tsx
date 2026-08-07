import React, { useState } from 'react';
import { Search, X, ChevronRight, FileText, HelpCircle, BookOpen } from 'lucide-react';
import { STAGES_DATA, SCHOLASTIC_GRADING_SCALE, FAQ_DATA, DOWNLOAD_ITEMS } from '../data/policyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchQueryLower = query.toLowerCase().trim();

  // Filter stage data
  const stageResults = STAGES_DATA.filter(s => 
    s.stageName.toLowerCase().includes(searchQueryLower) ||
    s.description.toLowerCase().includes(searchQueryLower) ||
    s.grades.toLowerCase().includes(searchQueryLower)
  );

  // Filter FAQs
  const faqResults = FAQ_DATA.filter(f => 
    f.question.toLowerCase().includes(searchQueryLower) ||
    f.answer.toLowerCase().includes(searchQueryLower)
  );

  // Filter Downloads
  const downloadResults = DOWNLOAD_ITEMS.filter(d => 
    d.title.toLowerCase().includes(searchQueryLower) ||
    d.description.toLowerCase().includes(searchQueryLower)
  );

  const totalResults = stageResults.length + faqResults.length + downloadResults.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search policy rules, grades, periodic tests, medical leave..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {!query ? (
            <div className="py-8 text-center text-slate-400 space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs">Type a keyword like <span className="font-bold text-slate-600">"attendance"</span>, <span className="font-bold text-slate-600">"grade A1"</span>, <span className="font-bold text-slate-600">"re-exam"</span>, or <span className="font-bold text-slate-600">"CBSE"</span>.</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm font-semibold">No matching results found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for broader terms like "Middle Stage", "Pass Marks", or "Parent Portal".</p>
            </div>
          ) : (
            <>
              {/* Stage Results */}
              {stageResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-2 tracking-wider">Academic Stages</h4>
                  <div className="space-y-2">
                    {stageResults.map((st) => (
                      <div 
                        key={st.id}
                        onClick={() => { onSelectResult('stage'); onClose(); }}
                        className="p-3 bg-slate-50 hover:bg-orange-50/60 rounded-xl border border-slate-200/80 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900">{st.stageName} ({st.grades})</span>
                          <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-bold">Stage</span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{st.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Results */}
              {faqResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-2 tracking-wider">Policy Questions</h4>
                  <div className="space-y-2">
                    {faqResults.map((f) => (
                      <div 
                        key={f.id}
                        onClick={() => { onSelectResult('faq'); onClose(); }}
                        className="p-3 bg-slate-50 hover:bg-blue-50/60 rounded-xl border border-slate-200/80 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900">{f.question}</span>
                          <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">FAQ</span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Download Results */}
              {downloadResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-2 tracking-wider">Policy Downloads</h4>
                  <div className="space-y-2">
                    {downloadResults.map((d) => (
                      <div 
                        key={d.id}
                        onClick={() => { onSelectResult('download'); onClose(); }}
                        className="p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200/80 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-900">{d.title}</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">PDF</span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{d.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>

      </div>

    </div>
  );
};
