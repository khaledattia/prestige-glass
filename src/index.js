import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import '@assets/styles/layout.css';
import 'animate.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>

      <App />
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);