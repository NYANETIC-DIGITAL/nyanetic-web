'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  const stats = [
    { id: 1, value: 'Next-Gen', label: 'Tech Stack' },
    { id: 2, value: 'Real ROI', label: 'Driven Focus' },
    { id: 3, value: 'Custom AI', label: 'Automations' },
    { id: 4, value: 'Premium', label: 'Brand Identity' },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto w-full relative z-20 px-6 md:px-12 lg:px-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4"
          >
            About Nyanetic
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6"
          >
            We engineer <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">digital dominance.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} 
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            Based in Yangon, Myanmar, we are not just another development agency. We are your strategic tech partners. We replace slow, outdated systems with blazing-fast modern architectures and streamline your business operations through custom AI integrations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#091830] dark:bg-white text-white dark:text-[#091830] font-bold text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Stats / Core Values Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#0c1e3d]/40 backdrop-blur-md hover:border-[#A5841C] dark:hover:border-[#62FFD7] transition-colors duration-300 ${index === 1 || index === 3 ? 'lg:translate-y-8' : ''}`}
            >
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base font-medium text-[#A5841C] dark:text-[#62FFD7]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}