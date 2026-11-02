export interface FranchiseModel {
  id: string;
  name: string;
  category: 'preschool' | 'primary' | 'middle' | 'k12' | 'special';
  badge: string;
  classes: string;
  setupArea: string;
  franchiseFee: {
    tier1?: string;
    tier2?: string;
    other?: string;
    general?: string;
  };
  description: string;
  highlights: string[];
  idealFor: string;
}

export interface SupportPillar {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CampusItem {
  id: string;
  name: string;
  city: string;
  state: string;
  classes: string;
  studentCount: number;
  status: 'Operational Campus' | 'Franchise Opportunity Open';
  isHQ?: boolean;
  format?: string;
}

export const IDPS_CONTACT = {
  societyName: 'The International Delhi Public School Society',
  foundedDate: '22nd February 2012',
  tagline: 'Empowering Education • Inspiring Excellence • Building Futures',
  motto: 'Discipline • Dedication • Duty • Selfless Service',
  quote: 'Education is not merely preparation for examinations but preparation for life itself.',
  registeredOffice: 'C-240/241, Third Floor, Pandav Nagar, New Delhi – 110092',
  centralOffice: 'Central Corporate Franchise Desk & Communications Office, India',
  email: 'info@idpssociety.com',
  franchiseEmail: 'franchise@idpssociety.com',
  website: 'www.idpssociety.com',
  helplineNumbers: ['+91 7004222833', '+91 9631910016'],
  brochurePdfUrl: '/assets/aistudio/IDPS_Franchise_Brochure_With_Logo__1__75c24130.pdf',
  servicesPdfUrl: '/assets/aistudio/In_2f58754a.pdf',
  logoUrl: '/assets/aistudio/logo_94c881d7.png',
  presidentName: 'Narayan Karn',
  presidentTitle: 'President, The IDPS Society, New Delhi',
  presidentPhotoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-19_at_10.54.42_AM_65a108ec.jpeg',
  chairmanPhotoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-19_at_10.54.42_AM_65a108ec.jpeg',
  stats: {
    campuses: '35+',
    states: '15+',
    activeStudents: '45,900+',
    educators: '2,370+',
    heritageYears: '18+'
  }
};

export const FRANCHISE_MODELS: FranchiseModel[] = [
  {
    id: 'junior',
    name: '1. IDPS Junior',
    category: 'preschool',
    badge: 'Pre-Primary Wing',
    classes: 'Pre-Nursery to KG II',
    setupArea: '3,000 – 5,000 Sq. Ft.',
    franchiseFee: {
      general: '₹5 Lakhs – ₹10 Lakhs'
    },
    description: 'Specialized early-childhood play school format focused on sensory learning, cognitive play, language development, and foundational phonics.',
    highlights: [
      'Montessori & sensory apparatus theme rooms',
      'Child-safe anti-skid rubberized play flooring',
      'Continuous parent mobile app connectivity',
      'Low initial startup capital expenditure'
    ],
    idealFor: 'Urban boutique setups, residential enclaves, and women educators.'
  },
  {
    id: 'primary',
    name: '2. IDPS Primary',
    category: 'primary',
    badge: 'Primary Wing',
    classes: 'Pre-Nursery to Class V',
    setupArea: '8,000 – 12,000 Sq. Ft.',
    franchiseFee: {
      general: '₹10 Lakhs – ₹18 Lakhs'
    },
    description: 'Foundational primary campus delivering CBSE aligned curricular rigor, communicative English laboratories, and smart interactive technology.',
    highlights: [
      'Interactive 75" digital panels in all classrooms',
      'Dedicated phonics & mental mathematics suites',
      'Indoor sports arena, dance & fine arts rooms',
      'Diagnostic term-wise formative assessments'
    ],
    idealFor: 'Suburban townships and growing district headquarters.'
  },
  {
    id: 'elementary',
    name: '3. IDPS Elementary',
    category: 'middle',
    badge: 'Middle Wing',
    classes: 'Pre-Nursery to Class VIII',
    setupArea: '15,000 – 25,000 Sq. Ft.',
    franchiseFee: {
      general: '₹15 Lakhs – ₹25 Lakhs'
    },
    description: 'Complete middle foundation school equipped with STEM innovation labs, robotics, Olympiad preparation, and comprehensive sports infrastructure.',
    highlights: [
      'Physics, Chemistry, and Biology composite lab',
      'National Olympiad, NTSE & talent foundation coaching',
      'Turf sports ground, basketball court, and cricket nets',
      'Rich 3,000+ title central library facility'
    ],
    idealFor: 'Established educational trusts and expanding regional educators.'
  },
  {
    id: 'k12',
    name: '4. IDPS K-12 Flagship',
    category: 'k12',
    badge: 'Flagship Senior Secondary',
    classes: 'Pre-Nursery to Class XII (10+2)',
    setupArea: '2 Acres (Min. 30,000 Sq. Ft. Built-up)',
    franchiseFee: {
      tier1: '₹50 Lakhs',
      tier2: '₹40 Lakhs',
      other: '₹25 Lakhs'
    },
    description: 'Premier landmark senior secondary campus serving up to 2,500+ scholars across Science, Commerce & Humanities streams with world-class amenities.',
    highlights: [
      'Premier landmark campus serving up to 2,500+ students',
      'Exhaustive CBSE board exam preparation and university counselling',
      'Advanced STEM, Composite Sciences & Computer Laboratories',
      'Multi-acre sports infrastructure (Cricket, Basketball, Swimming)'
    ],
    idealFor: 'Visionary entrepreneurs and corporate groups establishing marquee educational institutions.'
  },
  {
    id: 'girls',
    name: '5. IDPS Girls',
    category: 'special',
    badge: 'Girls Empowerment',
    classes: 'Pre-Nursery to Class XII',
    setupArea: '1 – 2 Acres',
    franchiseFee: {
      general: '₹20 Lakhs – ₹35 Lakhs'
    },
    description: 'Dedicated all-girls institutional format emphasizing women leadership, STEM excellence, competitive entrance coaching, and athletic confidence.',
    highlights: [
      'High-security biometric perimeter and CCTV surveillance',
      'Martial arts, judo, and self-defense coaching modules',
      'Leadership conclaves and global career mentoring',
      'Special regional fee concessions from the Central Society'
    ],
    idealFor: 'Regions with high demand for safe, empowering all-girls institutions.'
  },
  {
    id: 'premium',
    name: '6. IDPS Premium',
    category: 'k12',
    badge: 'Sprawling Campus',
    classes: 'Pre-Nursery to Class XII (CBSE & Cambridge)',
    setupArea: '3 – 5 Acres Sprawling Campus',
    franchiseFee: {
      general: '₹45 Lakhs – ₹60 Lakhs'
    },
    description: 'High-end sprawling institutional landmark featuring international exchange programs, golf putting greens, equestrian training, and heated swimming pools.',
    highlights: [
      '5-Acre lush biophilic architectural blueprint',
      'Half-Olympic size temperature controlled swimming pool',
      'Equestrian riding academy and synthetic athletic track',
      'Central AC residential boarding suites optional'
    ],
    idealFor: 'Tier-1 metros, major state capitals, and premier smart cities.'
  },
  {
    id: 'excellence',
    name: '7. IDPS of Excellence',
    category: 'special',
    badge: 'IB / CBSE Framework',
    classes: 'Pre-Nursery to Class XII (Global Inquiry)',
    setupArea: '2 – 5 Acres Campus',
    franchiseFee: {
      tier1: '₹50 Lakhs',
      tier2: '₹40 Lakhs',
      other: '₹25 Lakhs'
    },
    description: 'Premium school model with International Curriculum Frameworks and deep global academic collaborations. Designed specifically to deliver world-class infrastructure models to prepare pupils for global university tracks.',
    highlights: [
      'Advanced STEM Labs & Research Pedagogy',
      'Innovation and design-thinking incubators',
      'Complete university guidance and SAT/IELTS preparatory cell',
      'State-of-the-art digital infrastructure and smart campus layout'
    ],
    idealFor: 'Forward-looking Tier-2 hubs with rising demand for international-standard education.'
  }
];

export const SUPPORT_PILLARS: SupportPillar[] = [
  {
    number: '01',
    title: 'Website Development',
    subtitle: 'Custom Digital Campus & Portal',
    description: 'End-to-end bespoke website design and deployment for your campus with online admission enquiry forms, virtual campus tour, fee gateway readiness, and mobile responsiveness.',
    iconName: 'Globe',
    details: [
      'Dynamic SEO-optimized school website',
      'Integrated admission inquiry CRM',
      'Fast cloud hosting & custom domain setup',
      'Parent notification board'
    ]
  },
  {
    number: '02',
    title: 'Social Media Account Development',
    subtitle: 'Brand Presence Across Meta & LinkedIn',
    description: 'Creation, verification, and professional setup of campus handles across Facebook, Instagram, YouTube, and LinkedIn, adhering to national IDPS brand standards.',
    iconName: 'Share2',
    details: [
      'Official brand badge setup',
      'Custom cover art & profile branding',
      'Launch countdown campaign templates',
      'Content calendar for the academic year'
    ]
  },
  {
    number: '03',
    title: 'Google Mapping and Listing',
    subtitle: 'Local SEO & Parent Discovery',
    description: 'Complete Google Business Profile verification, precise geo-tagging, Google Maps pin listing, and reputation management protocols to ensure top search ranking in your city.',
    iconName: 'MapPin',
    details: [
      'Google Verified Business Profile',
      'Campus 360° photo upload support',
      'Local area search optimization',
      'Parent review monitoring framework'
    ]
  },
  {
    number: '04',
    title: 'Digital Marketing',
    subtitle: 'Targeted High-Conversion Campaigns',
    description: 'Centralized marketing campaigns across Google Ads, Meta Ads, and YouTube targeted directly at parents with school-aged children within your campus catchment radius.',
    iconName: 'Target',
    details: [
      'Hyper-local geo-fenced ad targeting',
      'Admission season lead generation',
      'Optimized ad copy and video reels',
      'Real-time cost-per-lead tracking reports'
    ]
  },
  {
    number: '05',
    title: 'Staff Hiring Support',
    subtitle: 'Qualified Educator & Executive Recruitment',
    description: 'Assistance in sourcing, screening, panel interviewing, and shortlisting Principal, Academic Coordinators, subject teachers, and administrative personnel.',
    iconName: 'Users',
    details: [
      'National job portal advertisements',
      'Rigorous teacher screening assessments',
      'Central interview board participation',
      'Standardized employment contracts & SOPs'
    ]
  },
  {
    number: '06',
    title: 'Staff Training & Faculty Academy',
    subtitle: 'Continuous Professional Development',
    description: 'Comprehensive pre-launch faculty workshops and ongoing training modules covering modern pedagogical methodologies, classroom discipline, and student psychology.',
    iconName: 'GraduationCap',
    details: [
      '5-Day intensive pre-launch faculty boot camp',
      'Quarterly teacher skill upgrade workshops',
      'Central Faculty Academy certification',
      'Annual teacher assessment matrices'
    ]
  },
  {
    number: '07',
    title: 'Creative and Designs',
    subtitle: 'Complete Brand & Print Collaterals',
    description: 'High-resolution print and digital artwork including admission brochures, prospectus, outdoor hoardings, uniforms, identity cards, report cards, and event backdrops.',
    iconName: 'Palette',
    details: [
      'Official IDPS green & gold brand manual',
      'Ready-to-print prospectus & flyers',
      'Glow signboards & wayfinding signage',
      'School diary, student ID & calendar templates'
    ]
  },
  {
    number: '08',
    title: 'Help in Day-to-Day Operations',
    subtitle: 'Operational SOPs & School Management',
    description: 'Turnkey manuals, operational blueprints, daily timetables, security SOPs, and administrative guidance to run the school smoothly from Day 1.',
    iconName: 'Briefcase',
    details: [
      'School Operations Master Manual',
      'Academic calendar & examination schedules',
      'Fee collection & accounting guidelines',
      'Bus transport & security protocols'
    ]
  },
  {
    number: '09',
    title: 'Affiliation Guidance',
    subtitle: 'CBSE, ICSE, State & International Accreditations',
    description: 'Meticulous guidance through the entire affiliation documentation pipeline, land inspection norms, fire and safety NOCs, society bylaws, and board liaison.',
    iconName: 'FileCheck',
    details: [
      'Affiliation checklist and timeline roadmap',
      'DPR (Detailed Project Report) assistance',
      'Mock inspection & regulatory compliance audit',
      'Affiliation dossier preparation support'
    ]
  },
  {
    number: '10',
    title: 'Curriculum & Syllabus',
    subtitle: 'Standardized Academic Content Delivery',
    description: 'Centrally structured curriculum thoroughly aligned with CBSE and international standards, accompanied by detailed lesson plans, worksheets, and teacher resource guides.',
    iconName: 'BookOpen',
    details: [
      'Structured syllabus books & workbooks',
      'Daily lesson plans & pedagogical guides',
      'Formative & summative examination papers',
      'STEM & co-curricular activity modules'
    ]
  },
  {
    number: '11',
    title: 'Regular Visits & Quality Audits',
    subtitle: 'In-Person Quality Assurance & Mentorship',
    description: 'Scheduled and surprise inspections by Central Academic Directors and Infrastructure Auditors to review educational delivery, audit safety, and mentor staff.',
    iconName: 'ShieldCheck',
    details: [
      'Quarterly academic audit visits',
      'Infrastructure and hygiene checks',
      'Direct parent feedback sessions',
      'Actionable improvement scorecards'
    ]
  }
];

export const TIMELINE_STEPS = [
  {
    days: 'Day 1',
    phase: 'Phase 1: Initiation',
    title: 'Application Submission & Registration Formality',
    desc: 'Initial registration, submission of profile, proposed location details, and intent document to the Central Franchise Desk.',
    deliverables: [
      'Online / physical application submission',
      'Verification of proposed site credentials',
      'Issuance of initial acknowledgment docket'
    ]
  },
  {
    days: 'Day 3 – 7',
    phase: 'Phase 2: Management Review',
    title: 'Initial Core Executive Discussions & Approval',
    desc: 'High-level committee meeting with Society management, demographic viability review, and formal intent approval.',
    deliverables: [
      'Demographic & catchment feasibility report',
      'Executive committee clearance',
      'Issuance of Letter of Intent (LOI)'
    ]
  },
  {
    days: 'Day 7 – 15',
    phase: 'Phase 3: Formalities',
    title: 'Legal Documentation & Franchise Agreement Execution',
    desc: 'Finalization of franchise agreement, territory exclusivity documentation, and signing of official MOU.',
    deliverables: [
      'Franchise agreement execution',
      'Territory protection certificate',
      'Brand trademark licensing rights'
    ]
  },
  {
    days: 'Day 15 – 30',
    phase: 'Phase 4: Architecture',
    title: 'Infrastructure Architecture Planning & Interior Blueprints',
    desc: 'Society architects provide custom 2D/3D layout drawings, classroom color swatches, and structural layout blueprints.',
    deliverables: [
      'Complete CAD architectural master plan',
      'Room-by-room 3D concept renders',
      'Structural electrical & plumbing schematics'
    ]
  },
  {
    days: 'Day 30 – 45',
    phase: 'Phase 5: Fabrication',
    title: 'On-Site Branding & Structural Setup Execution',
    desc: 'Interior fabrication, graphic wall themes, safety retrofitting, glow sign board installations, and ambient air-conditioning.',
    deliverables: [
      'Standardized IDPS green LED glow boards',
      'Themed academic concept wall murals',
      'Reception & administrative boardroom fabrication'
    ]
  },
  {
    days: 'Day 45 – 60',
    phase: 'Phase 6: Human Resources',
    title: 'Human Resource Hiring & Faculty Training Cycles',
    desc: 'Centralized talent sourcing, interviewing, hiring of teachers, and comprehensive 15-day pedagogical training bootcamps.',
    deliverables: [
      'Principal & faculty appointment',
      '15-Day intensive teacher orientation boot camp',
      'Administrative & bus staff safety training'
    ]
  },
  {
    days: 'Day 60 – 75',
    phase: 'Phase 7: Procurement',
    title: 'Academic Inventory Dispatch & System Setup',
    desc: 'Dispatch of student kits, uniforms, library inventory, science lab apparatus, and school ERP software deployment.',
    deliverables: [
      'Full consignment of syllabus books & uniforms',
      'Composite science & robotics lab equipment',
      'School ERP & mobile app activation'
    ]
  },
  {
    days: 'Day 75 – 90',
    phase: 'Phase 8: Admissions Campaign',
    title: 'Hyper-Local Marketing & Admissions Window',
    desc: 'Launch of hoardings, digital advertising campaigns, experiential school tour days, and initial admission registrations.',
    deliverables: [
      'City-wide outdoor hoarding placements',
      'Hyper-local targeted social media ads',
      'Parent counseling sessions & spot admissions'
    ]
  },
  {
    days: 'Day 90',
    phase: 'Phase 9: Inauguration',
    title: 'Grand Official Campus Launch Celebration',
    desc: 'Inauguration ceremony attended by central IDPS Society dignitaries, community leaders, and first batch of students.',
    deliverables: [
      'VIP ribbon-cutting ceremony',
      'Press release & regional media coverage',
      'Official handover to school administration'
    ]
  }
];

export const OFFICIAL_CAMPUSES: CampusItem[] = [
  { id: 'delhi-hq', name: 'Head Branch', city: 'New Delhi', state: 'Delhi', classes: 'Nursery–XII', studentCount: 2600, status: 'Operational Campus', isHQ: true },
  { id: 'delhi-dwarka', name: 'Dwarka', city: 'Dwarka', state: 'Delhi', classes: 'Nursery–XII', studentCount: 1900, status: 'Operational Campus' },
  { id: 'delhi-rohini', name: 'Rohini', city: 'Rohini', state: 'Delhi', classes: 'Nursery–X', studentCount: 1300, status: 'Operational Campus' },
  { id: 'hr-gurugram', name: 'Gurugram', city: 'Gurugram', state: 'Haryana', classes: 'Nursery–XII', studentCount: 2100, status: 'Operational Campus' },
  { id: 'hr-faridabad', name: 'Faridabad', city: 'Faridabad', state: 'Haryana', classes: 'Nursery–VIII', studentCount: 900, status: 'Operational Campus' },
  { id: 'up-noida', name: 'Noida', city: 'Noida', state: 'Uttar Pradesh', classes: 'Nursery–XII', studentCount: 2200, status: 'Operational Campus' },
  { id: 'up-lucknow', name: 'Lucknow', city: 'Lucknow', state: 'Uttar Pradesh', classes: 'Nursery–XII', studentCount: 1750, status: 'Operational Campus' },
  { id: 'up-kanpur', name: 'Kanpur', city: 'Kanpur', state: 'Uttar Pradesh', classes: 'Nursery–VIII', studentCount: 820, status: 'Operational Campus' },
  { id: 'up-varanasi', name: 'Varanasi', city: 'Varanasi', state: 'Uttar Pradesh', classes: 'Nursery–V', studentCount: 460, status: 'Operational Campus' },
  { id: 'rj-jaipur', name: 'Jaipur', city: 'Jaipur', state: 'Rajasthan', classes: 'Nursery–XII', studentCount: 1800, status: 'Operational Campus' },
  { id: 'rj-udaipur', name: 'Udaipur', city: 'Udaipur', state: 'Rajasthan', classes: 'Nursery–VIII', studentCount: 700, status: 'Operational Campus' },
  { id: 'pb-ludhiana', name: 'Ludhiana', city: 'Ludhiana', state: 'Punjab', classes: 'Nursery–X', studentCount: 1150, status: 'Operational Campus' },
  { id: 'gj-ahmedabad', name: 'Ahmedabad', city: 'Ahmedabad', state: 'Gujarat', classes: 'Nursery–XII', studentCount: 2000, status: 'Operational Campus' },
  { id: 'gj-surat', name: 'Surat', city: 'Surat', state: 'Gujarat', classes: 'Nursery–X', studentCount: 1250, status: 'Operational Campus' },
  { id: 'gj-vadodara', name: 'Vadodara', city: 'Vadodara', state: 'Gujarat', classes: 'Nursery–VII', studentCount: 620, status: 'Operational Campus' },
  { id: 'mh-mumbai', name: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', classes: 'Nursery–XII', studentCount: 1950, status: 'Operational Campus' },
  { id: 'mh-pune', name: 'Pune', city: 'Pune', state: 'Maharashtra', classes: 'Nursery–XII', studentCount: 1850, status: 'Operational Campus' },
  { id: 'mh-nagpur', name: 'Nagpur', city: 'Nagpur', state: 'Maharashtra', classes: 'Nursery–X', studentCount: 1050, status: 'Operational Campus' },
  { id: 'mh-nashik', name: 'Nashik', city: 'Nashik', state: 'Maharashtra', classes: 'Nursery–V', studentCount: 380, status: 'Operational Campus' },
  { id: 'mp-bhopal', name: 'Bhopal', city: 'Bhopal', state: 'Madhya Pradesh', classes: 'Nursery–X', studentCount: 1200, status: 'Operational Campus' },
  { id: 'mp-indore', name: 'Indore', city: 'Indore', state: 'Madhya Pradesh', classes: 'Nursery–XII', studentCount: 1700, status: 'Operational Campus' },
  { id: 'wb-kolkata', name: 'Kolkata', city: 'Kolkata', state: 'West Bengal', classes: 'Nursery–XII', studentCount: 1650, status: 'Operational Campus' },
  { id: 'br-patna', name: 'Patna', city: 'Patna', state: 'Bihar', classes: 'Nursery–VIII', studentCount: 880, status: 'Operational Campus' },
  { id: 'tg-hyderabad', name: 'Hyderabad', city: 'Hyderabad', state: 'Telangana', classes: 'Nursery–XII', studentCount: 2150, status: 'Operational Campus' },
  { id: 'tg-warangal', name: 'Warangal', city: 'Warangal', state: 'Telangana', classes: 'Nursery–VII', studentCount: 590, status: 'Operational Campus' },
  { id: 'ap-visakhapatnam', name: 'Visakhapatnam', city: 'Visakhapatnam', state: 'Andhra Pradesh', classes: 'Nursery–X', studentCount: 1100, status: 'Operational Campus' },
  { id: 'ap-vijayawada', name: 'Vijayawada', city: 'Vijayawada', state: 'Andhra Pradesh', classes: 'Nursery–VIII', studentCount: 740, status: 'Operational Campus' },
  { id: 'ka-bengaluru', name: 'Bengaluru', city: 'Bengaluru', state: 'Karnataka', classes: 'Nursery–XII', studentCount: 2300, status: 'Operational Campus' },
  { id: 'ka-mysuru', name: 'Mysuru', city: 'Mysuru', state: 'Karnataka', classes: 'Nursery–X', studentCount: 1150, status: 'Operational Campus' },
  { id: 'ka-hubballi', name: 'Hubballi', city: 'Hubballi', state: 'Karnataka', classes: 'Nursery–VIII', studentCount: 800, status: 'Operational Campus' },
  { id: 'ka-ballari', name: 'Ballari', city: 'Ballari', state: 'Karnataka', classes: 'Nursery–VII', studentCount: 560, status: 'Operational Campus' },
  { id: 'ka-mangaluru', name: 'Mangaluru', city: 'Mangaluru', state: 'Karnataka', classes: 'Nursery–V', studentCount: 340, status: 'Operational Campus' },
  { id: 'tn-chennai', name: 'Chennai', city: 'Chennai', state: 'Tamil Nadu', classes: 'Nursery–XII', studentCount: 1900, status: 'Operational Campus' },
  { id: 'tn-coimbatore', name: 'Coimbatore', city: 'Coimbatore', state: 'Tamil Nadu', classes: 'Nursery–X', studentCount: 1000, status: 'Operational Campus' },
  { id: 'kl-kochi', name: 'Kochi', city: 'Kochi', state: 'Kerala', classes: 'Nursery–X', studentCount: 1080, status: 'Operational Campus' }
];

export const OPEN_TERRITORIES: CampusItem[] = [
  { id: 'opp-agra', name: 'Agra (Open Territory)', city: 'Agra', state: 'Uttar Pradesh', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-prayagraj', name: 'Prayagraj (Open Territory)', city: 'Prayagraj', state: 'Uttar Pradesh', classes: 'K–12 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–12 School' },
  { id: 'opp-dehradun', name: 'Dehradun (Open Territory)', city: 'Dehradun', state: 'Uttarakhand', classes: 'K–12 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–12 School' },
  { id: 'opp-chandigarh', name: 'Chandigarh (Open Territory)', city: 'Chandigarh', state: 'Chandigarh', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-jodhpur', name: 'Jodhpur (Open Territory)', city: 'Jodhpur', state: 'Rajasthan', classes: 'Pre-School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'Pre-School' },
  { id: 'opp-rajkot', name: 'Rajkot (Open Territory)', city: 'Rajkot', state: 'Gujarat', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-aurangabad', name: 'Aurangabad (Open Territory)', city: 'Aurangabad', state: 'Maharashtra', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-raipur', name: 'Raipur (Open Territory)', city: 'Raipur', state: 'Chhattisgarh', classes: 'K–12 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–12 School' },
  { id: 'opp-ranchi', name: 'Ranchi (Open Territory)', city: 'Ranchi', state: 'Jharkhand', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-bhubaneswar', name: 'Bhubaneswar (Open Territory)', city: 'Bhubaneswar', state: 'Odisha', classes: 'K–12 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–12 School' },
  { id: 'opp-guwahati', name: 'Guwahati (Open Territory)', city: 'Guwahati', state: 'Assam', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-davanagere', name: 'Davanagere (Open Territory)', city: 'Davanagere', state: 'Karnataka', classes: 'Pre-School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'Pre-School' },
  { id: 'opp-madurai', name: 'Madurai (Open Territory)', city: 'Madurai', state: 'Tamil Nadu', classes: 'K–8 School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'K–8 School' },
  { id: 'opp-thiruvananthapuram', name: 'Thiruvananthapuram (Open Territory)', city: 'Thiruvananthapuram', state: 'Kerala', classes: 'Pre-School', studentCount: 0, status: 'Franchise Opportunity Open', format: 'Pre-School' }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'What is the history and credential of International Delhi Public School Society?',
    answer: 'The International Delhi Public School Society, New Delhi, was founded on 22nd February 2012 by eminent educationists and visionaries. Today, it steers a distinguished national network of 35+ campuses across 15 Indian states with 45,000+ students and 2,300+ trained faculty members.'
  },
  {
    question: 'How does IDPS support new franchise partners from site selection to opening?',
    answer: 'The Central Secretariat delivers complete 360° turnkey support across 11 key operational dimensions: architectural CAD blueprints, standardized interior designs, staff recruitment & teacher training, CBSE affiliation advisory, centrally printed books & kits, and hyper-local marketing campaigns within a guaranteed 90-day execution framework.'
  },
  {
    question: 'What are the different franchise school models available?',
    answer: 'IDPS provides 7 tailored franchise formats: IDPS Junior (Pre-School), IDPS Primary (Nursery–V), IDPS Elementary (Nursery–VIII), IDPS K-12 Flagship (2 Acres), IDPS Girls (All-Girls), IDPS Premium (3–5 Acres), and IDPS of Excellence (IB/CBSE Frameworks) to match your land parcel and local demographic potential.'
  },
  {
    question: 'What is the expected Return on Investment (ROI) and fee retention?',
    answer: 'With structured tuition fee models, central admissions marketing, and an estimated break-even period of 3 to 4 years, IDPS franchise partners retain the vast majority of local operational revenues, with nominal society coordination fees.'
  },
  {
    question: 'How does IDPS maintain academic excellence across all campuses?',
    answer: 'Every campus operates on centralized CBSE lesson plans, standardized quarterly exam blueprints, continuous faculty workshops through the Central Teachers Academy, and regular unannounced audits by senior Society Directors.'
  }
];
