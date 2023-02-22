import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './page/home/Home';
import DetailGame from "./page/detailgame/DetailGame";
import P404 from "./page/p404/P404";
import OutletContainer from "./page/outlet/Outlet";

export default function App() {
  return (
     <Routes>
          <Route path="/" element={<OutletContainer/>}>
               <Route index element={<Home />}></Route>
               <Route path="/game/:id" element={<DetailGame/>}></Route>
               <Route path="*" element={<P404/>}></Route>
          </Route>
     </Routes>
  );
}
