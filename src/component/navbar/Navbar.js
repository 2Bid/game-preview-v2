import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./../../css/navbar/navbar.css"

import {ReactComponent as Close} from "../../images/close.svg"

export default function Navbar() {

     const [isOpen, setIsOpen] = useState(false)

     function toggleMenu(){
          const body = document.getElementsByTagName('body')[0]
          body.classList.toggle('noScroll')  
          setIsOpen(!isOpen)
     }

     return (
     <aside className='menu__navbar'>
          <div className='burger' onClick={toggleMenu}></div>
          <div className={`navbar__container ${isOpen ? "navbar__container--active" : "" }`}>
               <div className="navbar">
                    <span className="navbar__close"  onClick={toggleMenu}>
                         <Close/>
                    </span>
                    <nav className='navbar__nav'>
                         <Link className='navbar__link' to="/">Home</Link>
                         <Link className='navbar__link' to="/">About</Link>
                    </nav>
               </div>
          </div>
     </aside>
     )
}
