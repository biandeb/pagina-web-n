import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Navbar from './commons/Navbar/Navbar.jsx';
import Footer from './commons/Footer/Footer.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
