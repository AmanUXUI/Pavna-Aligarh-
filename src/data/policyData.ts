import { StageInfo, GradeScaleItem, FAQItem, DownloadItem } from '../types';

export const SCHOOL_NAME = "Pavna School";
export const TAGLINE = "Empowering Minds, Shaping Futures";

export const STAGES_DATA: StageInfo[] = [
  {
    id: "foundational",
    stageName: "Foundational Stage",
    grades: "Nursery to Grade 2",
    ageGroup: "Ages 3 - 8 Years",
    focus: "Play-based, Activity-oriented & Experiential Growth",
    iconName: "Sparkles",
    description: "At the Foundational Stage, assessment is entirely continuous, stress-free, and non-judgmental. We focus on early literacy, numeracy, motor skills, social-emotional maturity, and sensory integration without formal written examinations.",
    keyFeatures: [
      "No formal pass/fail written examinations",
      "Qualitative observation-based 360-degree developmental rubrics",
      "Term-wise Progress Portfolios showcasing child's creative work",
      "Regular Parent-Teacher interaction for developmental feedback"
    ],
    assessmentBreakdown: [
      { category: "Literacy & Language Skills", weightage: 30, details: "Phonics, oral expression, listening comprehension, story retelling" },
      { category: "Cognitive & Numeracy Skills", weightage: 30, details: "Pattern recognition, counting, spatial awareness, logic puzzles" },
      { category: "Physical & Motor Development", weightage: 20, details: "Fine motor control, gross motor agility, eye-hand coordination" },
      { category: "Socio-Emotional & Creative Arts", weightage: 20, details: "Sharing, empathy, music, visual arts, active play participation" }
    ],
    reportingFrequency: "Bi-Annual Developmental Summary + Monthly Learning Checklists"
  },
  {
    id: "preparatory",
    stageName: "Preparatory Stage",
    grades: "Grades 3 to 5",
    ageGroup: "Ages 8 - 11 Years",
    focus: "Concept Discovery, Reading Mastery & Interactive Projects",
    iconName: "BookOpen",
    description: "Transitioning from purely informal observation to structured formative assessments. Evaluation combines classroom activities, short periodic checks, inquiry projects, and oral reading assessments.",
    keyFeatures: [
      "Gradual introduction to structured periodic assessments",
      "Equal emphasis on Formative (40%) and Summative (60%) evaluations",
      "Subject enrichment activities including STEM lab experiments and public speaking",
      "Focus on conceptual understanding rather than rote memorization"
    ],
    assessmentBreakdown: [
      { category: "Periodic Assessments (4 per year)", weightage: 20, details: "Short objective & conceptual diagnostic checkups" },
      { category: "Subject Enrichment & Projects", weightage: 20, details: "Science experiments, math lab tasks, language recitations" },
      { category: "Classroom Portfolio & Worksheets", weightage: 10, details: "Notebook maintenance, regular assignments, peer reviews" },
      { category: "Term-End Written Evaluations", weightage: 50, details: "Structured written papers evaluating core application skills" }
    ],
    reportingFrequency: "Trimester Progress Reports (Term 1, Term 2, Term 3)"
  },
  {
    id: "middle",
    stageName: "Middle Stage",
    grades: "Grades 6 to 8",
    ageGroup: "Ages 11 - 14 Years",
    focus: "Critical Thinking, Analytical Skill & Subject Specialization",
    iconName: "Brain",
    description: "Aligned with CBSE Uniform System of Assessment. Prepares students for academic rigor through periodic tests, subject enrichment, notebook evaluation, and comprehensive term-end exams.",
    keyFeatures: [
      "Two Semester Structure: Term 1 (April to Sept) & Term 2 (Oct to March)",
      "Periodic Written Tests (10%), Notebook (5%), Subject Enrichment (5%)",
      "Co-scholastic grading on 3-point scale (A to C) for discipline & life skills",
      "Competency-based questions accounting for 30% of total exam marks"
    ],
    assessmentBreakdown: [
      { category: "Periodic Written Tests (PT)", weightage: 10, details: "Best 2 out of 3 periodic tests conducted across the academic term" },
      { category: "Notebook Submission & Discipline", weightage: 5, details: "Regularity, task completion, neatness, and self-organization" },
      { category: "Subject Enrichment Activities", weightage: 5, details: "Lab practicals, map work, listening/speaking skills (ASL), project work" },
      { category: "Half-Yearly / Annual Written Exam", weightage: 80, details: "Comprehensive paper covering term syllabus with competency focus" }
    ],
    reportingFrequency: "Semi-Annual Detailed Report Cards (Half-Yearly & Annual)"
  },
  {
    id: "secondary",
    stageName: "Secondary & Sr. Secondary Stage",
    grades: "Grades 9 to 12",
    ageGroup: "Ages 14 - 18 Years",
    focus: "Board Examination Readiness, Practical Mastery & Career Aptitude",
    iconName: "GraduationCap",
    description: "Strictly adheres to Central Board of Secondary Education (CBSE) guidelines. Combines continuous internal assessment with board-pattern pre-examinations and laboratory practicals.",
    keyFeatures: [
      "Internal Assessment (20 Marks) + Board Written Examination (80 Marks)",
      "Mandatory Practical Examinations / Project Portfolios for Sr. Secondary Science, Commerce & Humanities",
      "CBSE Competency-Based Assessment framework with 50%+ application-oriented questions",
      "Regular Pre-Board examinations and personalized academic intervention"
    ],
    assessmentBreakdown: [
      { category: "Periodic Test (PT)", weightage: 5, details: "Pen-paper tests conducted regularly throughout the term" },
      { category: "Multiple Assessment (MA)", weightage: 5, details: "Quizzes, oral tests, concept maps, exit cards, group debates" },
      { category: "Portfolio & Student Journal", weightage: 5, details: "Classwork, exemplary achievements, self-assessments, peer feedback" },
      { category: "Subject Enrichment / Practical", weightage: 5, details: "Lab experiments, practical files, viva-voce, project work" },
      { category: "Board Pattern Annual Exam", weightage: 80, details: "CBSE board pattern written examination covering entire syllabus" }
    ],
    reportingFrequency: "Quarterly Performance Audits + Pre-Board Diagnostic Reports"
  }
];

export const SCHOLASTIC_GRADING_SCALE: GradeScaleItem[] = [
  { grade: "A1", marksRange: "91% - 100%", gradePoint: 10, description: "Top Tier Mastery — Outstanding conceptual comprehension and analytical application.", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  { grade: "A2", marksRange: "81% - 90%", gradePoint: 9, description: "Excellent Performance — Clear conceptual clarity with minimal minor errors.", badgeColor: "bg-teal-100 text-teal-800 border-teal-300" },
  { grade: "B1", marksRange: "71% - 80%", gradePoint: 8, description: "Very Good — Consistently meets high standards with good problem-solving ability.", badgeColor: "bg-blue-100 text-blue-800 border-blue-300" },
  { grade: "B2", marksRange: "61% - 70%", gradePoint: 7, description: "Good — Sound grasp of fundamental concepts and regular assignment submission.", badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300" },
  { grade: "C1", marksRange: "51% - 60%", gradePoint: 6, description: "Fair — Moderate understanding; requires targeted practice in application.", badgeColor: "bg-purple-100 text-purple-800 border-purple-300" },
  { grade: "C2", marksRange: "41% - 50%", gradePoint: 5, description: "Average — Basic understanding of core topics; needs structured support.", badgeColor: "bg-amber-100 text-amber-800 border-amber-300" },
  { grade: "D", marksRange: "33% - 40%", gradePoint: 4, description: "Below Average — Meets minimum passing threshold; remedial classes recommended.", badgeColor: "bg-orange-100 text-orange-800 border-orange-300" },
  { grade: "E", marksRange: "Below 33%", gradePoint: 0, description: "Needs Improvement — Below minimum passing standards; mandatory re-assessment.", badgeColor: "bg-rose-100 text-rose-800 border-rose-300" },
];

export const CO_SCHOLASTIC_AREAS = [
  { area: "Work Education & Craft", description: "Hands-on projects, digital literacy, eco-club initiatives, and communal service." },
  { area: "Art Education", description: "Visual arts (drawing, painting, pottery) and Performing arts (music, dance, drama)." },
  { area: "Health & Physical Education", description: "Sports sportsmanship, physical fitness routines, yoga, team coordination." },
  { area: "Discipline & Value Education", description: "Punctuality, dress code adherence, school property respect, ethical conduct." }
];

export const POLICY_RULES = [
  {
    title: "Attendance Requirement",
    iconName: "CalendarCheck",
    summary: "Minimum 75% attendance mandatory for appearing in Annual/Board Examinations as per CBSE guidelines.",
    details: "Students falling between 60%-74% attendance due to illness or official sports participation must submit certified medical/sports proof to the Principal's office within 3 days for consideration."
  },
  {
    title: "Medical & Absence Policy during Exams",
    iconName: "ShieldAlert",
    summary: "Re-assessment granted only for verified medical emergencies or official school representation.",
    details: "No re-examination is conducted for routine absences. In case of verified medical emergency during Term Exams, marks will be calculated proportionately based on periodic assessments after approval."
  },
  {
    title: "Academic Integrity & Fair Play",
    iconName: "Award",
    summary: "Zero-tolerance policy towards malpractice, plagiarism, or unauthorized material during assessments.",
    details: "First violation results in cancellation of the specific paper (awarded '0'). Subsequent violations lead to formal disciplinary committee action and parent summons."
  },
  {
    title: "Parent-Teacher Dialogue & Digital Portal",
    iconName: "Users",
    summary: "Parent-Teacher Meetings (PTM) held after every major evaluation cycle.",
    details: "Detailed breakdown of marks, diagnostic feedback, and teacher notes are accessible 24/7 on the Pavna Parent App & Web Portal."
  }
];

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "doc-1",
    title: "Comprehensive Assessment Policy Handbook 2026-27",
    format: "PDF Document",
    size: "2.4 MB",
    category: "Official Policy",
    description: "Complete policy handbook detailing rules, grade descriptors, and examination codes."
  },
  {
    id: "doc-2",
    title: "CBSE Assessment Calendar & Weightage Chart",
    format: "PDF Document",
    size: "1.1 MB",
    category: "Academic Schedule",
    description: "Term 1 and Term 2 assessment timetable, syllabus distribution, and mark allocation."
  },
  {
    id: "doc-3",
    title: "Sample 360-Degree Holistic Progress Card Template",
    format: "PDF Document",
    size: "850 KB",
    category: "Report Card Template",
    description: "Sample preview of the multidimensional progress report card provided to parents."
  },
  {
    id: "doc-4",
    title: "Medical Re-Assessment Application Form",
    format: "PDF Form",
    size: "420 KB",
    category: "Forms & Requests",
    description: "Official request form for missed exam re-assessment due to verified medical leave."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is the core philosophy of Pavna School's Assessment Policy?",
    answer: "Our policy moves away from rote learning and one-time high-stakes testing towards continuous, competency-based evaluation aligned with NEP 2020 and CBSE standards. We focus on diagnosing learning gaps early and encouraging critical thinking."
  },
  {
    id: "faq-2",
    category: "Exams",
    question: "What happens if a student misses a Periodic Test due to illness?",
    answer: "If a student misses a Periodic Test due to a genuine medical illness, a medical certificate signed by a registered doctor must be submitted to the Class Teacher within 3 days. A sanctioned re-assessment or proportional average score will be computed."
  },
  {
    id: "faq-3",
    category: "Grading",
    question: "How are Co-Scholastic activities (Sports, Art, Discipline) evaluated?",
    answer: "Co-scholastic areas are assessed on a 3-point grading scale (A=Outstanding, B=Very Good, C=Fair) or 5-point scale depending on the grade level, focusing on participation, skill progression, team spirit, and personal growth."
  },
  {
    id: "faq-4",
    category: "Parents",
    question: "How can parents track real-time academic progress?",
    answer: "Parents can log in to the Pavna Parent Portal or download the Pavna School App using their registered login credentials to view assignment grades, periodic test scores, attendance records, and teacher remarks."
  },
  {
    id: "faq-5",
    category: "Exams",
    question: "Is there a provision for re-evaluation or paper re-checking?",
    answer: "Yes, parents may apply for answer script re-checking within 5 days of report card issuance by submitting a formal request on the parent portal. A dedicated examination committee will review the paper."
  }
];
