import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

import "./../../css/header/header.css"

import  Logo from "./../../images/banner.png"

export default function Header() {
  return (
    <header className='header'>
      <Link to="/" className='header__logo-container'>
          <img src={Logo} alt="Game preview "/>
      </Link>
    </header>
  )
}
