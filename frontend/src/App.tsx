import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/defaultTheme';
import { BrowserRouter } from 'react-router-dom';

import { OpenRoutes } from './routes/OpenRoutes';
import GlobalStyles from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <BrowserRouter>
          <OpenRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
