import React from 'react'
import CardContainer from '../cardContainer/CardContainer'

import "../../css/slider/slider.css"

export default function Slider({titre, imgs}) {
  return (
    <section className='slider__container'>
          <div className='slider__titre-container'>
               <h3 className='slider__titre'>{titre}</h3>
          </div>

          <span className='slider__arrow--prev'></span>

          <div className='slider'>
               <CardContainer loop={imgs}/>
          </div>

          <span className='slider__arrow--next'></span>
    </section>
  )
}
