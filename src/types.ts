export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface StageInfo {
  id: string;
  stageName: string;
  grades: string;
  ageGroup: string;
  focus: string;
  iconName: string;
  description: string;
  keyFeatures: string[];
  assessmentBreakdown: {
    category: string;
    weightage: number;
    details: string;
  }[];
  reportingFrequency: string;
}

export interface GradeScaleItem {
  grade: string;
  marksRange: string;
  gradePoint: number;
  description: string;
  badgeColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  format: string;
  size: string;
  category: string;
  description: string;
}
