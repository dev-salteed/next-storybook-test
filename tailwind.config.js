const isProduction = process.env.NODE_ENV === 'production';

console.log('\n');
console.log(`   TailwindCSS \n`);
console.log(`   ----------- \n`);
console.log(`   ✅ tailwind 3 에서는 purge 필요 ㄴㄴ \n`);
console.log(`   is Production env? : ${isProduction} \n`);

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        //사이트 기본 컬러
        gnb: '#1E1E1E',
        normal: '#212121', //기본 컬러
        primary: '#FF7A00', // 사이트 메인 컬러
        secondary: '#4d4e52', //사이트 서브 컬러
        current: 'currentColor',
        disabled: '#e5e7eb',
        basic: '#e2e8f0',
        //시스템 관련 컬러
        success: 'rgb(76, 175, 80)',
        error: 'rgb(244, 67, 54)',
        warning: 'rgb(255, 152, 0)',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      outlineOffset: {
        0: '0px',
      },
    },
  },
  darkMode: 'media', // class
  plugins: [require('@tailwindcss/forms')],
};
