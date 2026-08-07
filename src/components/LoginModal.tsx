import React, { useState } from 'react';
import { X, User, Lock, ArrowRight, ShieldCheck, School, GraduationCap } from 'lucide-react';
import { SCHOOL_NAME } from '../data/policyData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [portalType, setPortalType] = useState<'parent' | 'staff'>('parent');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="bg-gradient-to-r from-[#201A5B] to-[#2e267d] px-6 py-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 bg-[#f48120] rounded-lg text-white">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wide">{SCHOOL_NAME}</h3>
              <p className="text-xs text-blue-200 font-medium">Digital ERP & Portal Gateway</p>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => setPortalType('parent')}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              portalType === 'parent'
                ? 'bg-white text-[#f48120] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Student & Parent Portal</span>
          </button>
          
          <button
            type="button"
            onClick={() => setPortalType('staff')}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
              portalType === 'staff'
                ? 'bg-white text-[#201A5B] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Faculty & Staff</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {loginSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">Authentication Successful!</h4>
              <p className="text-xs text-slate-500">Redirecting to your {portalType === 'parent' ? 'Parent Dashboard' : 'Staff ERP'}...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {portalType === 'parent' ? 'Student Admission No. / Parent Phone' : 'Staff Employee ID'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={portalType === 'parent' ? 'e.g. PS-2025-8841' : 'e.g. EMP-1042'}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">Password</label>
                  <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[11px] font-medium text-orange-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                  />
                  <span>Keep me logged in</span>
                </label>
                <span className="text-slate-400">SSL 256-bit Secured</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#f48120] hover:bg-[#d96e11] text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In to {portalType === 'parent' ? 'Parent Portal' : 'Faculty ERP'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Having trouble logging in? Contact IT Support at{' '}
                  <span className="font-semibold text-slate-700">support@pavnaschool.edu.in</span>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
};
