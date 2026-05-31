'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // အောက်ဘက်ကို Pixel 400 လောက် ရောက်မှ Button ကို ပြမည်
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // အပေါ်ဆုံးကို Smooth ဖြစ်ဖြစ် ပြန်တက်မည်
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] p-3 md:p-4 rounded-full bg-[#091830] dark:bg-[#62FFD7] text-white dark:text-[#091830] shadow-lg dark:shadow-[0_0_20px_rgba(98,255,215,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group focus:outline-none"
          aria-label="Back to top"
        >
          {/* Arrow Up Icon */}
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}