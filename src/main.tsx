import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WithThemeProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WithThemeProvider>
      <App />
    </WithThemeProvider>
  </React.StrictMode>,
);
