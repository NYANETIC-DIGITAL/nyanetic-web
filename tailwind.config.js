/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // 💡 src folder သုံးထားရင် Tailwind က ရှာတွေ့အောင် အောက်က (၃) ကြောင်း မပါမဖြစ် ထည့်ပေးရပါမယ်
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Boss ရဲ့ Custom Font ကို font-mm အဖြစ် ကြေညာခြင်း
        mm: ['var(--font-myanmar)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};