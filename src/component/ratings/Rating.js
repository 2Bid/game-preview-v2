import React, { useEffect, useState } from 'react'

import {ReactComponent as Rating} from "../../images/invader.svg"

export default function Ratings(props) {

  const maxRating = 5
 // log 4.47
  const ratingfull = Math.trunc(props.rating) //log 4
  const ratingUnfull = props.rating.toString().split('.')[1] //log 47

  const [integerRating, setIntegerRating] = useState([])

  useEffect(()=>{
    for (let i = 0; i < ratingfull; i++) {
      console.log(i + 1)
      setIntegerRating([...integerRating, integerRating.push(i + 1)])
      console.log(integerRating)
    }
  },[])

  return (
    <div className='ratings__container'>
      {
        integerRating.map(()=>{
          return(
            <div className='rating__containers'>
              <Rating />
            </div>
          )
        })
      }
    </div>
  )
}