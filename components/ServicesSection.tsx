'use client';

import { motion } from 'framer-motion';

const services = [
  { id: '01', title: 'Modern Web & App', desc: 'We replace slow, legacy systems with blazing-fast Next.js and Headless CMS architectures.' },
  { id: '02', title: 'AI Automation', desc: 'Streamline operations, cut costs, and improve efficiency with our custom AI solutions.' },
  { id: '03', title: 'Bold Branding', desc: 'Stand out in a crowded market with premium, memorable brand identities.' }
];

export default function ServicesSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto w-full relative z-20">
      
      {/* Header */}
      <div className="text-left mb-10 lg:mb-16 max-w-3xl px-6 md:px-12 lg:px-20">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4">
          Our Expertise
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          Solutions driving <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">Real ROI</span>
        </motion.h2>
      </div>

      {/* Cards Container - md အစား lg ကို သုံးထားသဖြင့် Landscape တွင်လည်း Mobile View ပေါ်မည် */}
      <div className="flex lg:grid lg:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-6 md:px-12 lg:px-20 pb-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {services.map((service, index) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: index * 0.2 }} 
            // lg:w-auto နှင့် lg:p-8 သို့ ပြောင်းထားသည်
            className="w-[85vw] sm:w-[320px] lg:w-auto shrink-0 snap-center group relative bg-white dark:bg-[#0c1e3d]/50 backdrop-blur-sm border border-gray-200 dark:border-white/5 rounded-3xl p-6 lg:p-8 hover:-translate-y-2 transition-all duration-300 text-left"
          >
            <div className="text-[#A5841C] dark:text-[#62FFD7] mb-5 lg:mb-6 font-mono text-xl">{service.id}</div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}