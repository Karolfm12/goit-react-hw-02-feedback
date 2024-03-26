import { App } from 'components/App';
import Stats from 'components/Stats';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stats />
    <App />
  </React.StrictMode>
);
