'use client';

import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discovery & Strategy', desc: 'We dive deep into your business goals, target audience, and current bottlenecks to map out a clear, actionable digital blueprint.' },
  { id: '02', title: 'Design & Architecture', desc: 'Crafting premium brand identities and wireframing scalable tech stacks (Next.js & Headless CMS) that ensure long-term success.' },
  { id: '03', title: 'Development & AI', desc: 'Building blazing-fast web/app solutions and integrating custom AI automation to completely streamline your operations.' },
  { id: '04', title: 'Launch & Scale', desc: 'Deploying with precision, followed by continuous monitoring and optimization to drive real ROI and business growth.' }
];

export default function ProcessSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto w-full relative z-20 px-6 md:px-12 lg:px-20">
      
      {/* Header */}
      <div className="text-left mb-16 md:mb-24 max-w-3xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
          className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4"
        >
          How We Work
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight"
        >
          A proven process for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">Digital Excellence.</span>
        </motion.h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Continuous Vertical Line */}
        <div className="absolute top-0 left-6 md:left-[39px] w-[1px] h-full bg-gray-200 dark:bg-white/10 origin-top"></div>

        <div className="flex flex-col gap-12 md:gap-20">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex items-start gap-6 md:gap-16 group"
            >
              {/* Number Indicator (Circle) */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white dark:bg-[#091830] border-2 border-gray-200 dark:border-white/10 group-hover:border-[#A5841C] dark:group-hover:border-[#62FFD7] transition-colors duration-500 shadow-sm mt-1 md:mt-0">
                <span className="text-base md:text-xl font-bold text-gray-400 dark:text-gray-500 group-hover:text-[#A5841C] dark:group-hover:text-[#62FFD7] font-mono transition-colors duration-500">
                  {step.id}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 pt-2 md:pt-4">
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-[#A5841C] dark:group-hover:text-[#62FFD7] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}