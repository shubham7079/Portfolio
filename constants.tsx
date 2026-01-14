
import { Project, Certification } from './types';

export const COLORS = {
  primary: '#f59e0b', 
  secondary: '#0f172a', 
  background: '#fafaf9', 
  text: '#1e293b' 
};

export const CONTACT_INFO = {
  email: 'shubham7079@gmail.com',
  phone: '+91 8882079707',
  github: 'https://github.com/shubham7079',
  linkedin: 'https://linkedin.com/in/shubham-singh-586526267',
  netlify: 'https://app.netlify.com/user/settings',
  resume: 'https://raw.githubusercontent.com/shubham7079/shubham7079/main/resume.pdf' // Update this URL to your actual resume file
};


export const PROFILE_IMAGE = "https://raw.githubusercontent.com/shubham7079/shubham7079/main/profile.jpg";

export const PROJECTS: Project[] = [
   {
    id: 'portfolio2026',
    title: 'ARCHITECT PORTFOLIO',
    hook: "A high-performance, AI-integrated digital experience designed for 2026 recruiter standards.",
    timeline: 'Feb - Mar 2025',
    role: 'Lead Engineer & Designer',
    problem: "Static portfolios fail to demonstrate the interactive depth and AI-readiness required by modern high-growth tech firms.",
    thinking: "I treated this as a 'Product' rather than a 'Page'. Every transition follows a specific kinetic curve, and the AI agent provides a 24/7 technical screening interface.",
    techChoices: "React 19 for the cutting-edge ecosystem. Framer Motion for layout animations. Gemini 3 for context-aware resume interaction. Tailwind for systematic styling.",
    challenges: "Synchronizing a custom spring-based cursor with complex layout shifts while maintaining a 100/100 Lighthouse performance score.",
    results: "Achieved zero layout shift (CLS) and sub-1s Largest Contentful Paint (LCP). Integrated a fully functional LLM-based screening assistant.",
    learnings: "Deepened mastery of React 19 concurrent features and the 'Premium' motion language used in top-tier SAAS products.",
    techStack: ['React 19', 'Framer Motion', 'Gemini 3', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/shubham7079/shubham-portfolio-2026',
    live: 'https://shubhamsportfolio00.netlify.app/',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'food2door',
    title: 'FOOD2DOOR',
    hook: "A mission-critical food delivery infrastructure built for scale and seamless user journeys.",
    timeline: 'Aug - Oct 2024',
    role: 'Solo Developer (Full Stack)',
    problem: "Local delivery solutions often suffer from high order abandonment due to friction-heavy checkout and opaque delivery states.",
    thinking: "I prioritized a \"Store-First\" architecture. Instead of a generic e-commerce flow, I focused on reducing the \"Time to Order\" metric by optimizing the menu-to-cart transition.",
    techChoices: "MERN Stack. MongoDB was chosen for its flexible schema (perfect for varied restaurant menus). Node/Express provided the low-latency I/O needed for real-time order updates.",
    challenges: "Ensuring atomicity in order placements. I solved this by implementing robust database transactions and a custom JWT-based authentication layer that prevents session hijacking.",
    results: "Reduced checkout friction by 30% via optimized UI flow. Successfully simulated 500+ concurrent orders with zero data inconsistency.",
    learnings: "Mastered the complexity of managing multi-role states (Admin, Vendor, User) in a unified database.",
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'TailwindCSS'],
    github: 'https://github.com/shubham7079/FOODTODOOR.git',
    live: 'https://github.com/shubham7079/FOODTODOOR.git',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'grocerymart',
    title: 'Grocerymart CRM',
    hook: "A high-efficiency Customer Relationship Management system for retail automation.",
    timeline: 'Dec 2024 - Jan 2025',
    role: 'Full Stack Developer',
    problem: "Small-scale grocers struggle with fragmented customer data, manual billing errors, and lack of insights into purchasing patterns.",
    thinking: "I developed a centralized CRM focused on data integrity and ease of use. The UI was designed to minimize the learning curve for non-technical retail staff.",
    techChoices: "MERN stack. Used Chart.js for administrative dashboards to visualize sales growth and customer retention metrics.",
    challenges: "Handling complex sales reports and data filtering. I optimized MongoDB aggregation pipelines to provide real-time reporting without slowing down the server.",
    results: "Centralized 1,000+ customer profiles. Reduced manual billing time by 25% through an automated inventory sync.",
    learnings: "Deepened expertise in role-based access control (RBAC) and complex data aggregation.",
    techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'Chart.js', 'Bootstrap'],
    github: 'https://github.com/shubham7079/GroceryMart-CRM.git',
    live: 'https://grocerymartdoor.netlify.app/',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vibestream',
    title: 'Vibestream Music',
    hook: "A high-fidelity audio engine focused on performance and UX continuity.",
    timeline: 'Jan - Feb 2025',
    role: 'Frontend Architect',
    problem: "Standard web audio players often fail to maintain playback state across network shifts and device rotations.",
    thinking: "I treated the music player as a state-machine. Every interaction (play, pause, skip) is a transition that must be reflected across the entire UI instantly.",
    techChoices: "React.js with custom Hooks for audio logic. TailwindCSS allowed for a mobile-first, glassmorphic UI that feels native.",
    challenges: "Audio buffering synchronization. I implemented a pre-fetching strategy that loads the next track metadata and partial audio data while the current song plays.",
    results: "98+ Lighthouse score. Zero layout shift (CLS) during track transitions. Enhanced mobile engagement by 40% through gesture-based controls.",
    learnings: "Gained deep insights into the Web Audio API and the importance of performance-first frontend engineering.",
    techStack: ['React.js', 'Web Audio API', 'JavaScript', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/shubham7079/Vibestream_Music-Player.git',
    live: 'https://vibestreammusic.netlify.app/',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'goaltracker',
    title: 'GoalTracker',
    hook: "Gamified productivity system turning mundane habits into a competitive RPG experience.",
    timeline: 'Nov - Dec 2024',
    role: 'Full Stack Developer',
    problem: "Productivity tools usually lack the long-term dopamine loop required to keep users engaged beyond the first week.",
    thinking: "I integrated a \"Level-Up\" system where every successful streak contributes to a global XP pool. This gamification turns discipline into a game.",
    techChoices: "MongoDB for persistent storage of habit histories. Redux Toolkit was essential for managing the complex global XP and streak state.",
    challenges: "Handling timezone-agnostic streak calculations. I engineered a UTC-based validation logic to ensure streaks don't break when users travel.",
    results: "Tested with 20+ users; saw a 50% increase in daily habit completion compared to static todo apps. Integrated real-time progress bars.",
    learnings: "Learned how to design schemas for time-series data (habit history) and the power of gamification in UX.",
    techStack: ['MERN Stack', 'Redux Toolkit', 'TailwindCSS', 'Bcrypt.js'],
    github: 'https://github.com/shubham7079/GoalTracker.git',
    live: 'https://allgoalstracker.netlify.app/',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop'
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Job Ready Cohort (MERN + DevOps + DSA)', issuer: 'Sheryians Coding School', date: 'Dec 2025' },
  { title: 'AI Tools Workshop (Generative AI & Data)', issuer: 'be10x', date: 'Jan 2026' },
  { title: 'Full Stack Web Development MERN', issuer: 'Udemy', date: '2024' },
  { title: 'SQL for Data Analytics', issuer: 'Udemy', date: '2024' }
];

export const RESUME_SUMMARY = `
Shubham Singh is a high-impact Full Stack MERN Developer from Faridabad, India. 
Contact: shubham7079@gmail.com | Phone: +91 8882079707.
Education: Pursuing BCA at Uttaranchal University (2022-2025). 
Core Strengths: Building scalable web architectures, user-centric design, and performance optimization. 
Netlify Profile: https://app.netlify.com/user/settings
Top Projects: 
1. Architect Portfolio 2026: A flagship React 19 project featuring AI integration and high-fidelity Framer Motion work.
2. FOOD2DOOR: Full-stack delivery app with Razorpay integration and 500+ order simulation. 
3. Grocerymart: Retail CRM system for automating customer data and reporting.
4. Vibestream: Performance-tuned React music player (Lighthouse 98+). 
5. GoalTracker: Gamified productivity tool with Redux and MongoDB. 
Vibe: Analytical, results-driven, disciplined (Badminton/Chess mindset).
`;
