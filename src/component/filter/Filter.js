import React from 'react'
import { useLoadFilterGameData } from '../../hooks/loadFilterGameData'

import "../../css/filter/filter.css"

export default function Filter({type}) {

  const filterResults = useLoadFilterGameData(`${type}`)

  return (
    <div className='filter__container'>
      {
        filterResults.data.results ?
        <div className='filter'>
          <h3>{type}</h3>
          {
            filterResults.data.results.map((el, index)=>{
              return (
                <div className='checkbox__container' key={index}>
                  <input type="checkbox"></input>
                  <label>{el.name}</label>
                </div>
              )
          })}
        </div>
        :
        <></>
      }
    </div>
  )
}
