import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { StyledEngineProvider } from '@mui/material/styles';
import '../styles/globals.css';
//import '../styles/tailwind.css';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </CacheProvider>
  );
}
