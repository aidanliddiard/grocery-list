import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ListProvider } from './context/ListProvider';

render(
  <React.StrictMode>
    <ListProvider>
      <Router>
        <App />
      </Router>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
