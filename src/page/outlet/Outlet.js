import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../component/header/Header'

import "./../../css/outlet/outlet.css"

export default function OutletContainer() {
  return (
    <div className='main'>
      <Header/>
      <Outlet/>
    </div>
  )
}
