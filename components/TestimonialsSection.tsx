'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Nyanetic completely transformed our digital presence. By migrating us to a Headless CMS, our site speed increased by 300%, and our editorial team's workflow has never been smoother.",
    name: "Aung Kyaw",
    role: "Editor-in-Chief",
    company: "YNKhit News Portal"
  },
  {
    id: 2,
    quote: "Their approach to branding and digital architecture is truly world-class. The team didn't just build a website; they engineered a scalable platform that perfectly represents our corporate vision.",
    name: "Thandar Min",
    role: "Founder & CEO",
    company: "Mahaland Corporate"
  },
  {
    id: 3,
    quote: "Integrating custom AI automation into our booking system seemed impossible until we met Nyanetic. They streamlined our entire operation, cutting our manual workload in half.",
    name: "Zayar Linn",
    role: "Operations Director",
    company: "Smart Taxi Solutions"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto w-full relative z-20 px-6 md:px-12 lg:px-20">
      
      {/* Header */}
      <div className="text-left max-w-3xl mx-auto mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
          className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4"
        >
          Client Voices
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight"
        >
          Don't just take <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">our word for it.</span>
        </motion.h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col justify-between bg-white dark:bg-[#0c1e3d]/40 backdrop-blur-md border border-gray-200 dark:border-white/5 rounded-3xl p-8 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(98,255,215,0.05)] transition-all duration-300 relative group"
          >
            {/* Quote Icon */}
            <div className="mb-6 text-[#A5841C]/20 dark:text-[#62FFD7]/20 group-hover:text-[#A5841C]/40 dark:group-hover:text-[#62FFD7]/40 transition-colors duration-300">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {/* Quote Text */}
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 italic">
              "{item.quote}"
            </p>

            {/* Author Info */}
            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h4>
              <p className="text-sm font-medium text-[#A5841C] dark:text-[#62FFD7] mt-1">{item.role}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-widest">{item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}