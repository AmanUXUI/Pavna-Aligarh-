import React, { useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface CouncilMember {
  name: string;
  post: string;
  image: string;
}

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg";

const CLASS_12_COUNCIL: CouncilMember[] = [
  { name: "Anushka Chaudhary", post: "President", image: DEFAULT_AVATAR },
  { name: "Kirti Krishna Chaturvedi", post: "Proctor", image: DEFAULT_AVATAR },
  { name: "Vishesh Vijay", post: "Head Boy", image: DEFAULT_AVATAR },
  { name: "Siddhi Agarwal", post: "Head Girl", image: DEFAULT_AVATAR },
  { name: "Dishita Varshney", post: "Treasurer", image: DEFAULT_AVATAR },
  { name: "Kavya Chaudhary", post: "Sports Captain", image: DEFAULT_AVATAR },
  { name: "Arnav Yadav", post: "Sports Captain", image: DEFAULT_AVATAR },
  { name: "Shivadri Gupta", post: "Academic Prefect", image: DEFAULT_AVATAR },
  { name: "Shaurya Varshney", post: "Academic Prefect", image: DEFAULT_AVATAR },
  { name: "Shaurya Jain", post: "Cultural Prefect", image: DEFAULT_AVATAR },
  { name: "Avdhi Jain", post: "Cultural Prefect", image: DEFAULT_AVATAR },
  { name: "Ayushmaan Pratap Singh", post: "Media Head", image: DEFAULT_AVATAR },
  { name: "Angel Chaudhary", post: "Media Head", image: DEFAULT_AVATAR },
  { name: "Bhavya", post: "Environment Prefect", image: DEFAULT_AVATAR },
  { name: "Shreya Attri", post: "Social Service Prefect", image: DEFAULT_AVATAR },
  { name: "Gauransh Tawri", post: "Social Service Prefect", image: DEFAULT_AVATAR },
  { name: "Rishit Agarwal", post: "Editor", image: DEFAULT_AVATAR },
  { name: "Jhanvi Singh Tomar", post: "Editor", image: DEFAULT_AVATAR },
  { name: "Utkarsh Tomar", post: "House Captain Earth", image: DEFAULT_AVATAR },
  { name: "Shyla Sharma", post: "House Captain Earth", image: DEFAULT_AVATAR },
  { name: "Krishna Brijwasi", post: "House Captain Water", image: DEFAULT_AVATAR },
  { name: "Neeti Agarwal", post: "House Captain Water", image: DEFAULT_AVATAR },
  { name: "Puneet Kumar", post: "House Captain Air", image: DEFAULT_AVATAR },
  { name: "Tanisha Thakur", post: "House Captain Air", image: DEFAULT_AVATAR },
  { name: "Sumit Kumar", post: "House Captain Fire", image: DEFAULT_AVATAR },
  { name: "Priyanjali Sharma", post: "House Captain Fire", image: DEFAULT_AVATAR },
  { name: "Hariom Pandey", post: "Discipline Prefect", image: DEFAULT_AVATAR },
  { name: "Sajal Agarwal", post: "Discipline Prefect", image: DEFAULT_AVATAR }
];

const CLASS_11_COUNCIL: CouncilMember[] = [
  { name: "Gurdeep Singh", post: "Deputy Head Boy", image: DEFAULT_AVATAR },
  { name: "Prashansa Gupta", post: "Deputy Head Girl", image: DEFAULT_AVATAR },
  { name: "Navya Agarwal", post: "Joint Treasurer", image: DEFAULT_AVATAR },
  { name: "Riddhima Singh", post: "Vice Sports Captain", image: DEFAULT_AVATAR },
  { name: "Yuvraj Singh", post: "Vice Sports Captain", image: DEFAULT_AVATAR },
  { name: "Ajita Shekhar", post: "Deputy Academic Prefect", image: DEFAULT_AVATAR },
  { name: "Geya Gaur", post: "Deputy Academic Prefect", image: DEFAULT_AVATAR },
  { name: "Parin Agarwal", post: "Deputy Cultural Prefect", image: DEFAULT_AVATAR },
  { name: "Kirti Singh", post: "Deputy Cultural Prefect", image: DEFAULT_AVATAR },
  { name: "Anvy Gupta", post: "Deputy Media Head", image: DEFAULT_AVATAR },
  { name: "Saksham Jain", post: "Deputy Media Head", image: DEFAULT_AVATAR },
  { name: "Arpita Gupta", post: "Deputy Environment Prefect", image: DEFAULT_AVATAR },
  { name: "Riddhika Garg", post: "Deputy Social Service Prefect", image: DEFAULT_AVATAR },
  { name: "Prasiddhi Agrawal", post: "Deputy Social Service Prefect", image: DEFAULT_AVATAR },
  { name: "Agrima Saraswat", post: "Deputy Editor", image: DEFAULT_AVATAR },
  { name: "Kanika Gupta", post: "Deputy Editor", image: DEFAULT_AVATAR },
  { name: "Kinjal Jain", post: "Vice House Captain Earth", image: DEFAULT_AVATAR },
  { name: "Karan Yadav", post: "Vice House Captain Earth", image: DEFAULT_AVATAR },
  { name: "Soham Upadhayay", post: "Vice House Captain Water", image: DEFAULT_AVATAR },
  { name: "Agamya Bansal", post: "Vice House Captain Water", image: DEFAULT_AVATAR },
  { name: "Mahima Singh", post: "Vice House Captain Air", image: DEFAULT_AVATAR },
  { name: "Parth Yadav", post: "Vice House Captain Air", image: DEFAULT_AVATAR },
  { name: "Gouri Yadav", post: "Vice House Captain Fire", image: DEFAULT_AVATAR },
  { name: "Divyansh", post: "Vice House Captain Fire", image: DEFAULT_AVATAR },
  { name: "Namya Agarwal", post: "Discipline Prefect", image: DEFAULT_AVATAR },
  { name: "Gati Maheshwari", post: "Discipline Prefect", image: DEFAULT_AVATAR }
];

interface StudentCouncilProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const StudentCouncil: React.FC<StudentCouncilProps> = () => {
  const [selectedTab, setSelectedTab] = useState<'XII' | 'XI'>('XII');

  const currentMembers = selectedTab === 'XII' ? CLASS_12_COUNCIL : CLASS_11_COUNCIL;

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content above Tabs */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#f48120] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/80 inline-block mb-3">
            STUDENTS’ COUNCIL 2026-2027
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#201A5B] tracking-tight">
            {selectedTab === 'XII' ? 'Class XII Student Council' : 'Class XI Student Council'}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Celebrating our student leaders, fostering civic responsibility, and driving vibrant community initiatives at Pavna International School.
          </p>
        </div>

        {/* Tab Switcher: CLASS XII | CLASS XI */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#e9edf5] rounded-2xl border border-slate-300/80 shadow-inner">
            <button
              type="button"
              onClick={() => setSelectedTab('XII')}
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                selectedTab === 'XII'
                  ? 'bg-white text-[#201A5B] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${selectedTab === 'XII' ? 'text-[#f48120]' : 'text-slate-400'}`} />
              <span>CLASS XII</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('XI')}
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                selectedTab === 'XI'
                  ? 'bg-white text-[#201A5B] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className={`w-4 h-4 ${selectedTab === 'XI' ? 'text-[#f48120]' : 'text-slate-400'}`} />
              <span>CLASS XI</span>
            </button>
          </div>
        </div>

        {/* Student Profile Cards Grid - Minimal & Left Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentMembers.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden flex flex-col hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              {/* Student Image */}
              <div className="aspect-square w-full bg-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Student Details - Left-Aligned with Natural Title Casing */}
              <div className="p-4 flex flex-col justify-start text-left bg-white">
                <h3 className="text-base font-bold text-[#201A5B] leading-snug">
                  {student.name}
                </h3>
                <p className="text-xs font-semibold text-[#f48120] mt-1">
                  {student.post}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
