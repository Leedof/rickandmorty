import React from 'react';
import ReactDOM from 'react-dom/client';
import { WithRouterProvider, WithThemeProvider } from 'providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* MUI theming */}
    <WithThemeProvider>
      {/* React-router */}
      <WithRouterProvider />
    </WithThemeProvider>
  </React.StrictMode>,
);
