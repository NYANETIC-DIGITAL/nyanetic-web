'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';
import FeaturedWorksSection from '@/components/FeaturedWorksSection';
import ProcessSection from '@/components/ProcessSection';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="relative flex flex-col bg-slate-50 dark:bg-[#091830] overflow-hidden selection:bg-[#62FFD7] selection:text-[#091830] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full items-start text-left">
        
        {/* Glow Effects */}
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#62FFD7] opacity-[0.05] dark:opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="z-10 flex flex-col items-start w-full max-w-4xl mt-10">
          
          {/* Borderless Tagline */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-sm mb-6 block"
          >
            Your Trusted Technology Partner
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-5xl md:text-7xl lg:text-[85px] font-black tracking-tighter text-gray-900 dark:text-white mb-8 leading-[1.05]">
            Elevate to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">Digital Peak.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            We replace legacy systems with cutting-edge Web/App technologies, streamline operations with AI automation, and craft bold branding to drive <strong className="text-gray-900 dark:text-white font-semibold">Real ROI</strong>.
          </motion.p>

          {/* CTA Button (Goes to Services) */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#091830] dark:bg-[#62FFD7] text-white dark:text-[#091830] font-bold text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(98,255,215,0.4)] hover:-translate-y-1"
            >
              Explore Solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </motion.div>
          
        </div>

        {/* Modern Scroll Down Arrow Animation (Bottom Right) */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
          className="absolute bottom-10 right-6 md:right-12 lg:right-20 flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase rotate-90 mb-6 origin-center text-gray-400 dark:text-[#62FFD7]/70">Scroll</span>
          <svg className="w-4 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20m0 0l-5-5m5 5l5-5"></path>
          </svg>
        </motion.div>

      </section>

      {/* Services Section */}
      <ServicesSection />
      {/* Featured Works / Portfolio Section */}
      <FeaturedWorksSection />
      {/* Process Section */}
      <ProcessSection />
      {/* Tech Stack Section */}
      <TechStackSection />
      {/* About Section */}
      <AboutSection />
      {/* Testimonials Section
       */}
      <TestimonialsSection />

    </main>
  );
}