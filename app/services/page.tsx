'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const detailedServices = [
  {
    id: '01',
    title: 'Headless Web Architecture',
    subtitle: 'Next.js + Headless CMS',
    description: 'We move beyond traditional WordPress to build blazing-fast, highly secure, and infinitely scalable web applications. By decoupling the frontend and backend, we deliver unparalleled user experiences and SEO performance.',
    features: ['Sub-second Page Loads', 'Enterprise-grade Security', 'Custom Content Modeling', 'Omnichannel Delivery'],
  },
  {
    id: '02',
    title: 'Custom AI Automation',
    subtitle: 'Streamlining Operations',
    description: 'Stop wasting time on repetitive tasks. We integrate cutting-edge AI solutions directly into your business workflows, from intelligent customer support chatbots to automated data processing and inventory management.',
    features: ['Workflow Automation', 'AI Chatbots & Assistants', 'Data Analysis & Insight', 'API Integrations'],
  },
  {
    id: '03',
    title: 'Premium Brand Identity',
    subtitle: 'Design System & UI/UX',
    description: 'A great product needs a great face. We craft bold, memorable brand identities and pixel-perfect user interfaces that resonate with your target audience and stand out in the crowded digital landscape.',
    features: ['Logo & Visual Identity', 'Interactive UI/UX Design', 'Design Systems', 'Digital Guidelines'],
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full relative z-20">
      
      {/* Page Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
          className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.2em] uppercase text-[12px] md:text-sm block mb-4"
        >
          Our Capabilities
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} 
          className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6"
        >
          Engineering your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5841C] to-[#D1AE35]">Digital Advantage.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          We don't just build websites; we build digital businesses. Explore our core services designed to scale your operations and maximize ROI.
        </motion.p>
      </div>

      {/* Detailed Services List */}
      <div className="flex flex-col gap-24 md:gap-32">
        {detailedServices.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center group"
          >
            {/* Left Side: Large Number & Title */}
            <div className="lg:w-5/12">
              <div className="text-6xl md:text-8xl font-black text-gray-200 dark:text-white/5 mb-6 group-hover:text-[#A5841C]/20 dark:group-hover:text-[#62FFD7]/20 transition-colors duration-500">
                {service.id}
              </div>
              <h3 className="text-xl font-mono text-[#A5841C] dark:text-[#62FFD7] tracking-widest mb-3 uppercase">
                {service.subtitle}
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {service.title}
              </h2>
            </div>

            {/* Right Side: Description & Features */}
            <div className="lg:w-7/12">
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                {service.description}
              </p>
              
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3">
                {service.features.map((feature, fIndex) => (
                  <span 
                    key={fIndex}
                    className="px-5 py-2.5 rounded-full text-sm font-bold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent group-hover:border-gray-300 dark:group-hover:border-white/10 transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Call to Action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        className="mt-32 p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#091830] to-[#12284c] border border-white/10 text-center relative overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#62FFD7] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to upgrade your tech?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how our tailored solutions can eliminate your current bottlenecks and prepare your business for the future.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-[#091830] font-black text-sm tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Start a Project
          </Link>
        </div>
      </motion.div>

    </main>
  );
}