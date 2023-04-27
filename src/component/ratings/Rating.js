import React, { useEffect, useState } from 'react'
import '../../css/ratings/ratings.css'

import {ReactComponent as Rating} from "../../images/invaderFull.svg"
import {ReactComponent as RatingEmpty} from "../../images/invader.svg"
import LinearRating from './linearRating/LinearRating'

export default function Ratings({rating}) {

  const ratingEntire = Math.trunc(rating)
  const emptyRating = 5 - Math.ceil(rating)
  const ratingDecimal = rating.toString().split('.')[1]

  const [integerRating, setIntegerRating] = useState([])

  useEffect(()=>{
    for (let i = 0; i < ratingEntire; i++) {
      setIntegerRating([...integerRating, integerRating.push(i + 1)])
    }
  },[])

  return (
    <div className='ratings__container'>
      {
        integerRating?.map((rate)=>{
          return(
            <div className='rating' key={rate}>
              <Rating />
            </div>
          )
        })
      }
      
      <LinearRating value={ratingDecimal}/>

      {
        emptyRating >= 2 &&
        emptyRating.map((rate)=>{
          return(
            <div className='rating' key={rate}>
              <RatingEmpty />
            </div>
          )
        })
      }
      {
        emptyRating === 1 &&
        <div className='rating'>
          <RatingEmpty />
        </div>
      }
      
    </div>
  )
}