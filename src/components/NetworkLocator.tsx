import React, { useState, useMemo, useRef } from 'react';
import { 
  MapPin, Search, Building2, CheckCircle2, ArrowRight, 
  Phone, Sparkles, Plus, Star, X, ExternalLink, School, Award, Users, BookOpen
} from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

export interface BranchPin {
  id: string;
  code: string;
  isStar?: boolean;
  isPlus?: boolean;
  name: string;
  city: string;
  state: string;
  region: 'North' | 'South' | 'West' | 'Central' | 'East';
  // Percentage coordinates relative to 838x559 authentic India map
  pctX: number;
  pctY: number;
  status: 'Operational Campus' | 'Franchise Opportunity Open';
  modelType: string;
  studentStrength?: string;
  affiliation: string;
  address?: string;
  highlights?: string[];
}

export const NetworkLocator: React.FC<{ onOpenApplyModal: (modelId?: string) => void }> = ({ onOpenApplyModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranchId, setSelectedBranchId] = useState<string>('delhi-hq');
  const [activeTab, setActiveTab] = useState<'all' | 'operational' | 'expansion'>('all');
  const [hoveredBranchId, setHoveredBranchId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Exact pins matching the reference screenshot coordinates on the 838x559 authentic map
  const branchPins: BranchPin[] = [
    // --- DELHI NCR (Star Badge & Hubs) ---
    {
      id: 'delhi-hq',
      code: '★',
      isStar: true,
      name: 'IDPS Central Registered Secretariat & National Model Campus',
      city: 'New Delhi (Pandav Nagar)',
      state: 'Delhi NCR',
      region: 'North',
      pctX: 26.0,
      pctY: 29.8,
      status: 'Operational Campus',
      modelType: 'Central Flagship Campus',
      studentStrength: '1,500+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Pandav Nagar / Central Directorate, New Delhi - 110092',
      highlights: ['Society National Directorate', 'Smart Interactive Classrooms', 'Teacher Training Institute']
    },
    {
      id: 'delhi-rohini',
      code: 'RO',
      name: 'IDPS Rohini North Campus',
      city: 'Rohini',
      state: 'Delhi NCR',
      region: 'North',
      pctX: 25.5,
      pctY: 28.5,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,200+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Sector 24, Rohini Educational Zone, Delhi',
      highlights: ['Robotics Lab', 'Indoor Badminton Arena', 'Montessori Wing']
    },
    {
      id: 'delhi-gurugram',
      code: 'GU',
      name: 'IDPS Gurugram Cyber Hub Campus',
      city: 'Gurugram',
      state: 'Haryana',
      region: 'North',
      pctX: 25.0,
      pctY: 30.5,
      status: 'Operational Campus',
      modelType: 'IDPS Premium Campus',
      studentStrength: '1,100+ Students',
      affiliation: 'Cambridge / CBSE',
      address: 'Golf Course Extension Road, Gurugram',
      highlights: ['AI Innovation Lab', 'Olympic Swimming Pool', 'Fleet Surveillance']
    },
    {
      id: 'delhi-faridabad',
      code: 'FA',
      name: 'IDPS Faridabad Smart Campus',
      city: 'Faridabad',
      state: 'Haryana',
      region: 'North',
      pctX: 27.2,
      pctY: 31.0,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '950+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Sector 89, Neharpar, Faridabad',
      highlights: ['Science Discovery Zone', 'Smart Cafeteria', 'Skating Rink']
    },
    {
      id: 'delhi-noida',
      code: 'NO',
      name: 'IDPS Noida Expressway Campus',
      city: 'Noida',
      state: 'Uttar Pradesh',
      region: 'North',
      pctX: 28.0,
      pctY: 30.2,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,350+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Sector 137 Expressway Corridor, Noida',
      highlights: ['Aero-modelling Studio', 'Full-sized Football Turf', 'Auditorium']
    },

    // --- PUNJAB & NORTH EXPANSION ---
    {
      id: 'ludhiana',
      code: 'LU',
      name: 'IDPS Ludhiana Industrial Hub Campus',
      city: 'Ludhiana',
      state: 'Punjab',
      region: 'North',
      pctX: 24.3,
      pctY: 21.6,
      status: 'Operational Campus',
      modelType: 'K-12 Model Campus',
      studentStrength: '920+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Ferozepur Road Bypass, Ludhiana',
      highlights: ['Cricket Academy', 'Composite STEM Lab', 'Activity Hall']
    },
    {
      id: 'north-exp-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Jammu Greater Kailash & Akhnoor Campuses',
      city: 'Jammu & Akhnoor',
      state: 'Jammu & Kashmir',
      region: 'North',
      pctX: 28.2,
      pctY: 24.0,
      status: 'Franchise Opportunity Open',
      modelType: 'Middle & Senior Wing',
      affiliation: 'Territory Available',
      address: 'Pallanwala Road & Sunjwan Highway, J&K',
      highlights: ['Expansion Zone', 'Ready Demand', 'NEP 2020 Turnkey Support']
    },

    // --- RAJASTHAN ---
    {
      id: 'jaipur',
      code: 'JA',
      name: 'IDPS Jaipur Pink City Campus',
      city: 'Jaipur',
      state: 'Rajasthan',
      region: 'North',
      pctX: 23.6,
      pctY: 34.0,
      status: 'Operational Campus',
      modelType: 'K-12 Model Campus',
      studentStrength: '1,180+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Ajmer Road Express Zone, Jaipur',
      highlights: ['Equestrian & Archery', 'Digitized Classrooms', 'AC Hostel Suites']
    },
    {
      id: 'udaipur',
      code: 'UD',
      name: 'IDPS Udaipur Lake City Wing',
      city: 'Udaipur',
      state: 'Rajasthan',
      region: 'North',
      pctX: 19.1,
      pctY: 41.5,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '890+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Shobhagpura - Sukher Link Road, Udaipur',
      highlights: ['Fine Arts Academy', 'Robotics Innovation Hub', 'Sports Arena']
    },
    {
      id: 'west-rajasthan-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Jodhpur & Bikaner Expansion',
      city: 'Jodhpur / Bikaner',
      state: 'Rajasthan',
      region: 'North',
      pctX: 17.9,
      pctY: 36.5,
      status: 'Franchise Opportunity Open',
      modelType: 'Turnkey 90-Day Setup',
      affiliation: 'Territory Available',
      address: 'NH-62 Connectivity Corridor',
      highlights: ['Rapid Regional Enrollment', 'Central Society Mentorship']
    },

    // --- UTTAR PRADESH & BIHAR ---
    {
      id: 'lucknow',
      code: 'LU',
      name: 'IDPS Lucknow Gomti Nagar Campus',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      region: 'North',
      pctX: 34.0,
      pctY: 34.0,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,650+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Shaheed Path & Gomti Nagar Extension, Lucknow',
      highlights: ['Full Olympic Sports Complex', 'STEM Innovation Pods', 'AC Fleet']
    },
    {
      id: 'kanpur',
      code: 'KA',
      name: 'IDPS Kanpur Industrial Hub Wing',
      city: 'Kanpur',
      state: 'Uttar Pradesh',
      region: 'North',
      pctX: 32.2,
      pctY: 34.7,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,280+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Kalyanpur - Bithoor Main Road, Kanpur',
      highlights: ['IIT Foundation Coaching Wing', 'Automated Science Labs', 'Indoor Sports']
    },
    {
      id: 'up-west-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Agra & Mathura Corridor Expansion',
      city: 'Agra / Mathura',
      state: 'Uttar Pradesh',
      region: 'North',
      pctX: 27.9,
      pctY: 34.0,
      status: 'Franchise Opportunity Open',
      modelType: 'K-12 Model Campus',
      affiliation: 'Territory Available',
      address: 'Taj Expressway Educational Zone',
      highlights: ['Guaranteed Regional Exclusivity', 'Pre-launch Marketing Deployment']
    },
    {
      id: 'varanasi',
      code: 'VA',
      name: 'IDPS Varanasi Heritage Campus',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      region: 'North',
      pctX: 37.6,
      pctY: 39.7,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '1,040+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Shivpur - Ring Road Corridor, Varanasi',
      highlights: ['Cultural Amphitheatre', 'Smart Robotics Pod', 'Olympiad Foundation']
    },
    {
      id: 'up-east-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Prayagraj & Gorakhpur Zones',
      city: 'Prayagraj / Gorakhpur',
      state: 'Uttar Pradesh',
      region: 'North',
      pctX: 34.6,
      pctY: 39.4,
      status: 'Franchise Opportunity Open',
      modelType: 'Middle & Senior Wing',
      affiliation: 'Territory Available',
      address: 'Civil Lines / Highway Belts',
      highlights: ['High Parental Inflow', 'Turnkey Society Branding']
    },
    {
      id: 'patna',
      code: 'PA',
      name: 'IDPS Patna Heritage Campus',
      city: 'Patna',
      state: 'Bihar',
      region: 'East',
      pctX: 41.5,
      pctY: 39.0,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,420+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Bailey Road / Danapur Canal Road, Patna',
      highlights: ['6-Acre Sprawling Grounds', 'IIT/NEET Foundation Wing', 'Audio-Visual Studios']
    },

    // --- GUJARAT & WEST COAST ---
    {
      id: 'ahmedabad',
      code: 'AH',
      name: 'IDPS Ahmedabad Science City Campus',
      city: 'Ahmedabad',
      state: 'Gujarat',
      region: 'West',
      pctX: 17.4,
      pctY: 47.6,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,120+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Science City Road, Sola, Ahmedabad',
      highlights: ['Astronomy & STEM Club', 'Smart Classrooms', 'Amphitheater']
    },
    {
      id: 'vadodara',
      code: 'VA',
      name: 'IDPS Vadodara Cultural Campus',
      city: 'Vadodara',
      state: 'Gujarat',
      region: 'West',
      pctX: 18.6,
      pctY: 50.8,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '870+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Vasna-Bhayli Main Road, Vadodara',
      highlights: ['Performing Arts Wing', 'Robotics Center', 'Transport GPS']
    },
    {
      id: 'surat',
      code: 'SU',
      name: 'IDPS Surat Diamond City Campus',
      city: 'Surat',
      state: 'Gujarat',
      region: 'West',
      pctX: 17.9,
      pctY: 54.4,
      status: 'Operational Campus',
      modelType: 'K-12 Model Campus',
      studentStrength: '990+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Vesu - Canal Road, Surat',
      highlights: ['Language Immersion Hub', 'Synthetic Tennis Court', 'Smart Playrooms']
    },
    {
      id: 'kutch-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Rajkot & Saurashtra Expansion',
      city: 'Rajkot / Gandhidham',
      state: 'Gujarat',
      region: 'West',
      pctX: 13.8,
      pctY: 50.4,
      status: 'Franchise Opportunity Open',
      modelType: 'Middle Wing Model',
      affiliation: 'Territory Available',
      address: 'Kalawad Road Educational Corridor',
      highlights: ['Exclusive Regional Territory', 'Comprehensive Central Curriculum']
    },

    // --- MADHYA PRADESH ---
    {
      id: 'bhopal',
      code: 'BH',
      name: 'IDPS Bhopal Lake City Campus',
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      region: 'Central',
      pctX: 26.5,
      pctY: 47.6,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '940+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Hoshangabad Road Extension, Bhopal',
      highlights: ['Eco-Park Arboretum', 'Olympiad Training Hub', 'Multi-Sports Court']
    },
    {
      id: 'indore',
      code: 'IN',
      name: 'IDPS Indore Central Campus',
      city: 'Indore',
      state: 'Madhya Pradesh',
      region: 'Central',
      pctX: 23.4,
      pctY: 49.4,
      status: 'Operational Campus',
      modelType: 'Exclusive Primary Wing',
      studentStrength: '850+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Super Corridor / Vijay Nagar, Indore',
      highlights: ['Montessori Apparatus', 'Sensory Theme Zones', 'Nutritional Dining']
    },

    // --- MAHARASHTRA ---
    {
      id: 'nagpur',
      code: 'NA',
      name: 'IDPS Nagpur Orange City Campus',
      city: 'Nagpur',
      state: 'Maharashtra',
      region: 'West',
      pctX: 29.4,
      pctY: 54.4,
      status: 'Operational Campus',
      modelType: 'Middle Wing Foundation',
      studentStrength: '820+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Wardha Road / MIHAN Corridor, Nagpur',
      highlights: ['Turnkey NEP Infrastructure', 'Activity Playrooms', 'Cricket Nets']
    },
    {
      id: 'nashik',
      code: 'NA',
      name: 'IDPS Nashik Wine Capital Campus',
      city: 'Nashik',
      state: 'Maharashtra',
      region: 'West',
      pctX: 19.8,
      pctY: 59.4,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '810+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Gangapur Road Educational Belt, Nashik',
      highlights: ['Synthetic Turf Field', 'Design & Technology Wing']
    },
    {
      id: 'mumbai',
      code: 'MU',
      name: 'IDPS Mumbai Suburban Campus',
      city: 'Mumbai / Thane',
      state: 'Maharashtra',
      region: 'West',
      pctX: 17.2,
      pctY: 62.6,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '1,340+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Ghodbunder Road Corridor, Thane West',
      highlights: ['Hi-Tech Smart Suites', 'Olympic Gymnastics', 'Surveillance Network']
    },
    {
      id: 'pune',
      code: 'PU',
      name: 'IDPS Pune West Campus',
      city: 'Pune',
      state: 'Maharashtra',
      region: 'West',
      pctX: 19.1,
      pctY: 64.8,
      status: 'Operational Campus',
      modelType: 'IDPS Premium (5-Acres)',
      studentStrength: '1,210+ Students',
      affiliation: 'Cambridge / CBSE',
      address: 'Near Hinjawadi Phase 2 / Baner Link Road',
      highlights: ['Biophilic Eco-Campus', 'Makerspace Lab', 'Indoor Heated Pool']
    },
    {
      id: 'maharashtra-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Chhatrapati Sambhaji Nagar & Kolhapur',
      city: 'Sambhaji Nagar / Kolhapur',
      state: 'Maharashtra',
      region: 'West',
      pctX: 22.7,
      pctY: 60.1,
      status: 'Franchise Opportunity Open',
      modelType: 'K-12 Flagship Campus',
      affiliation: 'Territory Available',
      address: 'Jalna Road & Shiroli Corridor',
      highlights: ['Rapid Enrollment Potential', 'Central Advisory Directorate Support']
    },

    // --- EAST & CENTRAL EXPANSION ---
    {
      id: 'kolkata',
      code: 'KO',
      name: 'IDPS Kolkata City of Joy Campus',
      city: 'Kolkata',
      state: 'West Bengal',
      region: 'East',
      pctX: 47.7,
      pctY: 48.3,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,380+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'New Town Action Area II, Kolkata',
      highlights: ['Robotics Academy', 'International Exchange Tie-ups', 'Indoor Squash Court']
    },
    {
      id: 'jharkhand-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Ranchi & Jamshedpur Territory',
      city: 'Ranchi / Jamshedpur',
      state: 'Jharkhand',
      region: 'East',
      pctX: 41.8,
      pctY: 46.5,
      status: 'Franchise Opportunity Open',
      modelType: 'K-12 Model Campus',
      affiliation: 'Territory Available',
      address: 'Ring Road & Kandra Highway Belts',
      highlights: ['Prime Demand Zone', 'Complete CBSE Affiliation Assistance']
    },
    {
      id: 'chhattisgarh-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Raipur & Bilaspur Territory',
      city: 'Raipur / Bilaspur',
      state: 'Chhattisgarh',
      region: 'Central',
      pctX: 35.2,
      pctY: 54.4,
      status: 'Franchise Opportunity Open',
      modelType: 'Exclusive Middle Wing',
      affiliation: 'Territory Available',
      address: 'Naya Raipur Educational Hub Corridor',
      highlights: ['Growing Industrial Belt', 'Complete Architectural Assistance']
    },
    {
      id: 'odisha-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Bhubaneswar & Cuttack Territory',
      city: 'Bhubaneswar / Cuttack',
      state: 'Odisha',
      region: 'East',
      pctX: 43.0,
      pctY: 55.5,
      status: 'Franchise Opportunity Open',
      modelType: 'Turnkey 90-Day Setup',
      affiliation: 'Territory Available',
      address: 'Patia IT SEZ Corridor, Bhubaneswar',
      highlights: ['Direct Central Mentorship', 'High ROI Pre-registrations']
    },
    {
      id: 'northeast-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Guwahati & Northeast Strategic Gateway',
      city: 'Guwahati',
      state: 'Assam',
      region: 'East',
      pctX: 53.7,
      pctY: 37.2,
      status: 'Franchise Opportunity Open',
      modelType: 'Regional Hub Campus',
      affiliation: 'Territory Available',
      address: 'GS Road / VIP Airport Road, Guwahati',
      highlights: ['Gateway to Northeast India', 'High Prestige Society Presence']
    },

    // --- TELANGANA & ANDHRA PRADESH ---
    {
      id: 'hyderabad',
      code: 'HY',
      name: 'IDPS Hyderabad Hi-Tech City Campus',
      city: 'Hyderabad',
      state: 'Telangana',
      region: 'South',
      pctX: 28.2,
      pctY: 68.7,
      status: 'Operational Campus',
      modelType: 'IDPS Premium Campus',
      studentStrength: '1,490+ Students',
      affiliation: 'Cambridge / CBSE',
      address: 'Financial District, Gachibowli, Hyderabad',
      highlights: ['Smart AI Innovation Pod', 'Olympic-size Swimming Pool', 'Day Boarding']
    },
    {
      id: 'warangal',
      code: 'WA',
      name: 'IDPS Warangal Heritage Campus',
      city: 'Warangal',
      state: 'Telangana',
      region: 'South',
      pctX: 31.3,
      pctY: 66.9,
      status: 'Operational Campus',
      modelType: 'K-12 Model Campus',
      studentStrength: '880+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Hunter Road Corridor, Warangal',
      highlights: ['Digitized Science Discovery Hub', 'Montessori Zone']
    },
    {
      id: 'visakhapatnam',
      code: 'VI',
      name: 'IDPS Visakhapatnam Coastal Wing',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      region: 'South',
      pctX: 38.4,
      pctY: 68.0,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '970+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Madhurawada IT Corridor, Visakhapatnam',
      highlights: ['Ocean-view Green Campus', 'Robotics Wing', 'Smart Athletic Fields']
    },
    {
      id: 'vijayawada',
      code: 'VI',
      name: 'IDPS Vijayawada Capital Campus',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      region: 'South',
      pctX: 32.8,
      pctY: 71.9,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,150+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'MG Road Extension / Enikepadu, Vijayawada',
      highlights: ['Smart Classrooms', 'Composite STEM Lab', 'Auditorium']
    },

    // --- KARNATAKA ---
    {
      id: 'hubballi',
      code: 'HU',
      name: 'IDPS Hubballi-Dharwad Campus',
      city: 'Hubballi',
      state: 'Karnataka',
      region: 'South',
      pctX: 21.7,
      pctY: 75.8,
      status: 'Operational Campus',
      modelType: 'Middle Wing Model',
      studentStrength: '780+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Gokul Road Educational Hub, Hubballi',
      highlights: ['Smart Activity Rooms', 'Science Discovery Centre', 'Digital Smart Boards']
    },
    {
      id: 'ballari',
      code: 'BA',
      name: 'IDPS Ballari Mining Valley Campus',
      city: 'Ballari',
      state: 'Karnataka',
      region: 'South',
      pctX: 25.1,
      pctY: 75.8,
      status: 'Operational Campus',
      modelType: 'Exclusive Primary Wing',
      studentStrength: '690+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Cantonment Main Road, Ballari',
      highlights: ['Montessori Hub', 'Kid Swimming Splash Pool', 'Language Lab']
    },
    {
      id: 'karnataka-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Belagavi & Koppal Expansion',
      city: 'Belagavi / Koppal',
      state: 'Karnataka',
      region: 'South',
      pctX: 23.4,
      pctY: 79.4,
      status: 'Franchise Opportunity Open',
      modelType: 'Turnkey 90-Day Setup',
      affiliation: 'Territory Available',
      address: 'National Highway Connectivity Zone',
      highlights: ['Turnkey Architectural Blueprints Provided']
    },
    {
      id: 'mangaluru',
      code: 'MA',
      name: 'IDPS Mangaluru Coastal Campus',
      city: 'Mangaluru',
      state: 'Karnataka',
      region: 'South',
      pctX: 21.5,
      pctY: 84.4,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '860+ Students',
      affiliation: 'CBSE / Cambridge',
      address: 'Kadri Hills Educational Zone, Mangaluru',
      highlights: ['Oceanic Coastal Campus', 'Robotics Lab', 'AC Transport']
    },
    {
      id: 'bengaluru',
      code: 'BE',
      name: 'IDPS Bengaluru North Tech Campus',
      city: 'Bengaluru',
      state: 'Karnataka',
      region: 'South',
      pctX: 27.0,
      pctY: 83.0,
      status: 'Operational Campus',
      modelType: 'K-12 International Wing',
      studentStrength: '1,420+ Students',
      affiliation: 'Cambridge / CBSE',
      address: 'Thanisandra Main Road, North Bengaluru',
      highlights: ['Design Thinking Studio', 'Makerspace Lab', 'Indoor Heated Pool']
    },
    {
      id: 'mysuru',
      code: 'MY',
      name: 'IDPS Mysuru Heritage Wing',
      city: 'Mysuru',
      state: 'Karnataka',
      region: 'South',
      pctX: 25.1,
      pctY: 86.8,
      status: 'Operational Campus',
      modelType: 'IDPS of Excellence',
      studentStrength: '870+ Students',
      affiliation: 'CBSE Pattern',
      address: 'Bannur Ring Road, Mysuru',
      highlights: ['Fine Arts Conservatory', 'Equestrian Training', 'Smart Cafeteria']
    },

    // --- TAMIL NADU & KERALA ---
    {
      id: 'chennai',
      code: 'CH',
      name: 'IDPS Chennai Metro Campus',
      city: 'Chennai',
      state: 'Tamil Nadu',
      region: 'South',
      pctX: 32.5,
      pctY: 82.6,
      status: 'Operational Campus',
      modelType: 'K-12 Flagship Campus',
      studentStrength: '1,250+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'OMR IT Corridor, Sholinganallur, Chennai',
      highlights: ['Robotics Academy', 'International Tie-ups', 'Day Boarding']
    },
    {
      id: 'coimbatore',
      code: 'CO',
      name: 'IDPS Coimbatore Textile City Campus',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      region: 'South',
      pctX: 26.3,
      pctY: 91.2,
      status: 'Operational Campus',
      modelType: 'K-12 Model Campus',
      studentStrength: '890+ Students',
      affiliation: 'CBSE Affiliated',
      address: 'Avinashi Road, Peelamedu, Coimbatore',
      highlights: ['Full Athletic Synthetic Track', 'Science Labs', 'Auditorium']
    },
    {
      id: 'kochi',
      code: 'KO',
      name: 'IDPS Kochi Port City Campus',
      city: 'Kochi',
      state: 'Kerala',
      region: 'South',
      pctX: 24.6,
      pctY: 94.5,
      status: 'Operational Campus',
      modelType: 'IDPS International Wing',
      studentStrength: '840+ Students',
      affiliation: 'Cambridge / CBSE',
      address: 'Kakkanad InfoPark Corridor, Kochi',
      highlights: ['Global NEP Curriculum', 'Biophilic Campus', 'Robotics Hub']
    },
    {
      id: 'tamilnadu-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Madurai & Tirunelveli Expansion',
      city: 'Madurai / Tirunelveli',
      state: 'Tamil Nadu',
      region: 'South',
      pctX: 28.0,
      pctY: 94.8,
      status: 'Franchise Opportunity Open',
      modelType: 'Exclusive Middle Wing',
      affiliation: 'Territory Available',
      address: 'Southern Tamil Nadu Corridor',
      highlights: ['High Parental Trust', 'Central Marketing Campaign Included']
    },
    {
      id: 'south-tip-plus',
      code: '+',
      isPlus: true,
      name: 'IDPS Thiruvananthapuram Expansion',
      city: 'Thiruvananthapuram',
      state: 'Kerala',
      region: 'South',
      pctX: 25.5,
      pctY: 98.8,
      status: 'Franchise Opportunity Open',
      modelType: 'Primary & Pre-School',
      affiliation: 'Territory Available',
      address: 'Technopark Corridor, Trivandrum',
      highlights: ['Pre-K to Grade 8 Turnkey Model']
    }
  ];

  // Filtering based on search and active tab
  const filteredPins = useMemo(() => {
    return branchPins.filter(pin => {
      const matchesSearch = searchQuery === '' || 
        pin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pin.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pin.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pin.code.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'all' 
        || (activeTab === 'operational' && pin.status === 'Operational Campus')
        || (activeTab === 'expansion' && pin.status === 'Franchise Opportunity Open');

      return matchesSearch && matchesTab;
    });
  }, [branchPins, searchQuery, activeTab]);

  const activeBranch = useMemo(() => {
    return branchPins.find(b => b.id === selectedBranchId) || filteredPins[0] || branchPins[0];
  }, [selectedBranchId, filteredPins, branchPins]);

  const handleSelectBranch = (id: string) => {
    setSelectedBranchId(id);
  };

  return (
    <section id="our-schools" className="py-8 sm:py-10 bg-[#DFE7E1] text-[#071C12] border-b border-[#BACBBF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* TOP TITLE STRIP */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CEDBD0] border border-[#BACBBF] rounded-full text-[11px] font-bold uppercase tracking-wider text-[#053B24] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A232]" />
              <span>Pan-India Presence • 35+ Campuses Across 15+ States</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#071C12] mt-2 tracking-tight">
              Our Schools &amp; Branch Network Across India
            </h2>
            <p className="text-[#213F2F] text-xs sm:text-sm mt-1 max-w-2xl font-light">
              Explore our nationwide footprint. Click any circular branch pin or expansion badge on the India map to inspect campus details.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#CEDBD0] p-1 rounded-xl border border-[#BACBBF] shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-[#004D2C] text-white shadow-xs' : 'text-[#213F2F] hover:text-[#071C12]'
              }`}
            >
              All Hubs ({branchPins.length})
            </button>
            <button
              onClick={() => setActiveTab('operational')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'operational' ? 'bg-[#004D2C] text-white shadow-xs' : 'text-[#213F2F] hover:text-[#071C12]'
              }`}
            >
              Operational Campuses (23)
            </button>
            <button
              onClick={() => setActiveTab('expansion')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'expansion' ? 'bg-[#004D2C] text-white shadow-xs' : 'text-[#213F2F] hover:text-[#071C12]'
              }`}
            >
              Expansion Zones (10)
            </button>
          </div>
        </div>

        {/* MAIN SPLIT CONTAINER: INDIA MAP (LEFT) & DIRECTORY LIST (RIGHT) */}
        <div className="bg-[#F4F7F5] rounded-3xl border border-[#BACBBF] shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* LEFT 7-8 COLS: THE AUTHENTIC INDIA MAP (EXACTLY MATCHES SCREENSHOT) */}
          <div className="lg:col-span-8 bg-[#e5e7eb] p-4 sm:p-6 relative flex flex-col justify-between select-none border-b lg:border-b-0 lg:border-r border-slate-300 overflow-hidden">
            
            {/* Map Top Indicator / Legend */}
            <div className="flex items-center justify-between text-xs text-slate-600 pb-2 z-10 border-b border-slate-300/80 mb-2">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 font-bold text-[11px] text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-amber-400 border border-slate-900 text-slate-900 text-[10px] font-black flex items-center justify-center shadow-xs">★</span>
                  <span>HQ Secretariat</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[11px] text-[#0f244a]">
                  <span className="w-5 h-5 rounded-full bg-[#0b2347] border-2 border-[#ea580c] text-white text-[9px] font-black flex items-center justify-center shadow-xs">LU</span>
                  <span>Operational City Hubs</span>
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[11px] text-[#ea580c]">
                  <span className="w-5 h-5 rounded-full bg-white border-2 border-dashed border-[#ea580c] text-[#ea580c] text-[10px] font-black flex items-center justify-center shadow-xs">+</span>
                  <span>Franchise Expansion</span>
                </span>
              </div>

              <span className="hidden sm:inline-block text-[11px] text-slate-500 font-medium">
                Click any pin to inspect
              </span>
            </div>

            {/* MAP CONTAINER WITH AUTHENTIC CROPPED MAP AS BASE IMAGE + INTERACTIVE PIN HOTSPOTS */}
            <div className="relative w-full max-w-[800px] mx-auto my-auto aspect-[838/559] select-none rounded-xl overflow-hidden shadow-xs">
              
              {/* Authentic Map Image */}
              <img 
                src="/assets/idps-india-map.png" 
                alt="IDPS Pan-India Campuses Map"
                className="w-full h-full object-contain pointer-events-none"
              />

              {/* Interactive Hotspot Overlay Pins */}
              {filteredPins.map((pin) => {
                const isSelected = pin.id === activeBranch.id;
                const isHovered = pin.id === hoveredBranchId;

                return (
                  <div
                    key={pin.id}
                    style={{ left: `${pin.pctX}%`, top: `${pin.pctY}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                    onClick={() => handleSelectBranch(pin.id)}
                    onMouseEnter={() => setHoveredBranchId(pin.id)}
                    onMouseLeave={() => setHoveredBranchId(null)}
                  >
                    {/* Pulsing Beacon / Animated selection ring */}
                    {(isSelected || isHovered) && (
                      <span 
                        className={`absolute inset-0 rounded-full animate-ping pointer-events-none ${
                          pin.isStar ? 'bg-amber-400/60' : pin.isPlus ? 'bg-orange-500/50' : 'bg-blue-400/60'
                        }`}
                        style={{ margin: '-7px' }}
                      />
                    )}

                    {/* Circular Hit Target Ring */}
                    <div 
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-150 ${
                        isSelected 
                          ? 'ring-4 ring-amber-400 ring-offset-2 ring-offset-white scale-125 z-30 shadow-lg' 
                          : isHovered 
                            ? 'scale-115 ring-2 ring-amber-300 shadow-md' 
                            : 'opacity-0 hover:opacity-100 bg-white/20'
                      }`}
                      title={`${pin.city} - ${pin.name}`}
                    >
                      {/* Sub-label badge for selected pin */}
                      {isSelected && (
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-xs" />
                      )}
                    </div>

                    {/* Interactive Tooltip on Hover / Focus */}
                    {isHovered && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-slate-900/95 backdrop-blur-md text-white rounded-lg shadow-xl text-left pointer-events-none z-50 text-[11px] leading-tight border border-slate-700 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-bold text-amber-400 truncate">{pin.city}</span>
                          <span className="text-[9px] uppercase px-1 rounded bg-white/10 font-mono text-slate-300">
                            {pin.code}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-300 line-clamp-2">
                          {pin.name}
                        </div>
                        <div className="mt-1 text-[9px] text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>{pin.status}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* QUICK ACTIVE BRANCH INSPECTION CARD (BELOW MAP) */}
            <div className="mt-3 bg-[#E9EFEA] rounded-2xl border border-[#BACBBF] p-3 sm:p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                    activeBranch.isStar 
                      ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                      : activeBranch.isPlus
                        ? 'bg-orange-100 text-orange-900 border border-orange-300'
                        : 'bg-[#DCE6DE] text-[#053B24] border border-[#BACBBF]'
                  }`}>
                    {activeBranch.code} • {activeBranch.status}
                  </span>
                  <span className="text-xs font-bold text-[#4A6E59]">
                    {activeBranch.state}
                  </span>
                  <span className="text-xs text-[#BACBBF]">•</span>
                  <span className="text-xs text-[#004D2C] font-semibold">
                    {activeBranch.affiliation}
                  </span>
                </div>

                <h3 className="font-heading font-black text-[#071C12] text-base sm:text-lg">
                  {activeBranch.name}
                </h3>
                
                {activeBranch.address && (
                  <p className="text-xs text-[#2A4B38] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#004D2C] shrink-0" />
                    <span>{activeBranch.address}</span>
                  </p>
                )}

                {activeBranch.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeBranch.highlights.map((h, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#DFE7E1] text-[#071C12] rounded text-[10px] font-medium border border-[#BACBBF]">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-end">
                <button
                  onClick={() => onOpenApplyModal(activeBranch.id)}
                  className="px-4 py-2 bg-[#004D2C] hover:bg-[#025A36] text-white rounded-xl text-xs font-bold font-mono tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire / Apply</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5B842]" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT 4-5 COLS: CLEAN SCROLLABLE DIRECTORY LIST */}
          <div className="lg:col-span-4 flex flex-col h-full bg-[#F4F7F5]">
            
            {/* Search Header */}
            <div className="p-4 border-b border-[#BACBBF] space-y-3 bg-[#E9EFEA]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-[#071C12]">
                  Campus Directory ({filteredPins.length})
                </span>
                <span className="text-[11px] text-[#4A6E59] font-medium">
                  {activeTab === 'all' ? 'Pan-India Network' : activeTab === 'operational' ? 'Operational Only' : 'Expansion Territories'}
                </span>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-[#4A6E59] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city, state or hub..."
                  className="w-full pl-9 pr-8 py-2 bg-[#F4F7F5] border border-[#BACBBF] rounded-xl text-xs text-[#071C12] placeholder:text-[#4A6E59] focus:outline-hidden focus:border-[#004D2C] focus:ring-1 focus:ring-[#004D2C] transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4A6E59] hover:text-[#071C12]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Campus Cards List */}
            <div ref={listRef} className="flex-1 overflow-y-auto divide-y divide-[#CEDBD0] max-h-[620px]">
              {filteredPins.length === 0 ? (
                <div className="p-8 text-center text-[#4A6E59] text-xs">
                  No campuses or expansion zones found matching "{searchQuery}".
                </div>
              ) : (
                filteredPins.map((branch) => {
                  const isSelected = branch.id === activeBranch.id;

                  return (
                    <div
                      key={branch.id}
                      onClick={() => handleSelectBranch(branch.id)}
                      className={`p-4 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-[#DCE6DE] border-l-4 border-[#004D2C]' 
                          : 'hover:bg-[#E9EFEA]'
                      }`}
                    >
                      <div className="space-y-0.5 min-w-0">
                        {/* Bold City Title as in screenshot */}
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-black text-[#071C12] text-sm sm:text-base tracking-tight truncate">
                            {branch.city}
                          </h4>
                          {branch.isStar && (
                            <span className="text-[10px] font-black px-1.5 py-0.2 bg-amber-400 text-slate-900 rounded font-mono">
                              HQ
                            </span>
                          )}
                        </div>

                        {/* State subtitle as in screenshot */}
                        <p className="text-xs text-[#4A6E59] truncate">
                          {branch.city}, {branch.state}
                        </p>

                        <div className="flex items-center gap-2 pt-1 text-[11px]">
                          <span className="text-[#2A4B38] font-medium truncate max-w-[200px]">
                            {branch.modelType}
                          </span>
                        </div>
                      </div>

                      {/* Right 2-letter Badge or Plus Symbol */}
                      <div className="shrink-0 flex items-center">
                        {branch.isStar ? (
                          <div className="w-7 h-7 rounded-full bg-amber-400 border border-slate-900 text-slate-900 text-xs font-black flex items-center justify-center shadow-xs">
                            ★
                          </div>
                        ) : branch.isPlus ? (
                          <div className="w-6 h-6 rounded-full bg-white border border-dashed border-[#ea580c] text-[#ea580c] text-xs font-black flex items-center justify-center shadow-2xs">
                            +
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-[#0b2347] border border-[#ea580c] text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                            {branch.code}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* List Footer Callout */}
            <div className="p-3.5 bg-[#E9EFEA] border-t border-[#BACBBF] text-center">
              <p className="text-[11px] text-[#213F2F] mb-2 font-medium">
                Want to bring an IDPS School to your city or territory?
              </p>
              <button
                onClick={() => onOpenApplyModal()}
                className="w-full py-2.5 bg-[#004D2C] hover:bg-[#025A36] text-white rounded-xl text-xs font-bold font-mono tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>Apply for Franchise Territory</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
