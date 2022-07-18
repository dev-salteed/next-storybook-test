const isProduction = process.env.NODE_ENV === 'production';

console.log('\n');
console.log(`   TailwindCSS \n`);
console.log(`   ----------- \n`);
console.log(`   ✅ tailwind 3 에서는 purge 필요 ㄴㄴ \n`);
console.log(`   is Production env? : ${isProduction} \n`);

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'media', // class
  plugins: [require('@tailwindcss/forms')],
};
