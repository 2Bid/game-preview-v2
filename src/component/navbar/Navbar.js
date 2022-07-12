import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./../../css/navbar/navbar.css"

export default function Navbar() {

     const [isOpen, setIsOpen] = useState(false)

     function toggleNav(){
          setIsOpen(!isOpen)
     }

  return (
    <aside className='menu__navbar'>
          <div className='burger' onClick={toggleNav}></div>
          <div className={`navbar__container ${isOpen ? "navbar__container--active" : "" }`}>
               <div className="navbar">
                    <span className="navbar__close" onClick={toggleNav}>X</span>
                    <nav className='navbar__nav'>
                         <Link className='navbar__link' to="/">Home</Link>
                         <Link className='navbar__link' to="/">About</Link>
                         <div className='discover__container'>
                              <div>Découvrir plus</div>
                              <div className='discover'>

                              </div>
                         </div>
                    </nav>
               </div>
          </div>
    </aside>
  )
}
