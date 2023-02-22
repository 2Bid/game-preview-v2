import React, { useState } from 'react'
import Filter from '../filter/Filter'

import "./../../css/filtersContainer/filtersContainer.css"

export default function FiltersContainer() {

  const[isOpen, setIsOpen] = useState(false)

  function toggleMenu(){
    const body = document.getElementsByTagName('body')[0]
    body.classList.toggle('noScroll')  
    setIsOpen(!isOpen)
}

  return (
    <div onClick={()=>{toggleMenu()}} className={isOpen ? "filters__container filters__container--active" : "filters__container"}>
      <Filter type="genres"/>
      <Filter type="platforms"/>
      <Filter type="publishers"/>
      <Filter type="stores"/>
      <Filter type="tags"/>
      <Filter type="developers"/>
      <Filter type="creators"/>
    </div>
  )
}
