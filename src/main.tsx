import React from 'react';
import ReactDOM from 'react-dom/client';
import { WithReduxProvider, WithRouterProvider, WithThemeProvider } from 'providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Redux */}
    <WithReduxProvider>
      {/* MUI theming */}
      <WithThemeProvider>
        {/* React-router */}
        <WithRouterProvider />
      </WithThemeProvider>
    </WithReduxProvider>
  </React.StrictMode>,
);
