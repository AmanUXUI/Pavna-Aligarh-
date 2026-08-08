import React, { useState } from 'react';
import { User, Menu, X, Search } from 'lucide-react';

interface HeaderProps {
  onOpenLogin: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogin, activeTab, setActiveTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Student Results", id: "student-results" },
    { label: "Faculty", id: "faculty" },
    { label: "Beyond Academics", id: "beyond-academics" }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to top or target section if available
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLinkActive = (id: string) => {
    if (activeTab === id) return true;
    if (id === 'student-results' && (activeTab === 'class-12th' || activeTab === 'class-10th')) return true;
    if (id === 'academics' && (activeTab === 'curriculum' || activeTab === 'assessment-policy' || activeTab === 'calendar' || activeTab === 'faculty')) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px] py-2">
          
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group mr-6 lg:mr-10 xl:mr-16"
            onClick={() => handleNavClick("home")}
          >
            <img 
              src="https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/Link-Logo-%E2%86%92-Pavna-School-Logo.webp" 
              alt="Pavna School Logo"
              className="h-[40px] sm:h-[48px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden xl:flex items-center space-x-1 lg:space-x-3"
            style={{
              fontFamily: '"Gill Sans Medium", "Gill Sans", "Gill Sans MT", sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              textTransform: 'capitalize',
              wordSpacing: '0px'
            }}
          >
            {navLinks.map((link) => {
              const isSelected = isLinkActive(link.id);

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1 px-3 py-2 transition-colors rounded-md whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'text-[#f48120]'
                      : 'text-slate-700 hover:text-[#f48120]'
                  }`}
                  style={{
                    fontFamily: 'inherit',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    textTransform: 'capitalize',
                    wordSpacing: '0px'
                  }}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Search Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 text-slate-500 hover:text-[#f48120] hover:bg-slate-50 rounded-full transition-colors hidden sm:flex items-center justify-center"
                title="Search Assessment Policy"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Login Button */}
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-2 bg-[#f48120] hover:bg-[#d96e11] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isSelected = isLinkActive(link.id);

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-orange-50 text-[#f48120] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
