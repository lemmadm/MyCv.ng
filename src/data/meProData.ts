import React from 'react';
import { Briefcase, Share2, UserPlus, GraduationCap, Star, Phone } from 'lucide-react';

export const profileData = {
  name: 'Adebayo Okafor',
  title: 'Senior Business Development Manager',
  summary: 'Driving business growth and strategic partnerships across West Africa. 8+ years experience in corporate development and client relationship management.',
  initials: 'AO',
};

export const contactData = {
  phone: '+2347083682007',
  whatsapp: '+2347083682007',
  email: 'info@mycv.i.ng',
  website: 'mycv.i.ng',
  location: 'Ilorin, Nigeria',
};

export const socialLinks = {
  linkedin: 'https://linkedin.com/company/lemmaiot',
  twitter: 'https://twitter.com/adebayookafor',
  instagram: 'https://instagram.com/lemmaiot/feed',
  facebook: 'https://facebook.com/Lemmaiot',
};

export const skillsData = {
  skills: [
    { name: 'Business Development', percentage: 95, color: '#4A90E2' },
    { name: 'Strategic Planning', percentage: 90, color: '#FF968D' },
    { name: 'Client Relations', percentage: 92, color: '#4A90E2' },
    { name: 'Financial Analysis', percentage: 88, color: '#FF968D' },
  ],
  coreCompetencies: [
    { name: 'Salesforce CRM', color: '#4A90E2' },
    { name: 'Market Analysis', color: '#FF968D' },
    { name: 'Negotiation', color: '#4A90E2' },
    { name: 'Project Management', color: '#FF968D' },
    { name: 'Team Leadership', color: '#4A90E2' },
    { name: 'Financial Planning', color: '#FF968D' },
    { name: 'Partnership Development', color: '#4A90E2' },
    { name: 'Risk Management', color: '#FF968D' },
  ],
};

export const experienceData = [
  {
    title: 'Senior Business Development Manager',
    company: 'Sterling Bank Plc',
    years: '2020 - Present',
    description: 'Leading strategic partnerships across West Africa, managing a portfolio worth ₦2.5B, and driving 35% revenue growth through innovative business solutions and client relationship management.',
    highlights: [
      'Managed key client accounts worth over ₦2.5B',
      'Achieved 135% of annual revenue targets',
      'Led cross-functional teams of 15+ professionals',
    ],
    color: '#4A90E2',
  },
  {
    title: 'Business Development Associate',
    company: 'Access Bank Plc',
    years: '2018 - 2020',
    description: 'Developed new market opportunities, managed key client accounts, and collaborated with cross-functional teams to deliver comprehensive financial solutions to corporate clients.',
    highlights: [
      'Generated ₦800M in new business revenue',
      'Maintained 98% client retention rate',
      'Developed 25+ strategic partnerships',
    ],
    color: '#FF968D',
  },
  {
    title: 'Relationship Manager',
    company: 'First Bank Nigeria',
    years: '2016 - 2018',
    description: 'Managed high-net-worth client portfolios, provided financial advisory services, and achieved 120% of annual targets through strategic client engagement and service excellence.',
    highlights: [
      'Managed portfolio of 50+ high-value clients',
      'Exceeded targets by 120% consistently',
      'Implemented new client onboarding processes',
    ],
    color: '#4A90E2',
  },
];

export const educationData = [
  {
    degree: 'MBA - Business Administration',
    institution: 'Lagos Business School',
    years: '2014 - 2016',
    description: 'Specialized in Strategic Management and Corporate Finance. Graduated with Distinction, focusing on emerging market business strategies and financial analysis.',
    color: '#4A90E2',
  },
  {
    degree: 'B.Sc Economics',
    institution: 'University of Lagos',
    years: '2010 - 2014',
    description: 'First Class Honours in Economics with focus on Development Economics and Financial Markets. Active in student leadership and debate society.',
    color: '#FF968D',
  },
  {
    degree: 'Professional Certification',
    institution: 'Chartered Institute of Bankers Nigeria',
    years: '2019',
    description: 'Associate Member (ACIB) - Comprehensive certification in banking operations, risk management, and financial services regulation.',
    color: '#4A90E2',
  },
];

export const portfolioData = {
  'project1': {
    id: 'project1',
    title: 'Market Expansion Project',
    description: 'Led strategic expansion into 3 new markets across West Africa, achieving 40% revenue growth within 18 months.',
    details: [
      '• Conducted comprehensive market research and analysis',
      '• Developed go-to-market strategies for each region',
      '• Built local partnerships and distribution networks',
      '• Achieved ₦800M in new revenue streams',
      '• Managed cross-functional team of 15 professionals'
    ],
    icon: <Briefcase className="w-10 h-10 text-white" />,
    color: 'from-blue-400 to-purple-500',
    tags: [{ name: 'Strategy', bgColor: 'blue-100', textColor: 'blue-800' }, { name: 'Growth', bgColor: 'green-100', textColor: 'green-800' }]
  },
  'project2': {
    id: 'project2',
    title: 'Partnership Development',
    description: 'Secured 15+ strategic partnerships worth ₦1.2B in total value, expanding business reach and capabilities.',
    details: [
      '• Identified and evaluated potential strategic partners',
      '• Negotiated complex partnership agreements',
      '• Established joint venture frameworks',
      '• Created partnership performance metrics',
      '• Maintained ongoing relationship management'
    ],
    icon: <Share2 className="w-10 h-10 text-white" />,
    color: 'from-green-400 to-blue-500',
    tags: [{ name: 'Partnerships', bgColor: 'purple-100', textColor: 'purple-800' }, { name: 'Negotiation', bgColor: 'yellow-100', textColor: 'yellow-800' }]
  },
  'project3': {
    id: 'project3',
    title: 'Team Leadership Excellence',
    description: 'Built and managed high-performing team of 12 professionals, achieving 95% employee satisfaction.',
    details: [
      '• Recruited and onboarded top talent',
      '• Implemented performance management systems',
      '• Conducted regular training and development programs',
      '• Achieved 25% improvement in team productivity',
      '• Maintained 98% employee retention rate'
    ],
    icon: <UserPlus className="w-10 h-10 text-white" />,
    color: 'from-orange-400 to-red-500',
    tags: [{ name: 'Leadership', bgColor: 'red-100', textColor: 'red-800' }, { name: 'Management', bgColor: 'blue-100', textColor: 'blue-800' }]
  },
  'cert1': {
    id: 'cert1',
    title: 'ACIB Professional Certification',
    description: 'Associate Member of the Chartered Institute of Bankers Nigeria - comprehensive banking expertise.',
    details: [
      '• Completed rigorous banking operations curriculum',
      '• Specialized in risk management and compliance',
      '• Certified in financial services regulation',
      '• Ongoing professional development requirements',
      '• Member of professional banking community'
    ],
    icon: <GraduationCap className="w-10 h-10 text-white" />,
    color: 'from-yellow-400 to-orange-500',
    tags: [{ name: 'Banking', bgColor: 'yellow-100', textColor: 'yellow-800' }, { name: 'Certified', bgColor: 'orange-100', textColor: 'orange-800' }]
  },
  'award1': {
    id: 'award1',
    title: 'Excellence Award 2023',
    description: 'Outstanding Performance in Business Development - Sterling Bank recognition for exceptional results.',
    details: [
      '• Exceeded annual targets by 150%',
      '• Generated ₦2.1B in new business revenue',
      '• Maintained 98% client satisfaction rating',
      '• Led innovative business development initiatives',
      '• Recognized among top 5% of performers company-wide'
    ],
    icon: <Star className="w-10 h-10 text-white" />,
    color: 'from-purple-400 to-pink-500',
    tags: [{ name: 'Award', bgColor: 'purple-100', textColor: 'purple-800' }, { name: 'Excellence', bgColor: 'pink-100', textColor: 'pink-800' }]
  },
  'speaking1': {
    id: 'speaking1',
    title: 'Industry Speaking Engagement',
    description: 'Keynote speaker on "Digital Banking Transformation" at FinTech Lagos 2023 conference.',
    details: [
      '• Presented to 500+ industry professionals',
      '• Shared insights on digital transformation strategies',
      '• Discussed emerging fintech trends in Africa',
      '• Participated in expert panel discussions',
      '• Featured in industry publications'
    ],
    icon: <Phone className="w-10 h-10 text-white" />, // Using Phone for microphone
    color: 'from-teal-400 to-blue-500',
    tags: [{ name: 'Speaking', bgColor: 'teal-100', textColor: 'teal-800' }, { name: 'FinTech', bgColor: 'blue-100', textColor: 'blue-800' }]
  }
};