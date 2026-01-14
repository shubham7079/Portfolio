
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, CONTACT_INFO, PROFILE_IMAGE } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);

    const isDark = localStorage.getItem('theme') === 'dark' || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-white bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-stone-50 transition-colors duration-500 overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor hidden md:block border-amber-500 dark:border-amber-400"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      
      <Navbar toggleTheme={toggleTheme} isDarkMode={darkMode} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center space-x-3 mb-8 md:mb-12">
            <span className="h-px w-8 md:w-12 bg-amber-500"></span>
            <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.4em] text-slate-400 dark:text-slate-500">Engineering Impact // 2026</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-12 md:mb-16 text-slate-900 dark:text-white">
            Architecting <br />
            <span className="text-amber-500 serif-italic">Scale.</span>
          </h1>
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <p className="text-xl md:text-3xl lg:text-4xl text-slate-500 dark:text-slate-400 font-light leading-snug tracking-tight max-w-3xl">
                Shubham Singh is a <span className="text-slate-900 dark:text-white font-medium italic underline decoration-amber-500/30 decoration-4">Full Stack Engineer</span> dedicated to performance-first web infrastructure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ambient background blur */}
        <div className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-500/10 blur-[100px] md:blur-[150px] -z-10 rounded-full"></div>
      </section>

      {/* About / Profile Section */}
      <section id="about" className="py-24 md:py-40 bg-white dark:bg-slate-900 px-6 border-y border-stone-100 dark:border-slate-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-stone-100 dark:bg-slate-800 shadow-2xl relative z-10">
              <img 
                src={PROFILE_IMAGE} 
                alt="Shubham Singh" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 font-bold">// 01_GENESIS</h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-none">
              Logic Meets <br/><span className="text-amber-500 serif-italic">Intuition.</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-10 md:mb-12">
              Currently pursuing BCA at Uttaranchal University, I bridge the gap between complex system design and aesthetic user interfaces. My background in chess drives my disciplined approach to code architecture.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
              <div className="p-6 md:p-8 bg-stone-50 dark:bg-slate-850 rounded-2xl md:rounded-3xl border border-stone-100 dark:border-slate-800">
                <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">30%</p>
                <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-slate-400 leading-tight">Reduced UX Friction</p>
              </div>
              <div className="p-6 md:p-8 bg-stone-50 dark:bg-slate-850 rounded-2xl md:rounded-3xl border border-stone-100 dark:border-slate-800">
                <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">98+</p>
                <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-slate-400 leading-tight">Lighthouse Perf</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {['MERN', 'Next.js', 'System Design', 'DevOps'].map(skill => (
                <span key={skill} className="px-3 md:px-5 py-1.5 md:py-2 rounded-full border border-stone-200 dark:border-slate-700 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-40 px-6 bg-stone-50 dark:bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-32">
            <h2 className="text-slate-400 dark:text-slate-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 font-bold">// 02_PORTFOLIO</h2>
            <h3 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white">Selected.</h3>
          </div>

          <div className="space-y-16 md:space-y-32">
            {PROJECTS.map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-24 md:py-40 bg-white dark:bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter">Stack.</h3>
            <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-4 md:mt-0">Verified 2026 Skills</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <SkillGroup title="Core Frontend" skills={['React 19', 'Next.js 15', 'Tailwind', 'Redux']} />
            <SkillGroup title="Robust Backend" skills={['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']} />
            <SkillGroup title="Platform" skills={['Docker', 'Git / GitHub', 'CI/CD']} />
            <SkillGroup title="Intelligence" skills={['Gemini 3', 'Prompt Eng.', 'Data Analysis',]} />
          </div>
        </div>
      </section>

      {/* Project Carousel Marquee */}
      <section className="py-20 bg-stone-50 dark:bg-slate-950 overflow-hidden border-y border-stone-200 dark:border-slate-800">
        <div className="mb-12 px-6 max-w-7xl mx-auto">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-2">Build Velocity</h4>
          <p className="text-slate-400 dark:text-slate-600 font-mono text-[8px] uppercase tracking-widest">A Continuous Flow of Engineering Solutions</p>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            className="flex whitespace-nowrap space-x-6 py-4 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 40, 
              repeat: Infinity 
            }}
          >
            {/* Double projects to create a seamless loop */}
            {[...PROJECTS, ...PROJECTS].map((project, idx) => (
              <motion.div 
                key={`${project.id}-${idx}`}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-video rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border border-stone-100 dark:border-slate-800 cursor-pointer"
                onClick={() => {
                   const el = document.getElementById('work');
                   if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[8px] font-mono uppercase tracking-widest text-amber-500 block mb-1">NODE_0{ (idx % PROJECTS.length) + 1 }</span>
                  <p className="font-black text-xl tracking-tighter uppercase">{project.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="contact" className="py-40 md:py-60 px-6 bg-slate-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter mb-8 md:mb-12 leading-none text-white">
              Scale <br />
              <span className="text-amber-500 serif-italic">Together.</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-400 font-light mb-12 md:mb-20 max-w-2xl mx-auto px-4">
              Open for high-growth engineering roles. Let's build the future of the web.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-6 sm:px-0">
              <motion.a 
                href={`mailto:${CONTACT_INFO.email}`} 
                whileHover={{ scale: 1.05 }}
                className="bg-amber-500 text-white px-8 md:px-16 py-6 md:py-8 rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] shadow-2xl"
              >
                Start Inquiry
              </motion.a>
              <motion.a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 text-white px-8 md:px-16 py-6 md:py-8 rounded-2xl md:rounded-[2rem] border border-white/10 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-stone-100 dark:border-slate-800 bg-stone-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">© 2026 SHUBHAM SINGH // DISCIPLINED ENGINEERING</div>
          <div className="flex space-x-8 md:space-x-12 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
             <a href={CONTACT_INFO.github} target="_blank" className="hover:text-amber-500 transition-colors">GitHub</a>
             <a href={CONTACT_INFO.linkedin} target="_blank" className="hover:text-amber-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
      
      <AIAssistant />
    </div>
  );
};

// --- Helper Components ---

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div 
      layout="position"
      className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-[2rem] md:rounded-[4rem] overflow-hidden group hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Visual Half */}
        <div className="lg:w-1/2 relative h-[350px] md:h-[500px] overflow-hidden">
          <motion.img 
            layoutId={`img-${project.id}`}
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span className="text-amber-500 font-mono text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] mb-3 md:mb-4 block">BUILD_0{index + 1}</span>
            <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{project.title}</h4>
          </div>
        </div>

        {/* Info Half */}
        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-between">
          <div>
            <p className="text-lg md:text-2xl font-light text-slate-500 dark:text-slate-400 leading-snug mb-8 md:mb-10 italic">"{project.hook}"</p>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
              {project.techStack.map(tag => (
                <span key={tag} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 bg-stone-50 dark:bg-slate-800/50 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-stone-100 dark:border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-2 md:space-y-4">
              <div className="flex justify-between items-center py-3 md:py-4 border-b border-stone-50 dark:border-slate-800">
                <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Context</span>
                <span className="text-[8px] md:text-[10px] font-black uppercase dark:text-white">{project.role}</span>
              </div>
              <div className="flex justify-between items-center py-3 md:py-4">
                <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</span>
                <span className="text-[8px] md:text-[10px] font-black uppercase dark:text-white">Live // Deployed</span>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
            <motion.button 
              onClick={() => setExpanded(!expanded)}
              whileHover={{ x: 5 }}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
            >
              {expanded ? 'Hide Logic' : 'Learn More'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
            <a href={project.github} target="_blank" className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-amber-500 transition-colors text-center py-2 sm:py-0">
              Repository
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-stone-100 dark:border-slate-800 bg-stone-50/50 dark:bg-slate-950/30 overflow-hidden"
          >
            <div className="p-8 md:p-16 lg:p-24 grid lg:grid-cols-2 gap-12 md:gap-20">
              <div className="space-y-8 md:space-y-12">
                <DetailBlock title="The Problem" content={project.problem} />
                <DetailBlock title="Architectural Thinking" content={project.thinking} />
                <DetailBlock title="Technical Choices" content={project.techChoices} />
              </div>
              <div className="space-y-8 md:space-y-12">
                <DetailBlock title="Critical Challenges" content={project.challenges} />
                <div className="p-8 md:p-12 bg-amber-500 rounded-[2rem] md:rounded-[3rem] text-white shadow-xl">
                  <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6 opacity-70">Quantified Impact</h5>
                  <p className="text-2xl md:text-4xl font-black tracking-tighter mb-4 leading-tight">{project.results}</p>
                  <p className="text-xs md:text-sm font-medium opacity-80 leading-relaxed">{project.learnings}</p>
                </div>
                <div className="flex">
                  <a href={project.live} target="_blank" className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-center py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-widest border border-stone-200 dark:border-slate-700 hover:border-amber-500 transition-all">Launch Production Node</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DetailBlock = ({ title, content }: { title: string, content: string }) => (
  <div>
    <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-3 md:mb-4">{title}</h5>
    <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">{content}</p>
  </div>
);

const SkillGroup = ({ title, skills }: { title: string, skills: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 md:p-10 bg-white dark:bg-slate-900 border border-stone-100 dark:border-slate-800 rounded-3xl md:rounded-[3rem] shadow-sm hover:shadow-xl transition-all"
  >
    <h4 className="text-amber-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 font-bold">{title}</h4>
    <ul className="space-y-4 md:space-y-6">
      {skills.map(s => (
        <li key={s} className="flex items-center space-x-3 md:space-x-4 group/skill">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover/skill:scale-150 transition-transform"></div>
          <span className="text-slate-700 dark:text-slate-300 font-bold text-xs md:text-sm tracking-tight">{s}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default App;
