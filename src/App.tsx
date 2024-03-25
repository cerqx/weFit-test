import { ThemeProvider } from 'styled-components';

import { theme } from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global'
import { Router } from './Router';
import { WeMoviesProvider } from './contexts/WeMoviesContext';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WeMoviesProvider>
        <GlobalStyles />
        <Router />
        <Toaster />
      </WeMoviesProvider>
    </ThemeProvider>
  )
}