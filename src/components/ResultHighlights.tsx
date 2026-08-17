import React, { useState, useEffect } from 'react';
import { Award, GraduationCap, TrendingUp, Users, CheckCircle2, Star, Search, Sparkles, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface TopperStudent {
  sNo: number;
  name: string;
  stream: string;
  percentage: number;
}

interface SubjectTopper {
  subject: string;
  toppers: { name: string; marks: number }[];
}

interface ResultHighlightsProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const ResultHighlights: React.FC<ResultHighlightsProps> = ({ activeTab, setActiveTab }) => {
  const [selectedClass, setSelectedClass] = useState<'12th' | '10th'>('12th');
  const [activeSessionTab, setActiveSessionTab] = useState<'2024-25' | '2025-26' | '2026-27'>('2025-26');
  const [streamFilter, setStreamFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subView, setSubView] = useState<'overall' | 'toppers' | 'subjects'>('overall');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Sync selectedClass with activeTab prop
  useEffect(() => {
    if (activeTab === 'class-10th') {
      setSelectedClass('10th');
    } else if (activeTab === 'class-12th') {
      setSelectedClass('12th');
    }
  }, [activeTab]);

  // ----------------2025-26 DATA (CLASS XII)----------------
  const summaryStats2025_26_12th = [
    { label: "Total Appeared", value: "79", unit: "Students", icon: Users },
    { label: "Pass Percentage", value: "100%", unit: "Pass Rate", icon: CheckCircle2 },
    { label: "Scored Above 90%", value: "10", unit: "12.7% Students", icon: Star },
    { label: "Scored Above 80%", value: "37", unit: "46.8% Students", icon: Award },
    { label: "Scored Above 60%", value: "77", unit: "97.5% Students", icon: TrendingUp },
    { label: "School Average", value: "78.5%", unit: "78.49% Avg", icon: GraduationCap },
  ];

  const top3Toppers2025_26_12th = [
    {
      rank: 1,
      name: "SHUBHITA SRIVASTAVA",
      stream: "Commerce",
      streamCode: "COM",
      percentage: 98.0,
      badge: "Overall School & Commerce Topper",
      photo: "https://imgh.in/host/pwldtz",
      highlights: ["99/100 in Business Studies & Economics", "99/100 in Entrepreneurship"]
    },
    {
      rank: 2,
      name: "KAVYA SINGH",
      stream: "Humanities",
      streamCode: "HUM",
      percentage: 96.8,
      badge: "Humanities Stream Topper",
      photo: "https://imgh.in/host/uiek8k",
      highlights: ["100/100 in Painting", "98/100 in Geography", "97/100 in History"]
    },
    {
      rank: 3,
      name: "GITANJALI SINGH",
      stream: "Humanities",
      streamCode: "HUM",
      percentage: 96.2,
      badge: "Humanities 2nd Ranker",
      photo: "https://imgh.in/host/buhbrq",
      highlights: ["100/100 in Painting", "98/100 in English Core"]
    }
  ];

  const toppers2025_26_12th: TopperStudent[] = [
    { sNo: 1, name: "SHUBHITA SRIVASTAVA", stream: "COM", percentage: 98.0 },
    { sNo: 2, name: "KAVYA SINGH", stream: "HUM", percentage: 96.8 },
    { sNo: 3, name: "GITANJALI SINGH", stream: "HUM", percentage: 96.2 },
    { sNo: 4, name: "KHUSHI VARSHNEY", stream: "HUM", percentage: 95.2 },
    { sNo: 5, name: "AARUSH GODANI", stream: "COM", percentage: 94.4 },
    { sNo: 6, name: "VIVAAN CHAUHAN", stream: "HUM", percentage: 94.2 },
    { sNo: 7, name: "MADHVI RATHI", stream: "PCB", percentage: 93.0 },
    { sNo: 8, name: "SHUBH SENGER", stream: "PCM", percentage: 90.2 },
    { sNo: 9, name: "SHLOK MAHESHWARI", stream: "COM", percentage: 90.2 },
    { sNo: 10, name: "PULKIT DESHWAL", stream: "PCB", percentage: 90.0 },
  ];

  const subjectToppers2025_26_12th: SubjectTopper[] = [
    {
      subject: "English Core",
      toppers: [
        { name: "GITANJALI SINGH", marks: 98 },
        { name: "VAISHNAVI TAYAL", marks: 98 }
      ]
    },
    {
      subject: "Business Studies",
      toppers: [{ name: "SHUBHITA SRIVASTAVA", marks: 99 }]
    },
    {
      subject: "Economics",
      toppers: [
        { name: "SHUBHITA SRIVASTAVA", marks: 99 },
        { name: "AARUSH GODANI", marks: 99 }
      ]
    },
    {
      subject: "Entrepreneurship",
      toppers: [{ name: "SHUBHITA SRIVASTAVA", marks: 99 }]
    },
    {
      subject: "Geography",
      toppers: [{ name: "KAVYA SINGH", marks: 98 }]
    },
    {
      subject: "Political Science",
      toppers: [{ name: "KHUSHI VARSHNEY", marks: 98 }]
    },
    {
      subject: "Dance",
      toppers: [{ name: "SHREYA SAXENA", marks: 98 }]
    },
    {
      subject: "Accountancy",
      toppers: [{ name: "AARUSH GODANI", marks: 98 }]
    },
    {
      subject: "History",
      toppers: [{ name: "KAVYA SINGH", marks: 97 }]
    },
    {
      subject: "Physical Education",
      toppers: [{ name: "SHLOK MAHESHWARI", marks: 97 }]
    },
    {
      subject: "Chemistry",
      toppers: [{ name: "MADHVI RATHI", marks: 95 }]
    },
    {
      subject: "Biology",
      toppers: [{ name: "AANANDI VARSHNEY", marks: 95 }]
    },
    {
      subject: "Informatics Practices",
      toppers: [{ name: "NAVYA VARSHNEY", marks: 95 }]
    },
    {
      subject: "Mathematics",
      toppers: [{ name: "SHUBH SENGER", marks: 91 }]
    },
    {
      subject: "Computer Science",
      toppers: [{ name: "PRATYUSH SHARMA", marks: 90 }]
    },
    {
      subject: "Physics",
      toppers: [{ name: "PULKIT DESHWAL", marks: 86 }]
    },
    {
      subject: "Painting",
      toppers: [
        { name: "PRINCE GUPTA", marks: 100 },
        { name: "KAVYA SINGH", marks: 100 },
        { name: "GITANJALI SINGH", marks: 100 },
        { name: "VIVAAN CHAUHAN", marks: 100 },
        { name: "MADHVI RATHI", marks: 100 },
        { name: "PULKIT DESHWAL", marks: 100 }
      ]
    }
  ];

  // ----------------2024-25 DATA (CLASS XII)----------------
  const top3Toppers12th = [
    {
      rank: 1,
      name: "CHETANYA SHRIVAS",
      stream: "Humanities",
      streamCode: "HUM",
      percentage: 98.6,
      badge: "Overall School Topper",
      photo: "https://imgh.in/host/k187ox",
      highlights: ["100/100 in English Core", "100/100 in Political Science"]
    },
    {
      rank: 2,
      name: "SAKSHAM JAIN",
      stream: "Commerce",
      streamCode: "COM",
      percentage: 97.6,
      badge: "Commerce Stream Topper",
      photo: "https://imgh.in/host/epait3",
      highlights: ["99/100 in Economics", "98/100 in Accountancy & Business Studies"]
    },
    {
      rank: 3,
      name: "KANISHK VARSHNEY",
      stream: "Medical (PCB)",
      streamCode: "PCB",
      percentage: 95.8,
      badge: "Science Stream Topper",
      photo: "https://imgh.in/host/kq97g7",
      highlights: ["100/100 in Painting", "94/100 in Biology"]
    }
  ];

  // Top 3 Toppers Class X
  const top3Toppers10th = [
    {
      rank: 1,
      name: "ABHIMANYU SINGH",
      stream: "Class X General",
      streamCode: "GEN",
      percentage: 97.3,
      badge: "Overall Class X Topper",
      photo: "https://imgh.in/host/hb8pnw",
      highlights: ["100/100 in Science", "98/100 in Social Science"]
    },
    {
      rank: 2,
      name: "RUDRA KAUSHIK",
      stream: "Class X General",
      streamCode: "GEN",
      percentage: 96.5,
      badge: "Class X 2nd Topper",
      photo: "https://imgh.in/host/i2yzz6",
      highlights: ["100/100 in Information Technology"]
    },
    {
      rank: 3,
      name: "TANMAY GUPTA",
      stream: "Class X General",
      streamCode: "GEN",
      percentage: 95.5,
      badge: "Class X 3rd Topper",
      photo: "https://imgh.in/host/i2yzz6",
      highlights: ["100/100 in Science & IT", "99/100 in Mathematics"]
    }
  ];

  // Summary statistics for 2024-25
  const summaryStats12th = [
    { label: "Total Appeared", value: "101", unit: "Students", icon: Users },
    { label: "Pass Percentage", value: "100%", unit: "Pass Rate", icon: CheckCircle2 },
    { label: "Scored Above 90%", value: "20", unit: "19.8% Students", icon: Star },
    { label: "Scored Above 80%", value: "49", unit: "48.5% Students", icon: Award },
    { label: "Scored Above 60%", value: "93", unit: "92.1% Students", icon: TrendingUp },
    { label: "School Average", value: "78.1%", unit: "Overall Avg", icon: GraduationCap },
  ];

  const summaryStats10th = [
    { label: "Total Appeared", value: "72", unit: "Students", icon: Users },
    { label: "Pass Percentage", value: "100%", unit: "Pass Rate", icon: CheckCircle2 },
    { label: "Scored Above 90%", value: "13", unit: "18.1% Students", icon: Star },
    { label: "Scored Above 80%", value: "38", unit: "52.8% Students", icon: Award },
    { label: "Scored Above 60%", value: "64", unit: "88.9% Students", icon: TrendingUp },
    { label: "School Average", value: "77.7%", unit: "Overall Avg", icon: GraduationCap },
  ];

  const summaryStats2024_25 = selectedClass === '10th' ? summaryStats10th : summaryStats12th;

  // Active dataset selection based on session tab and class
  const summaryStatsActive = activeSessionTab === '2025-26'
    ? (selectedClass === '10th' ? summaryStats10th : summaryStats2025_26_12th)
    : summaryStats2024_25;

  const top3ToppersActive = activeSessionTab === '2025-26'
    ? (selectedClass === '10th' ? top3Toppers10th : top3Toppers2025_26_12th)
    : (selectedClass === '10th' ? top3Toppers10th : top3Toppers12th);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeSessionTab, selectedClass]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (top3ToppersActive.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % top3ToppersActive.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [top3ToppersActive.length]);

  const handleNextSlide = () => {
    if (top3ToppersActive.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % top3ToppersActive.length);
    }
  };

  const handlePrevSlide = () => {
    if (top3ToppersActive.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + top3ToppersActive.length) % top3ToppersActive.length);
    }
  };

  // 90% and Above Students List for 2024-25
  const toppers12th: TopperStudent[] = [
    { sNo: 1, name: "CHETANYA SHRIVAS", stream: "HUM", percentage: 98.6 },
    { sNo: 2, name: "SAKSHAM JAIN", stream: "COM", percentage: 97.6 },
    { sNo: 3, name: "KANISHK VARSHNEY", stream: "PCB", percentage: 95.8 },
    { sNo: 4, name: "AADYAM SAXENA", stream: "HUM", percentage: 95.6 },
    { sNo: 5, name: "KHUSHI VARSHNEY", stream: "HUM", percentage: 95.6 },
    { sNo: 6, name: "DHRUV AGRAWAL", stream: "PCM", percentage: 95.4 },
    { sNo: 7, name: "RITIKA PANCHAL", stream: "HUM", percentage: 95.2 },
    { sNo: 8, name: "ANKITA BANERJEE", stream: "HUM", percentage: 93.4 },
    { sNo: 9, name: "SAJAL VARSHNEY", stream: "COM", percentage: 93.2 },
    { sNo: 10, name: "EKANSH ARYA GUPTA", stream: "COM", percentage: 93.0 },
    { sNo: 11, name: "PRIYANKA KASHYAP", stream: "HUM", percentage: 93.0 },
    { sNo: 12, name: "LIPI GAUR", stream: "PCB", percentage: 92.4 },
    { sNo: 13, name: "VIKAS JHA", stream: "PCM", percentage: 91.6 },
    { sNo: 14, name: "KARTIK MAHESHWARI", stream: "COM", percentage: 91.4 },
    { sNo: 15, name: "MUSKAN AGARWAL", stream: "HUM", percentage: 91.4 },
    { sNo: 16, name: "MOHINI SINGH", stream: "HUM", percentage: 91.2 },
    { sNo: 17, name: "BHOOMIKA SINGH", stream: "PCB", percentage: 90.8 },
    { sNo: 18, name: "ROHAN BANSAL", stream: "COM", percentage: 90.8 },
    { sNo: 19, name: "SOMYA KAUSHIK", stream: "PCB", percentage: 90.0 },
    { sNo: 20, name: "SARTHAK JAIN", stream: "COM", percentage: 90.0 },
  ];

  const toppers10th: TopperStudent[] = [
    { sNo: 1, name: "ABHIMANYU SINGH", stream: "GEN", percentage: 97.3 },
    { sNo: 2, name: "RUDRA KAUSHIK", stream: "GEN", percentage: 96.5 },
    { sNo: 3, name: "TANMAY GUPTA", stream: "GEN", percentage: 95.5 },
    { sNo: 4, name: "AYAN SARASWAT", stream: "GEN", percentage: 95.5 },
    { sNo: 5, name: "AASTHA SHARMA", stream: "GEN", percentage: 94.5 },
    { sNo: 6, name: "PRASHASTI SINGH", stream: "GEN", percentage: 93.7 },
    { sNo: 7, name: "SHAURYA VARSHNEY", stream: "GEN", percentage: 93.2 },
    { sNo: 8, name: "ADITYA BHARDWAJ", stream: "GEN", percentage: 92.7 },
    { sNo: 9, name: "GAURANSH TAWRI", stream: "GEN", percentage: 92.5 },
    { sNo: 10, name: "RISHIT AGARWAL", stream: "GEN", percentage: 92.5 },
    { sNo: 11, name: "BRATESH KUMAR SINGH", stream: "GEN", percentage: 92.3 },
    { sNo: 12, name: "GAURAV SHARMA", stream: "GEN", percentage: 92.0 },
    { sNo: 13, name: "SIDDHI AGARWAL", stream: "GEN", percentage: 90.7 },
  ];

  const toppers2024_25 = selectedClass === '10th' ? toppers10th : toppers12th;

  // Subject Wise Toppers
  const subjectToppers12th: SubjectTopper[] = [
    {
      subject: "English Core",
      toppers: [
        { name: "LIPI GAUR", marks: 100 },
        { name: "VIKAS JHA", marks: 100 },
        { name: "EKANSH ARYA GUPTA", marks: 100 },
        { name: "CHETANYA SHRIVAS", marks: 100 }
      ]
    },
    {
      subject: "Political Science",
      toppers: [{ name: "CHETANYA SHRIVAS", marks: 100 }]
    },
    {
      subject: "Informatics Practices",
      toppers: [{ name: "ARYAN VERMA", marks: 100 }]
    },
    {
      subject: "Painting",
      toppers: [
        { name: "BHOOMIKA SINGH", marks: 100 },
        { name: "KANISHK VARSHNEY", marks: 100 },
        { name: "KRITIKA BHARDWAJ", marks: 100 },
        { name: "LIPI GAUR", marks: 100 },
        { name: "VANSHIKA CHAUDHARY", marks: 100 }
      ]
    },
    {
      subject: "Economics",
      toppers: [{ name: "SAKSHAM JAIN", marks: 99 }]
    },
    {
      subject: "History",
      toppers: [{ name: "AADYAM SAXENA", marks: 99 }]
    },
    {
      subject: "Accountancy",
      toppers: [{ name: "SAKSHAM JAIN", marks: 98 }]
    },
    {
      subject: "Business Studies",
      toppers: [
        { name: "SAJAL VARSHNEY", marks: 98 },
        { name: "SAKSHAM JAIN", marks: 98 }
      ]
    },
    {
      subject: "Chemistry",
      toppers: [{ name: "DHRUV AGRAWAL", marks: 96 }]
    },
    {
      subject: "Mathematics",
      toppers: [{ name: "DHRUV AGRAWAL", marks: 96 }]
    }
  ];

  const subjectToppers10th: SubjectTopper[] = [
    {
      subject: "Science",
      toppers: [
        { name: "ABHIMANYU SINGH", marks: 100 },
        { name: "GAURAV SHARMA", marks: 100 },
        { name: "TANMAY GUPTA", marks: 100 }
      ]
    },
    {
      subject: "Information Technology",
      toppers: [
        { name: "GAURAV SHARMA", marks: 100 },
        { name: "TANMAY GUPTA", marks: 100 },
        { name: "RUDRA KAUSHIK", marks: 100 },
        { name: "SHAURYA VARSHNEY", marks: 100 }
      ]
    },
    {
      subject: "Sanskrit",
      toppers: [
        { name: "AAYUSH MAHESHWARI", marks: 100 },
        { name: "PRASHASTI SINGH", marks: 100 }
      ]
    },
    {
      subject: "Mathematics",
      toppers: [{ name: "TANMAY GUPTA", marks: 99 }]
    },
    {
      subject: "English Lang & Lit.",
      toppers: [{ name: "ANUKRATI SINGH", marks: 98 }]
    },
    {
      subject: "Social Science",
      toppers: [{ name: "ABHIMANYU SINGH", marks: 98 }]
    },
    {
      subject: "Hindi Course - B",
      toppers: [{ name: "BRATESH KUMAR SINGH", marks: 97 }]
    },
    {
      subject: "Urdu",
      toppers: [{ name: "PUNEET KUMAR", marks: 88 }]
    }
  ];

  const toppersActive = activeSessionTab === '2025-26'
    ? (selectedClass === '10th' ? toppers10th : toppers2025_26_12th)
    : (selectedClass === '10th' ? toppers10th : toppers12th);

  const subjectToppersActive = activeSessionTab === '2025-26'
    ? (selectedClass === '10th' ? subjectToppers10th : subjectToppers2025_26_12th)
    : (selectedClass === '10th' ? subjectToppers10th : subjectToppers12th);

  const getStreamBadgeColor = (stream: string) => {
    switch (stream) {
      case 'HUM': return 'bg-slate-100 text-[#201A5B] border-slate-200';
      case 'COM': return 'bg-slate-100 text-[#201A5B] border-slate-200';
      case 'PCM': return 'bg-slate-100 text-[#201A5B] border-slate-200';
      case 'PCB': return 'bg-slate-100 text-[#201A5B] border-slate-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getStreamFullName = (stream: string) => {
    switch (stream) {
      case 'HUM': return 'Humanities';
      case 'COM': return 'Commerce';
      case 'PCM': return 'Non-Medical (PCM)';
      case 'PCB': return 'Medical (PCB)';
      case 'GEN': return 'General Curriculum';
      default: return stream;
    }
  };

  const filteredToppers = toppersActive.filter(student => {
    const matchesStream = selectedClass === '10th' || streamFilter === 'ALL' || student.stream === streamFilter;
    const matchesQuery = searchQuery === '' || 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      student.stream.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStream && matchesQuery;
  });

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f48120] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200/60 inline-block mb-2.5">
            Academic Excellence & CBSE Performance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#201A5B] tracking-tight">
            {selectedClass === '10th' ? 'Class X Board Result Highlights' : 'Class XII Board Result Highlights'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {selectedClass === '10th' 
              ? "Celebrating our Class X students' outstanding academic achievements, subject mastery, and exemplary performance in CBSE Secondary School Examinations."
              : "Celebrating our students' outstanding academic achievements, subject mastery, and exemplary performance in CBSE Senior School Certificate Examinations."
            }
          </p>
        </div>

        {/* Class Switcher Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300/80 shadow-inner">
            <button
              onClick={() => {
                setSelectedClass('12th');
                if (setActiveTab) setActiveTab('class-12th');
              }}
              className={`px-6 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                selectedClass === '12th'
                  ? 'bg-white text-[#201A5B] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${selectedClass === '12th' ? 'text-[#f48120]' : 'text-slate-400'}`} />
              <span>CLASS XII RESULTS</span>
            </button>
            <button
              onClick={() => {
                setSelectedClass('10th');
                if (setActiveTab) setActiveTab('class-10th');
              }}
              className={`px-6 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                selectedClass === '10th'
                  ? 'bg-white text-[#201A5B] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className={`w-4 h-4 ${selectedClass === '10th' ? 'text-[#f48120]' : 'text-slate-400'}`} />
              <span>CLASS X RESULTS</span>
            </button>
          </div>
        </div>

        {/* Main Session Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveSessionTab('2025-26')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeSessionTab === '2025-26'
                  ? 'bg-[#201A5B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#201A5B] hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4 text-[#f48120]" />
              <span>RESULT HIGHLIGHTS 2025–26</span>
              <span className="bg-[#f48120] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">100% Pass</span>
            </button>

            <button
              onClick={() => setActiveSessionTab('2024-25')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeSessionTab === '2024-25'
                  ? 'bg-[#201A5B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#201A5B] hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4 text-[#f48120]" />
              <span>RESULT HIGHLIGHTS 2024–25</span>
              <span className="bg-[#f48120] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">100% Pass</span>
            </button>

            <button
              onClick={() => setActiveSessionTab('2026-27')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeSessionTab === '2026-27'
                  ? 'bg-[#201A5B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#201A5B] hover:bg-slate-50'
              }`}
            >
              <span>RESULT HIGHLIGHTS 2026–27</span>
              <span className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-bold">Ongoing Session</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1 & 2: 2025-26 & 2024-25 Data Views */}
        {(activeSessionTab === '2025-26' || activeSessionTab === '2024-25') && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Stat Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {summaryStatsActive.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
                      <IconComponent className="w-4 h-4 shrink-0 text-[#f48120]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[#201A5B]">{stat.value}</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">{stat.unit}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* School Topper Carousel Banner */}
            <div className="bg-[#201A5B] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 relative overflow-hidden">

              {/* Header Bar inside Carousel */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#f48120] rounded-lg text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
                    Merit List Toppers Spotlight
                  </span>
                </div>

                {/* Slide Count & Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-300">
                    0{(currentSlide % top3ToppersActive.length) + 1} <span className="text-slate-500">/ 0{top3ToppersActive.length}</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevSlide}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10"
                      aria-label="Previous Topper"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10"
                      aria-label="Next Topper"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Slider Grid */}
              {top3ToppersActive[currentSlide % top3ToppersActive.length] && (
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Student Photo & Rank */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center">
                    <div className="relative group pb-2">
                      <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20">
                        <img 
                          src={top3ToppersActive[currentSlide % top3ToppersActive.length].photo} 
                          alt={top3ToppersActive[currentSlide % top3ToppersActive.length].name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Rank Pill Overlay */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#f48120] text-white px-5 py-2 rounded-full text-sm font-black font-sans tracking-wide shadow-xl flex items-center gap-2 whitespace-nowrap border-2 border-white z-20">
                        <Star className="w-4 h-4 fill-white text-white shrink-0" />
                        <span>CBSE RANK #{top3ToppersActive[currentSlide % top3ToppersActive.length].rank}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Detailed Topper Stats */}
                  <div className="lg:col-span-5 text-center lg:text-left space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-slate-200">
                      <GraduationCap className="w-3.5 h-3.5 text-[#f48120]" />
                      <span>{top3ToppersActive[currentSlide % top3ToppersActive.length].badge}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {top3ToppersActive[currentSlide % top3ToppersActive.length].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                        {selectedClass === '10th' ? 'Class X' : 'Class XII'} • {top3ToppersActive[currentSlide % top3ToppersActive.length].stream}
                      </p>
                    </div>

                    <div className="inline-flex items-baseline gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
                      <span className="text-3xl font-black font-mono text-[#f48120]">
                        {top3ToppersActive[currentSlide % top3ToppersActive.length].percentage}%
                      </span>
                      <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                        Aggregate CBSE Marks
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Subject Scores</span>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {top3ToppersActive[currentSlide % top3ToppersActive.length].highlights.map((hl, hlIdx) => (
                          <span key={hlIdx} className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg text-xs font-semibold text-white border border-white/10">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f48120]" />
                            <span>{hl}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Quick Switcher List */}
                  <div className="lg:col-span-3 space-y-2.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block text-center lg:text-left">
                      {selectedClass === '10th' ? 'Top 3 Class X Rankers' : 'Top 3 Stream Rankers'}
                    </span>

                    <div className="space-y-2">
                      {top3ToppersActive.map((student, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-full p-3 rounded-2xl border transition-all text-left flex items-center gap-3 cursor-pointer ${
                            (currentSlide % top3ToppersActive.length) === idx
                              ? 'bg-white/15 border-[#f48120] shadow-sm ring-1 ring-[#f48120]/50'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                        <div className="relative shrink-0">
                          <img 
                            src={student.photo} 
                            alt={student.name}
                            className="w-10 h-10 rounded-xl object-cover border border-white/20"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-slate-300 font-bold uppercase">{student.streamCode} Stream</div>
                          <div className="text-xs font-bold text-white truncate">{student.name}</div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-mono font-black text-[#f48120]">{student.percentage}%</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}

            </div>

            {/* Sub-view Navigation Toggles */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200 w-full sm:w-auto">
                <button
                  onClick={() => setSubView('overall')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    subView === 'overall'
                      ? 'bg-[#201A5B] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Toppers (90% & Above)
                </button>
                <button
                  onClick={() => setSubView('subjects')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    subView === 'subjects'
                      ? 'bg-[#201A5B] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Subject-Wise Highest Marks
                </button>
              </div>

              {subView === 'overall' && (
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  {/* Stream Filter Pills (Class 12th only) */}
                  {selectedClass !== '10th' && (
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                      {['ALL', 'HUM', 'COM', 'PCM', 'PCB'].map(st => (
                        <button
                          key={st}
                          onClick={() => setStreamFilter(st)}
                          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer text-xs ${
                            streamFilter === st
                              ? 'bg-[#201A5B] text-white font-bold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Search box */}
                  <div className="relative flex-1 sm:w-48">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search student..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#201A5B]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sub View 1: 90% and Above Toppers Table */}
            {subView === 'overall' && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#f48120]" />
                    <h3 className="font-extrabold text-slate-900 text-sm">
                      Students Scoring 90% and Above ({filteredToppers.length} Students)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    Academic Session {activeSessionTab}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[550px]">
                    <thead>
                      <tr className="bg-slate-100/60 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                        <th className="py-3 px-4 w-16">Rank</th>
                        <th className="py-3 px-4">Student Name</th>
                        <th className="py-3 px-4">Stream</th>
                        <th className="py-3 px-4 text-right">Aggregate %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {filteredToppers.map((student) => (
                        <tr key={student.sNo} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-slate-500">
                            {student.sNo === 1 ? (
                              <span className="w-6 h-6 rounded-full bg-[#f48120] text-white inline-flex items-center justify-center text-xs font-black shadow-2xs">1</span>
                            ) : student.sNo === 2 ? (
                              <span className="w-6 h-6 rounded-full bg-[#201A5B] text-white inline-flex items-center justify-center text-xs font-black">2</span>
                            ) : student.sNo === 3 ? (
                              <span className="w-6 h-6 rounded-full bg-[#201A5B]/80 text-white inline-flex items-center justify-center text-xs font-black">3</span>
                            ) : (
                              `#${student.sNo}`
                            )}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {student.name}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-0.5 rounded-md text-xs font-extrabold border ${getStreamBadgeColor(student.stream)}`}>
                              {student.stream}
                            </span>
                            <span className="text-[11px] text-slate-400 font-normal ml-2 hidden md:inline">
                              {getStreamFullName(student.stream)}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-black text-[#201A5B] text-base">
                            {student.percentage.toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredToppers.length === 0 && (
                  <div className="py-8 text-center text-slate-500 text-xs">
                    No students match the selected filter criteria.
                  </div>
                )}
              </div>
            )}

            {/* Sub View 2: Subject Wise Toppers Grid */}
            {subView === 'subjects' && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-xs text-[#201A5B] flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold">
                    <BookOpen className="w-4 h-4 text-[#f48120]" />
                    <span>Subject Wise Highest Score Breakdown (Academic Session {activeSessionTab})</span>
                  </div>
                  <span className="font-semibold text-slate-500 text-[11px]">{subjectToppersActive.length} Academic Disciplines</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subjectToppersActive.map((st, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">{st.subject}</h4>
                          <span className="text-xs font-mono font-black text-white bg-[#201A5B] px-2.5 py-0.5 rounded-md shadow-2xs">
                            {st.toppers[0].marks} / 100
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          {st.toppers.map((t, tIdx) => (
                            <div key={tIdx} className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-slate-50">
                              <span className="font-bold text-slate-800">{t.name}</span>
                              <span className="font-mono font-extrabold text-[#f48120]">{t.marks} Marks</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 text-[10px] text-slate-400 font-medium text-right">
                        {st.toppers.length} Top Scorer{st.toppers.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* Tab Content 3: 2026-27 (Ongoing Session Notice) */}
        {activeSessionTab === '2026-27' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 max-w-2xl mx-auto shadow-xs animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 text-[#201A5B] flex items-center justify-center mx-auto border border-slate-200">
              <Award className="w-8 h-8 text-[#f48120]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Academic Session 2026–27 Class XII Progress</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Academic Session 2026–27 is currently in progress. Students are undergoing continuous assessment through Periodic Tests, Practicals, and Pre-Board preparatory examinations aligned with the CBSE curriculum.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#201A5B] bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                <Users className="w-3.5 h-3.5 text-[#f48120]" />
                <span>Track Term Progress via Parent Portal</span>
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
