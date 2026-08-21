import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResultHighlights } from './components/ResultHighlights';
import { StudentCouncil } from './components/StudentCouncil';
import { FacultyPage } from './components/FacultyPage';
import { BeyondAcademicsPage } from './components/BeyondAcademicsPage';
import { LoginModal } from './components/LoginModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 antialiased flex flex-col">
      
      {/* Top Header Navigation */}
      <Header 
        onOpenLogin={() => setIsLoginOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {activeTab === 'faculty' ? (
          <FacultyPage />
        ) : activeTab === 'beyond-academics' ? (
          <BeyondAcademicsPage />
        ) : activeTab === 'student-council' ? (
          <>
            <Hero 
              title="Student Council" 
              subtitle="Empowering student voices, cultivating visionary leadership, and driving positive school community initiatives." 
            />
            <StudentCouncil activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        ) : (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Tabbed Result Highlights Section */}
            <ResultHighlights activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )}
      </main>

      {/* Login Portal Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(cat) => {
          // Scroll to relevant section
          const el = document.getElementById(cat);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

    </div>
  );
}
