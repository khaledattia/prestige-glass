import React from 'react';
import ReactDOM from 'react-dom';
import '@assets/styles/layout.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'animate.css';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <App />
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);