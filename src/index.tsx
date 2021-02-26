import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppProviders from './contexts';

ReactDOM.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
  document.getElementById('root'),
);
