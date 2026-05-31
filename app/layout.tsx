import type { Metadata } from "next";
import { Noto_Sans_Myanmar } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import GridBackground from "@/components/GridBackground"; 

// Google ကနေ Noto Sans Myanmar ကို တိုက်ရိုက်ခေါ်ခြင်း
const notoSansMyanmar = Noto_Sans_Myanmar({
  weight: ['400', '700', '900'],
  subsets: ['myanmar'],
  variable: '--font-myanmar',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nyanetic Digital Studio",
  description: "Your Trusted Technology Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 💡 suppressHydrationWarning ကို html မှာ ထည့်ပါ
    <html lang="en" className={`dark ${notoSansMyanmar.variable}`} suppressHydrationWarning>
      
      {/* 💡 suppressHydrationWarning ကို body မှာပါ ထပ်ထည့်ပါ */}
      <body 
        className="antialiased bg-white dark:bg-[#091830] text-gray-900 dark:text-white transition-colors duration-300"
        suppressHydrationWarning
      >
        
        {/* 3D Background */}
        <GridBackground /> 
        
        {/* Layout Structure (Navbar, Main Content, Footer) */}
        <div className="relative z-10 flex flex-col min-h-screen"> 
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
        
      </body>
    </html>
  );
}