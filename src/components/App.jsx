import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Component from './Component';

import "../styles/main.scss";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="app-body">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Component />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
