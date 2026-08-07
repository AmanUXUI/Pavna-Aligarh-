import React, { useState } from 'react';
import { DOWNLOAD_ITEMS, FAQ_DATA } from '../data/policyData';
import { FileText, Download, ChevronDown, Search, CheckCircle, ExternalLink, HelpCircle } from 'lucide-react';

export const DownloadsAndFAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");
  const [faqCategory, setFaqCategory] = useState<string>("All");
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? "" : id);
  };

  const handleSimulateDownload = (title: string) => {
    setDownloadSuccessToast(`Downloading "${title}"...`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 2500);
  };

  const categories = ["All", "General", "Exams", "Grading", "Parents"];

  const filteredFaqs = faqCategory === "All" 
    ? FAQ_DATA 
    : FAQ_DATA.filter(f => f.category === faqCategory);

  return (
    <section id="downloads" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {downloadSuccessToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom duration-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold">{downloadSuccessToast}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Download Center Section (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f37021] bg-orange-100 px-3 py-1 rounded-full inline-block mb-3">
                Resource Hub
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Policy Documents & Downloads
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Official PDF handbooks, sample report cards, and application forms.
              </p>
            </div>

            <div className="space-y-3">
              {DOWNLOAD_ITEMS.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs hover:border-orange-300 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-orange-50 text-[#f37021] rounded-xl shrink-0 group-hover:bg-[#f37021] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-slate-800 text-xs sm:text-sm mt-1 leading-snug">{item.title}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.description}</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium mt-1">
                        <span>{item.format}</span>
                        <span>•</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSimulateDownload(item.title)}
                    className="p-2 text-slate-400 hover:text-[#f37021] hover:bg-orange-50 rounded-xl transition-all shrink-0 cursor-pointer"
                    title="Download PDF"
                    aria-label={`Download ${item.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-orange-50/80 rounded-2xl p-4 border border-orange-200/80 text-xs text-slate-700 flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0f1d4a]">Looking for CBSE Circulars?</p>
                <p className="text-[11px] text-slate-600">Access official examination circulars directly on CBSE portal.</p>
              </div>
              <a 
                href="https://cbse.gov.in" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#f37021] hover:underline text-xs shrink-0"
              >
                <span>cbse.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* FAQ Accordion Section (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0f1d4a] bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Parent & Student Evaluation Clarifications
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Quick answers regarding tests, report cards, re-examinations, and grading standards.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFaqCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    faqCategory === cat
                      ? 'bg-[#0f1d4a] text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#f37021] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#f37021]' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
