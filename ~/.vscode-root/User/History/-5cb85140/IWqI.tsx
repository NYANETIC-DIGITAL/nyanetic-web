'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<'EN' | 'ဗမာ'>('EN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLang = () => setLang(lang === 'EN' ? 'ဗမာ' : 'EN');

  const SocialLinks = () => (
    <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300">
      {/* Facebook */}
      <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg></a>
      {/* LinkedIn */}
      <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
      {/* X (Twitter) */}
      <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.24 2.25h3.3l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23zM16.9 20.15h1.83L7.08 4.13H5.12z"/></svg></a>
      {/* Telegram */}
      <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.2-.02-.28 0-.12.03-1.98 1.25-5.58 3.63-.53.36-1 .54-1.42.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.23.36-.47 1-.72 3.93-1.71 6.55-2.84 7.86-3.38 3.74-1.54 4.51-1.81 5.01-1.82.11 0 .35.03.48.14.11.09.14.22.15.34-.01.03-.01.07-.02.11z"/></svg></a>
    </div>
  );

  return (
    // Full width sleek header with matching body margins inside
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#091830]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm py-4' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Now perfectly aligned with below sections */}
<Link href="/" className="flex items-center">
  {/* public folder ထဲက logo.png ကို လှမ်းခေါ်ခြင်း */}
  {/* Nyanetic ရဲ့ အမိုက်စား Text Logo (ပုံမလိုပါ) */}
  <span className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 dark:text-white transition-colors duration-300">
    NYA<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35] dark:from-[#62FFD7] dark:to-[#00B4D8]">NETIC</span>
  </span>
</Link>
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8 mr-4">
              {['Services', 'Work', 'About'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-900 dark:text-gray-200 hover:text-[#A5841C] dark:hover:text-[#62FFD7] text-[13px] font-bold uppercase tracking-widest transition-colors">
                  {lang === 'EN' ? item : item === 'Services' ? 'ဝန်ဆောင်မှုများ' : item === 'Work' ? 'အလုပ်များ' : 'အကြောင်း'}
                </Link>
              ))}
            </div>
            
            <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-700"></div>

            <button onClick={toggleLang} className="text-[13px] font-black text-gray-900 dark:text-gray-200 hover:text-[#A5841C] dark:hover:text-[#62FFD7] w-6 transition-colors">{lang}</button>
            
            <button onClick={toggleTheme} className="text-gray-900 dark:text-white hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors">
              {isDark ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> : 
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>}
            </button>

            <SocialLinks />
          </div>

          {/* Mobile Hamburger (Asymmetrical X) */}
          <div className="lg:hidden flex items-center z-[60]">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="relative w-8 h-8 text-gray-900 dark:text-white outline-none"
            >
              <span className={`absolute right-0 h-[2px] bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 top-[15px] rotate-45 origin-[70%_center]' : 'w-6 top-[10px]'}`}></span>
              <span className={`absolute right-0 h-[2px] bg-current transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-6 top-[15px] -rotate-45 origin-[70%_center]' : 'w-4 top-[18px]'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full lg:hidden px-4 mt-2">
            <div className="bg-white/95 dark:bg-[#091830]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6">
              {['Services', 'Work', 'About'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-[13px] font-bold text-gray-900 dark:text-white uppercase tracking-widest">
                  {lang === 'EN' ? item : item === 'Services' ? 'ဝန်ဆောင်မှုများ' : item === 'Work' ? 'အလုပ်များ' : 'အကြောင်း'}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <button onClick={toggleLang} className="text-[13px] font-black text-gray-900 dark:text-white">{lang}</button>
                  <button onClick={toggleTheme} className="text-gray-900 dark:text-white">
                    {isDark ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> : 
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>}
                  </button>
                </div>
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}