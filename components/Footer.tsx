import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#061022] border-t border-gray-200 dark:border-white/5 pt-24 pb-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Top Section - Left Aligned */}
        <div className="flex flex-col items-start text-left mb-20">
          <p className="text-[#A5841C] dark:text-[#62FFD7] font-bold tracking-[0.3em] uppercase text-sm mb-4">Have an idea?</p>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-gray-900 dark:text-white leading-none tracking-tighter mb-4">
            LET'S TALK.
          </h2>
          
          {/* Dictionary Style Description & Icon (Fixed Mobile Alignment) */}
          <div className="flex items-start gap-3 max-w-5xl mt-2 mb-8">
            <svg className="w-5 h-5 text-[#A5841C] dark:text-[#62FFD7] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-tight md:leading-relaxed">
              <strong className="text-gray-900 dark:text-white font-bold">Nyanetic Digital Studio</strong> <span className="italic text-gray-500 font-serif">(n):</span> A premium technology partner replacing legacy systems with cutting-edge Web/App technologies and AI automation to drive real ROI.
            </p>
          </div>

          {/* Start a Project Button */}
          <Link href="/contact" className="px-8 py-3.5 rounded-full bg-[#091830] dark:bg-[#62FFD7] text-white dark:text-[#091830] font-bold text-sm tracking-wide transition-transform hover:-translate-y-1 shadow-md mb-16">
            Start a Project
          </Link>

          {/* Newsletter Form */}
          <div className="w-full max-w-md">
            <p className="text-[13px] font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-1">Join our Newsletter</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Get our latest tech insights and business scaling tips.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address" className="w-full bg-gray-100 dark:bg-[#091830] border border-gray-300 dark:border-gray-800 rounded-full px-6 py-3.5 outline-none focus:border-[#A5841C] dark:focus:border-[#62FFD7] text-gray-900 dark:text-white transition-colors text-sm" />
              <button className="bg-[#091830] dark:bg-[#62FFD7] text-white dark:text-[#091830] px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap hover:scale-105 transition-transform">Subscribe</button>
            </div>
          </div>

          {/* Mobile Only Social Icons (Under Newsletter) */}
          <div className="flex md:hidden items-center gap-5 mt-4 px-1 text-gray-800 dark:text-gray-300">
            {/* Facebook */}
            <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg></a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            {/* X (Twitter) */}
            <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.24 2.25h3.3l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23zM16.9 20.15h1.83L7.08 4.13H5.12z"/></svg></a>
            {/* Telegram */}
            <a href="#" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.2-.02-.28 0-.12.03-1.98 1.25-5.58 3.63-.53.36-1 .54-1.42.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.23.36-.47 1-.72 3.93-1.71 6.55-2.84 7.86-3.38 3.74-1.54 4.51-1.81 5.01-1.82.11 0 .35.03.48.14.11.09.14.22.15.34-.01.03-.01.07-.02.11z"/></svg></a>
          </div>
        </div>

        {/* Bottom Links & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-3 md:gap-6 border-t border-gray-200 dark:border-white/10 pt-3">
          
          <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
             &copy; {new Date().getFullYear()} Nyanetic Digital Studio. All rights reserved.
          </div>
          
          <div className="font-mm flex flex-wrap gap-x-4 gap-y-2 text-[12px] md:text-[13px] font-bold text-gray-800 dark:text-gray-300 uppercase tracking-widest">
            <Link href="/services" className= "font-mm hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors">Services</Link>
            <Link href="/work" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors">Work</Link>
            <Link href="/about" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors">Agency</Link>
            <Link href="/contact" className="hover:text-[#A5841C] dark:hover:text-[#62FFD7] transition-colors">Contact</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}