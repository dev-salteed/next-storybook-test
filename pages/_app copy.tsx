import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/tailwind.css';

const outerTheme = createTheme({
  palette: {},
});

const innerTheme = createTheme({
  palette: {
    info: {
      main: '#edf2ff',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={outerTheme}>
      <ThemeProvider theme={innerTheme}>
        <Component {...pageProps} />{' '}
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
