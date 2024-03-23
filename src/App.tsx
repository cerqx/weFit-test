import { ThemeProvider } from 'styled-components';

import { theme } from './assets/styles/themes/default';
import GlobalStyles from './assets/styles/global'
import { Router } from './Router';
import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
        <Button>
          <p>IHUL</p>
        </Button>

        <div>
          <MovieCard />
        </div>
    </ThemeProvider>
  )
}

/*
  - Criar um contexto para alimentar os dados
  - 
*/