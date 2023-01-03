import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './shared/styles/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './shared/services/formValidation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
