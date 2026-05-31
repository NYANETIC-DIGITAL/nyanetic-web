'use client';

import { motion } from 'framer-motion';

// Nyanetic ရဲ့ Modern Tech Stack များ
const techStack = [
  "Next.js", "React", "TypeScript", "Sanity.io", 
  "Tailwind CSS", "Netlify", "AWS", "Node.js", 
  "OpenAI", "Figma", "Framer Motion"
];

// Infinite Loop အတွက် Array ကို နှစ်ခါပွားလိုက်ပါမယ်
const duplicatedStack = [...techStack, ...techStack];

export default function TechStackSection() {
  return (
    <section className="py-24 w-full relative z-20 overflow-hidden">
      
      {/* Header (Aligned perfectly with previous sections) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12 md:mb-16 text-left">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
          className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4"
        >
          Tech Stack
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
          className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
        >
          Powered by next-gen <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">technologies.</span>
        </motion.h2>
      </div>

      {/* Infinite Marquee Slider Container */}
      <div className="relative w-full flex overflow-hidden py-4">
        
        {/* Left & Right Fade Gradients for Premium Look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#091830] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#091830] to-transparent z-10 pointer-events-none"></div>

        {/* Moving Content */}
        <motion.div 
          className="flex flex-nowrap gap-6 md:gap-10 px-6 w-max"
          animate={{ x: ["0%", "-50%"] }} // Array နှစ်ခါပွားထားလို့ -50% ထိပဲ သွားရပါမယ်
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 35 // Slider အမြန်နှုန်း (များလေ နှေးလေ)
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white dark:bg-[#0c1e3d]/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:border-[#A5841C] dark:hover:border-[#62FFD7] hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <span className="text-base md:text-xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-[#A5841C] dark:group-hover:text-[#62FFD7] transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}