import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Search, 
  BookOpen, 
  Users, 
  Award, 
  Sparkles, 
  GraduationCap, 
  UserCheck, 
  ChevronRight,
  Filter,
  SlidersHorizontal,
  FolderOpen
} from 'lucide-react';

interface FacultyMember {
  name: string;
  isHOD?: boolean;
  designation?: string;
  image?: string;
}

interface Department {
  id: string;
  name: string;
  iconName?: string;
  description?: string;
  members: FacultyMember[];
}

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg";

export const FacultyPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // First accordion item expanded by default ('english'), all others collapsed initially
  const [openDeptIds, setOpenDeptIds] = useState<Record<string, boolean>>({
    'english': true
  });

  const principal = {
    name: "Mrs. Arti Jha",
    title: "Principal",
    qualification: "M.A., B.Ed., Educational Leadership Specialist",
    experience: "25+ Years in Academic Administration",
    message: "I am privileged to lead Pavna School, Aligarh (formerly DPS Aligarh). Built on a rich tradition of academic excellence, we continuously embrace modern, conceptual learning to empower every student.",
    image: "https://imgh.in/host/pogh06"
  };

  const departmentsData: Department[] = [
    {
      id: "english",
      name: "English",
      description: "Fostering linguistic fluency, literary critique, and expressive communication.",
      members: [
        { name: "Ms. Arushi Jain", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/363fcm" },
        { name: "Ms. Smita Ghosh", designation: "PGT English", image: "https://imgh.in/host/ap58gt" },
        { name: "Ms. Savitri Singh", designation: "TGT English", image: "https://imgh.in/host/rtjfp7" },
        { name: "Ms. Jyoti Sharma", designation: "TGT English", image: "https://imgh.in/host/x15oaw" }
      ]
    },
    {
      id: "hindi",
      name: "Hindi & TL",
      description: "Promoting cultural literature, language proficiency, and third-language learning.",
      members: [
        { name: "Brajesh Kumar", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/r90hi3" },
        { name: "Sateesh Jain", designation: "PGT Hindi", image: "https://imgh.in/host/l07j8y" },
        { name: "Perwez Alam", designation: "TGT Language Specialist", image: "https://imgh.in/host/wx1x1k" },
        { name: "Mohd Uzair", designation: "TGT Language Specialist", image: "https://imgh.in/host/cvm3n6" },
        { name: "Isra Tariq", designation: "TGT Language Specialist", image: "https://imgh.in/host/8xoy6q" }
      ]
    },
    {
      id: "mathematics",
      name: "Mathematics",
      description: "Building strong analytical reasoning, problem-solving skills, and numerical logic.",
      members: [
        { name: "Binod Kumar Sharma", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/q7usfc" },
        { name: "Seema Maheshwari", designation: "PGT Mathematics", image: "https://imgh.in/host/zint35" },
        { name: "Priti Shah", designation: "TGT Mathematics", image: "https://imgh.in/host/cn0n05" },
        { name: "Tanvi Joshi", designation: "TGT Mathematics", image: "https://imgh.in/host/cvdi8w" }
      ]
    },
    {
      id: "commerce",
      name: "Commerce",
      description: "Nurturing future business leaders, financial strategists, and economic thinkers.",
      members: [
        { name: "Intisar Ahmad", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/tgymf8" },
        { name: "Syed Mubashir Ali", designation: "PGT Accountancy & Business Studies", image: "https://imgh.in/host/6yz8h1" },
        { name: "Rajesh", designation: "PGT Economics", image: "https://imgh.in/host/lqpjra" }
      ]
    },
    {
      id: "chemistry",
      name: "Chemistry",
      description: "Exploring molecular science, chemical reactions, and practical laboratory inquiry.",
      members: [
        { name: "Meha Mishra", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/vzrqfr" },
        { name: "Anuj Vashistha", designation: "PGT Chemistry" },
        { name: "Ms. Deeksha Mishra", designation: "TGT Chemistry" }
      ]
    },
    {
      id: "computer",
      name: "Computer",
      description: "Empowering technological literacy, computational thinking, and software skills.",
      members: [
        { name: "Harshvardhan Thakur", designation: "PGT Computer Science", image: "https://imgh.in/host/briu5x" },
        { name: "Rajeev Kushwaha", designation: "TGT Information Technology", image: "https://imgh.in/host/1zk2ja" },
        { name: "Sneh Lata", designation: "PRT Computer Science", image: "https://imgh.in/host/75n3yr" }
      ]
    },
    {
      id: "biology",
      name: "Biology",
      description: "Unraveling life sciences, ecology, human anatomy, and environmental care.",
      members: [
        { name: "Bhanu Pratap Singh", isHOD: true, designation: "Head of Department (HOD)" }
      ]
    },
    {
      id: "physics",
      name: "Physics",
      description: "Investigating natural phenomena, mechanics, optics, and experimental principles.",
      members: [
        { name: "Alok Chaturvedi", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/b80wvm" },
        { name: "Sumedha Pathak", designation: "PGT Physics", image: "https://imgh.in/host/261k27" }
      ]
    },
    {
      id: "dance-music-arts",
      name: "Dance, Music & Arts",
      description: "Cultivating aesthetic expression, musical harmony, performing arts, and creativity.",
      members: [
        { name: "Deepa Khare", isHOD: true, designation: "Head of Department (HOD)" },
        { name: "Amit Upadhyay", designation: "Music Instructor", image: "https://imgh.in/host/xr4d7f" },
        { name: "Suman Singh", designation: "Dance Instructor" },
        { name: "Sukanth Kumar", designation: "Fine Arts Instructor", image: "https://imgh.in/host/wavuqn" },
        { name: "Pratap Biswal", designation: "Performing Arts Teacher", image: "https://imgh.in/host/rz1wgg" },
        { name: "R. K. Saxena (R)", designation: "Senior Arts Educator" },
        { name: "Ms. Komal Verma", designation: "Arts & Crafts Educator", image: "https://imgh.in/host/p16a4j" }
      ]
    },
    {
      id: "sports-phe",
      name: "Sports / PHE",
      description: "Instilling physical fitness, athletic skill, teamwork, and healthy lifestyle habits.",
      members: [
        { name: "Arindam K. Chakraborty", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/ukdmgh" },
        { name: "Samvedna", designation: "Sports & Fitness Instructor", image: "https://imgh.in/host/8ai9vt" },
        { name: "Sarvjeet Singh", designation: "Physical Education Educator", image: "https://imgh.in/host/ljpk0b" },
        { name: "Mohini Gautam", designation: "Sports Instructor" },
        { name: "Mohd. Faizan", designation: "Sports Instructor" }
      ]
    },
    {
      id: "mother-teacher",
      name: "Mother Teacher",
      description: "Providing gentle guidance, foundational care, and holistic early childhood education.",
      members: [
        { name: "Akanksha Jain", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/vqlkl3" },
        { name: "Neeru Gupta", designation: "Primary Educator", image: "https://imgh.in/host/1cmsrn" },
        { name: "Kriti Dwivedi", designation: "Primary Educator", image: "https://imgh.in/host/asw0c8" },
        { name: "Shalini Singh", designation: "Primary Educator", image: "https://imgh.in/host/0lndvw" },
        { name: "Himanshi Sharma", designation: "Primary Educator", image: "https://imgh.in/host/ls1r2x" },
        { name: "Priyanshi Mahawar", designation: "Primary Educator", image: "https://imgh.in/host/5np6sa" },
        { name: "Nisha Sharma", designation: "Primary Educator", image: "https://imgh.in/host/q9ft6q" },
        { name: "Vandana Vermani", designation: "Primary Educator", image: "https://imgh.in/host/agc68r" },
        { name: "Ms. Pallavi Mudgal", designation: "Primary Educator", image: "https://imgh.in/host/xh2syc" },
        { name: "Ms. Radhika Uppal", designation: "Primary Educator", image: "https://imgh.in/host/es9nhy" },
        { name: "Ms. Yagya Vashishtha", designation: "Primary Educator", image: "https://imgh.in/host/6pzdb2" }
      ]
    },
    {
      id: "history-sst",
      name: "History / SST",
      description: "Exploring heritage, civics, global history, geography, and social awareness.",
      members: [
        { name: "Navin Chandra Jha", isHOD: true, designation: "Head of Department (HOD)", image: "https://imgh.in/host/m0tlg4" },
        { name: "Mr. Shiv Kumar", designation: "TGT Social Studies" },
        { name: "Nabila Khan", designation: "TGT History", image: "https://imgh.in/host/m4k5t8" },
        { name: "Nirbhay Jha", designation: "TGT Geography & Civics", image: "https://imgh.in/host/cegvdc" }
      ]
    },
    {
      id: "counselor",
      name: "Counselor",
      description: "Offering student mental wellness, career guidance, emotional support, and guidance.",
      members: [
        { name: "Azra Tabassum", isHOD: true, designation: "Head of Department (HOD) - Student Counselor", image: "https://imgh.in/host/siudo8" }
      ]
    }
  ];

  // Total count calculation
  const totalFacultyCount = useMemo(() => {
    return departmentsData.reduce((sum, d) => sum + d.members.length, 1); // +1 for Principal
  }, []);

  const totalHODs = useMemo(() => {
    return departmentsData.filter(d => d.members.some(m => m.isHOD)).length;
  }, []);

  // Filtered logic for search
  const filteredDepartments = useMemo(() => {
    if (!searchQuery.trim()) return departmentsData;

    const q = searchQuery.toLowerCase().trim();
    return departmentsData.map(dept => {
      const deptMatches = dept.name.toLowerCase().includes(q);
      const filteredMembers = dept.members.filter(m => 
        m.name.toLowerCase().includes(q) || 
        (m.designation && m.designation.toLowerCase().includes(q))
      );

      if (deptMatches || filteredMembers.length > 0) {
        return {
          ...dept,
          members: deptMatches ? dept.members : filteredMembers
        };
      }
      return null;
    }).filter(Boolean) as Department[];
  }, [searchQuery]);

  const toggleDept = (id: string) => {
    setOpenDeptIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpened: Record<string, boolean> = {};
    departmentsData.forEach(d => { allOpened[d.id] = true; });
    setOpenDeptIds(allOpened);
  };

  const collapseAll = () => {
    setOpenDeptIds({});
  };

  const isSearchActive = searchQuery.trim().length > 0;

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Top Hero Banner matching site style */}
      <div className="relative overflow-hidden h-[450px] sm:h-[520px] md:h-[600px] flex items-center bg-[#201A5B] shadow-md mb-8 lg:mb-12">
        {/* Background Image */}
        <img 
          src="https://imgh.in/host/gcvrmj"
          alt="Faculty Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Text Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-2xl">
            <h1 
              className="text-white capitalize"
              style={{
                fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif',
                fontSize: '44px',
                fontWeight: 600,
                lineHeight: '55px',
                textTransform: 'capitalize',
                wordSpacing: '0px'
              }}
            >
              Faculty Directory
            </h1>
            <p 
              className="mt-3 sm:mt-4 text-white font-medium"
              style={{
                fontSize: '18px',
                lineHeight: '27px'
              }}
            >
              Meet our team of dedicated educators, subject specialists, and mentors who inspire intellectual curiosity, academic rigor, and character building across all disciplines.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Section Intro Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#201A5B] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/60 mb-4 shadow-2xs">
            <GraduationCap className="w-4 h-4 text-[#201A5B]" />
            <span>Academic Leadership & Teaching Staff</span>
          </div>
          <h2 
            className="font-bold text-[#201A5B] tracking-tight"
            style={{
              fontSize: '36px',
              lineHeight: '46px'
            }}
          >
            Our Esteemed Educator Community
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Organized by department, our faculty brings deep subject expertise and a compassionate approach to student growth and success.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#201A5B]">{totalFacultyCount}+</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5 block">Faculty Members</span>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#201A5B]">{departmentsData.length}</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5 block">Departments</span>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#201A5B]">{totalHODs}</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5 block">Department HODs</span>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs text-center">
              <span className="block text-2xl sm:text-3xl font-black text-[#201A5B]">100%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5 block">Qualified Staff</span>
            </div>
          </div>
        </div>

        {/* Principal Spotlight Section */}
        <div className="mb-12 bg-linear-to-br from-[#201A5B] via-[#2a2278] to-[#171246] rounded-3xl text-white p-6 sm:p-8 md:p-10 shadow-xl border border-indigo-900/40 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Principal Image Box */}
            <div className="shrink-0 text-center">
              <div className="relative inline-block">
                <div className="w-52 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                  <img 
                    src={principal.image} 
                    alt={principal.name} 
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#201A5B] text-white px-3 py-1.5 rounded-xl shadow-lg border-2 border-white flex items-center gap-1.5 text-xs font-bold">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>Principal</span>
                </div>
              </div>
            </div>

            {/* Principal Info & Quote */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>School Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {principal.name}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-blue-300">
                {principal.title}
              </p>

              <blockquote className="italic text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-blue-400 pl-4 my-3 text-left">
                "{principal.message}"
              </blockquote>


            </div>
          </div>
        </div>

        {/* Search and Accordion Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search faculty name or designation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#201A5B]/30 focus:border-[#201A5B] transition-all text-slate-800 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              {filteredDepartments.length} Departments Found
            </span>
            <button
              onClick={expandAll}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Department Accordion List */}
        <div className="space-y-4">
          {filteredDepartments.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-6">
              <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No Faculty Found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                We couldn't find any faculty members matching "{searchQuery}". Try searching with a different name or keyword.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-[#201A5B] text-white text-xs font-bold rounded-xl hover:bg-[#181347] transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredDepartments.map((dept) => {
              const isOpen = isSearchActive || openDeptIds[dept.id];
              const hodMember = dept.members.find(m => m.isHOD);

              return (
                <div 
                  key={dept.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
                >
                  {/* Accordion Header Bar */}
                  <button
                    type="button"
                    onClick={() => toggleDept(dept.id)}
                    className={`w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none ${
                      isOpen ? 'bg-blue-50/50' : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className={`p-2.5 rounded-xl shrink-0 ${
                        isOpen ? 'bg-[#201A5B] text-white' : 'bg-slate-100 text-[#201A5B]'
                      }`}>
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-[#201A5B]">
                            {dept.name} Department
                          </h3>
                          <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200">
                            {dept.members.length} {dept.members.length === 1 ? 'Member' : 'Members'}
                          </span>
                          {hodMember && (
                            <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full border border-blue-200 hidden sm:inline-block">
                              HOD: {hodMember.name}
                            </span>
                          )}
                        </div>
                        {dept.description && (
                          <p className="text-xs text-slate-500 mt-0.5 truncate hidden md:block">
                            {dept.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#201A5B]' : ''
                      }`} />
                    </div>
                  </button>

                  {/* Accordion Body Content with Smooth Height Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`content-${dept.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden bg-slate-50/50 border-t border-slate-200/80"
                      >
                        <div className="p-5 sm:p-6">
                          {/* Grid of Faculty Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                            {dept.members.map((member, idx) => (
                              <div 
                                key={idx}
                                className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl flex flex-col overflow-hidden relative group ${
                                  member.isHOD 
                                    ? 'border-blue-300 ring-2 ring-[#201A5B]/20 shadow-sm' 
                                    : 'border-slate-200/90 shadow-2xs hover:border-blue-300'
                                }`}
                              >
                                {/* Faculty Image Frame */}
                                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                                  <img 
                                    src={member.image || DEFAULT_AVATAR} 
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                                  {/* HOD Badge */}
                                  {member.isHOD && (
                                    <div className="absolute top-3 right-3 bg-[#201A5B] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md border border-white/20 backdrop-blur-xs flex items-center gap-1">
                                      <Award className="w-3.5 h-3.5 text-amber-300" />
                                      <span>HOD</span>
                                    </div>
                                  )}
                                </div>

                                {/* Card Details */}
                                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                                  <div>
                                    <h4 className="text-base font-extrabold text-[#201A5B] leading-snug group-hover:text-blue-700 transition-colors">
                                      {member.name}
                                    </h4>

                                    <div className="mt-2">
                                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md inline-block ${
                                        member.isHOD 
                                          ? 'bg-blue-100 text-[#201A5B] font-bold' 
                                          : 'bg-slate-100 text-slate-600'
                                      }`}>
                                        {member.designation || (member.isHOD ? "Head of Department" : "Faculty Member")}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Footer department tag */}
                                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                                    <span className="flex items-center gap-1 text-slate-500">
                                      <UserCheck className="w-3.5 h-3.5 text-[#201A5B]" />
                                      <span>Faculty</span>
                                    </span>
                                    <span className="bg-slate-50 text-slate-500 px-2.5 py-0.5 rounded border border-slate-200/60 font-semibold">
                                      {dept.name}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>



      </div>
    </div>
  );
};
