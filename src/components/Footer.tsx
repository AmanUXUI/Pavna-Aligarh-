import React from 'react';
import { MapPin, Phone, Mail, Globe, Shield, ExternalLink, Heart } from 'lucide-react';
import { SCHOOL_NAME } from '../data/policyData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#201A5B] text-white pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* Pinwheel Logo */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 50 C 50 20, 20 20, 20 50 C 20 50, 50 50, 50 50 Z" fill="#ffffff" />
                  <path d="M50 50 C 80 50, 80 20, 50 20 C 50 20, 50 50, 50 50 Z" fill="#f48120" />
                  <path d="M50 50 C 50 80, 80 80, 80 50 C 80 50, 50 50, 50 50 Z" fill="#eab308" />
                  <path d="M50 50 C 20 50, 20 80, 50 80 C 50 80, 50 50, 50 50 Z" fill="#06b6d4" />
                  <circle cx="50" cy="50" r="10" fill="#201A5B" />
                </svg>
              </div>

              <div>
                <span className="text-xl font-black font-sans tracking-tight text-white uppercase block leading-none">
                  PAVNA SCHOOL
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#f48120] uppercase leading-tight mt-0.5 block">
                  — ALIGARH —
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Pavna School is a premier CBSE-affiliated co-educational institution dedicated to nurturing intellectual curiosity, ethical character, and all-round holistic development.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CBSE Affiliation No: <strong className="text-white">2133890</strong> (School Code: 81882)</span>
            </div>
          </div>

          {/* Quick Academic Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f48120]">Academic & Policy Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => { setActiveTab('assessment-policy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f48120] transition-colors flex items-center gap-1.5 cursor-pointer font-medium text-white"
                >
                  <span className="text-[#f48120] font-bold">›</span>
                  <span>Assessment & Evaluation Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('curriculum'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f48120] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>›</span>
                  <span>CBSE Curriculum Structure</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('calendar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f48120] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>›</span>
                  <span>Academic Examination Calendar</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('admission'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f48120] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>›</span>
                  <span>Admissions Guidelines & Forms</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('mandatory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f48120] transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400"
                >
                  <span>›</span>
                  <span>Mandatory Public Disclosures (CBSE)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Campus Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f48120]">Campus Address & Helpdesk</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f48120] shrink-0 mt-0.5" />
                <span>Pavna School Campus, Mathura - Aligarh Highway, Aligarh, Uttar Pradesh - 202001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f48120] shrink-0" />
                <span>+91 (0571) 297-0100 / +91 98970 12345</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f48120] shrink-0" />
                <span>academics@pavnaschool.edu.in / info@pavnaschool.edu.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#f48120] shrink-0" />
                <span>www.pavnaschool.edu.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© 2026 Pavna School. All Rights Reserved. Aligned with CBSE & NEP 2020.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Parent Portal Access</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
