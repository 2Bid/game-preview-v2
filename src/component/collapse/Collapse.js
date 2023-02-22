import React, { useState } from 'react'

import "../../css/collapse/collapse.css"

export default function Collapse({titre, content}) {

    // console.log(content)

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='collapse__container'>
        <div className='collapse__titre-container' onClick={()=>{setIsOpen(!isOpen)}}>
            <h5>{titre}</h5>
        </div>
        <div className={`collapse__content ${isOpen ? 'active' : ''}`}>
            <p>{content}</p>
        </div>
    </div>
  )
}
