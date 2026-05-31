'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Nyanetic ရဲ့ Project နမူနာများ (နောက်ပိုင်း ပုံအစစ်တွေနဲ့ လဲတပ်ရန်)
const projects = [
  { 
    id: 1, 
    title: 'YNKhit News Portal', 
    category: 'Headless CMS / Next.js', 
    // ပုံအစစ်ရှိလာရင် '/projects/ynkhit.jpg' စသဖြင့် ပြောင်းထည့်ပါ
    color: 'from-blue-900 to-slate-800' 
  },
  { 
    id: 2, 
    title: 'Mahaland Corporate', 
    category: 'Web Development / UI Design', 
    color: 'from-emerald-900 to-teal-900' 
  },
  { 
    id: 3, 
    title: 'Smart Taxi App', 
    category: 'App Development / System Architecture', 
    color: 'from-orange-900 to-amber-900' 
  },
  { 
    id: 4, 
    title: 'Container Management', 
    category: 'Custom Software / AI Automation', 
    color: 'from-purple-900 to-slate-900' 
  }
];

export default function FeaturedWorksSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto w-full relative z-20 px-6 md:px-12 lg:px-20">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
        <div className="text-left max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4"
          >
            Featured Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight"
          >
            Work that drives <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">Real Results.</span>
          </motion.h2>
        </div>

        {/* View All Button */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link href="/work" className="inline-flex items-center gap-3 pb-2 border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-sm tracking-widest uppercase hover:text-[#A5841C] dark:hover:text-[#62FFD7] hover:border-[#A5841C] dark:hover:border-[#62FFD7] transition-colors group">
            View All Projects
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
          </Link>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group relative cursor-pointer"
          >
            {/* Image/Gradient Container (Overflow hidden for scale effect) */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm">
              {/* ပုံထည့်ချင်ပါက ဒီနေရာတွင် <Image src={project.image} ... /> သုံးပါ */}
              {/* လောလောဆယ် Placeholder အနေဖြင့် Gradient အရောင်များ သုံးထားသည် */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transform group-hover:scale-105 transition-transform duration-700 ease-in-out`}></div>
              
              {/* Dark Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Info (Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#A5841C] dark:text-[#62FFD7] font-mono text-xs md:text-sm tracking-widest mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}