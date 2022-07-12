import React from 'react'
import Card from '../card/Card'

import "../../css/slider/slider.css"

export default function Slider(props) {
  return (
    <div className='slider__container'>
     <span className='slider__arrow--prev'></span>

     <div className='slider'>
          {
               props.imgs.map((img)=>{
                    return <Card />
               })
          }
     </div>

     <span className='slider__arrow--next'></span>
    </div>
  )
}
