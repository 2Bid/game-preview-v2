import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';

import './App.css';

export default function App() {
  return (
     <Routes>
          <Route index element={<Home />}></Route>
     </Routes>
  );
}
