import React from 'react'
import Navbar from '../navbar/Navbar'

import "./../../css/header/header.css"

import  Logo from "./../../images/banner.jpg"

export default function Header() {
  return (
    <header className='header'>
          <div className='header__logo--container'>
               <img src={Logo} alt="Game preview "/>
          </div>
          <Navbar />
    </header>
  )
}
