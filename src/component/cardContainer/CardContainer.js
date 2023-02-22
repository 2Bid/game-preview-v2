import React from 'react'
import Card from '../card/Card'

import "../../css/cardContainer/cardContainer.css"

export default function CardContainer(props) {
  return (
    <div className='card__container'>
      {
        props.loop.length ?
	   
          props.loop.map((game)=>{
            return (
              <Card 
              key={game.id}
              id={game.id}
              name={game.name}
              platforms={game.platforms}
              background={game.background_image}/>
            )
          })
        :
        <></>
      }
    </div>
  )
}
