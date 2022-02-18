<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
=======
import React from "react";
import  ReactDOM from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> Stashed changes

import './App.css'

import Home from "./Home";
import About from "./About";
import AdminDashboard from "./AdminDashboard";

ReactDOM.render(
<ChakraProvider>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);