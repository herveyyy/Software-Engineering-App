import React from 'react';
import { createRoot } from 'react-dom/client';
import './static/css/index.css';
import App from './App';

const rootElement = document.getElementById('root');
const appRoot = createRoot(rootElement);
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);