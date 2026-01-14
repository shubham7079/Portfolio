
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO, PROFILE_IMAGE } from '../constants';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
];

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hireMeOpen, setHireMeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjusted for mobile height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleInquireClick = () => {
    setMobileMenuOpen(false);
    setHireMeOpen(true);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-4 md:px-6 py-4 md:py-5 ${
          isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-stone-200 dark:border-slate-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2 md:space-x-3 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-amber-500 p-0.5 overflow-hidden bg-white dark:bg-slate-800">
              <img src={PROFILE_IMAGE} className="w-full h-full object-cover rounded-full" alt="Shubham Singh" />
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-black text-sm md:text-lg tracking-tighter text-slate-900 dark:text-white uppercase">Shubham Singh</span>
              <span className="text-[6px] md:text-[8px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">Engineering // 2026</span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-3 bg-stone-100 dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:bg-amber-500 hover:text-white transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 7.757l.707-.707" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <motion.button 
              onClick={() => setHireMeOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl"
            >
              Inquire
            </motion.button>
          </div>

          <div className="flex items-center space-x-1 md:hidden">
             <motion.button 
                onClick={() => setHireMeOpen(true)}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-white px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg mr-1"
              >
                Inquire
              </motion.button>

             <button 
                onClick={toggleTheme}
                className="p-2 text-slate-500 dark:text-slate-400"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 7.757l.707-.707" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
              <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-slate-900 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
          </div>
        </div>
      </nav>

      {/* Hire Me Modal */}
      <AnimatePresence>
        {hireMeOpen && (
          <ModalWrapper onClose={() => setHireMeOpen(false)} title="CONNECTION_HUB">
            <div className="p-8 md:p-16 flex flex-col items-center text-center bg-white dark:bg-slate-900">
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-amber-500 p-1 mb-6 md:mb-10 overflow-hidden shadow-2xl">
                 <img src={PROFILE_IMAGE} className="w-full h-full object-cover rounded-full" alt="Shubham Singh" />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tighter">Ready for Impact.</h3>
              <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-light mb-8 md:mb-12 max-w-xs md:max-w-sm">I'm currently scouting for high-impact Full Stack opportunities.</p>
              
              <div className="w-full space-y-3 md:space-y-4 mb-6 md:mb-8">
                 <a href={`mailto:${CONTACT_INFO.email}`} className="block w-full py-4 md:py-6 rounded-2xl md:rounded-3xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 font-black text-[10px] md:text-xs uppercase tracking-widest hover:border-amber-500 transition-colors text-slate-900 dark:text-white">{CONTACT_INFO.email}</a>
                 <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="block w-full py-4 md:py-6 rounded-2xl md:rounded-3xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 font-black text-[10px] md:text-xs uppercase tracking-widest hover:border-amber-500 transition-colors text-slate-900 dark:text-white">{CONTACT_INFO.phone}</a>
              </div>

              <motion.a 
                href={CONTACT_INFO.resume} 
                download="Shubham_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-500 text-white py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(245,158,11,0.3)] mb-8 md:mb-12 text-center block"
              >
                Download Full Resume
              </motion.a>
              
              <div className="flex gap-3 md:gap-4 w-full">
                <a href={CONTACT_INFO.linkedin} target="_blank" className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-xl text-center">LinkedIn</a>
                <a href={CONTACT_INFO.github} target="_blank" className="flex-1 bg-stone-100 dark:bg-slate-800 text-slate-900 dark:text-white py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-widest text-center">GitHub</a>
              </div>
            </div>
          </ModalWrapper>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-md" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 z-[71] w-full max-w-sm bg-white dark:bg-slate-900 p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.2)]">
               <button onClick={() => setMobileMenuOpen(false)} className="self-end p-3 rounded-full bg-stone-100 dark:bg-slate-800 mb-12">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" /></svg>
               </button>
               
               <div className="flex flex-col gap-8">
                 {navLinks.map(l => (
                   <a 
                     key={l.name} 
                     href={`#${l.id}`} 
                     onClick={(e) => handleNavClick(e, l.id)} 
                     className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase hover:text-amber-500 transition-colors"
                   >
                     {l.name}
                   </a>
                 ))}
                 <button 
                   onClick={handleInquireClick}
                   className="text-4xl font-black text-amber-500 tracking-tighter uppercase text-left"
                 >
                   Inquire
                 </button>
               </div>

               <div className="mt-auto space-y-4">
                 <a 
                  href={CONTACT_INFO.resume}
                  download
                  className="block text-[8px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                 >
                   Download Resume
                 </a>
                 <div className="h-px w-full bg-stone-100 dark:bg-slate-800"></div>
                 <div className="flex gap-4">
                    <a href={CONTACT_INFO.github} target="_blank" className="text-[9px] font-black uppercase tracking-widest text-slate-400">GH</a>
                    <a href={CONTACT_INFO.linkedin} target="_blank" className="text-[9px] font-black uppercase tracking-widest text-slate-400">LI</a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[9px] font-black uppercase tracking-widest text-slate-400">ML</a>
                 </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const ModalWrapper: React.FC<{ children: React.ReactNode, onClose: () => void, title: string }> = ({ children, onClose, title }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl pointer-events-auto" />
    <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto z-[101] max-h-[95vh] flex flex-col">
      <div className="p-4 md:p-8 border-b border-stone-100 dark:border-slate-800 flex justify-between items-center bg-stone-50 dark:bg-slate-900/50">
        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] text-slate-400">{title}</span>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6" /></svg></button>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </motion.div>
  </div>
);

export default Navbar;

