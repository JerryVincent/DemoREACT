import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));//div with id root in the public/index.html page
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

