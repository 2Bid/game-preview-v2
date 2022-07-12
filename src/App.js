import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';
import DetailGame from "./page/detailgame/DetailGame";

export default function App() {
  return (
     <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/game/:id" element={<DetailGame/>}></Route>
     </Routes>
  );
}
