import React, { useState } from 'react'
import Filter from '../filter/Filter'

import {ReactComponent as Close} from "../../images/close.svg"

import "./../../css/filtersContainer/filtersContainer.css"

export default function FiltersContainer({setActualResult}) {

  const[isOpen, setIsOpen] = useState(false)

  function openMenu(){
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('noScroll')  
    setIsOpen(true)
  }

  function closeMenu(e){
    e.stopPropagation()
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('noScroll')  
    setIsOpen(false)
  }

  return (
    <div onClick={openMenu} className={isOpen ? "filters__container filters__container--active" : "filters__container"}>
      <span className="navbar__close"  onClick={(e)=>closeMenu(e)}>
        <Close/>
      </span>
      <Filter type="genres" setActualResult={setActualResult} />
      <Filter type="platforms" setActualResult={setActualResult} />
      <Filter type="publishers" setActualResult={setActualResult} />
      <Filter type="stores" setActualResult={setActualResult} />
      <Filter type="tags" setActualResult={setActualResult} />
      <Filter type="developers" setActualResult={setActualResult} />
      <Filter type="creators" setActualResult={setActualResult} />
    </div>
  )
}
