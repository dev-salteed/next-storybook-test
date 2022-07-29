import initAppEnv from '@Utils/client/initApp';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAppEnv();
    console.log('_App');
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
