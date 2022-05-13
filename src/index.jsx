import React from 'react';
import App from './App';
import { ListProvider } from './context/ListProvider';

render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
