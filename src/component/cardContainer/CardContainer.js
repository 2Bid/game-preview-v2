import React from 'react'
import Card from '../card/Card'

export default function CardContainer(props) {
  return (
    <div className='card__container'>
          {
               props.loop.map((game)=>{
                    return <Card 
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    background={game.background_image}
                    />
               })
          }
    </div>
  )
}
