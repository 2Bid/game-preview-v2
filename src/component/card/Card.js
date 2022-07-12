import React from 'react'
import {Link} from "react-router-dom"

import "../../css/card/card.css"

export default function Card(props) {

  return (
    <div className='card'>
        <Link to={"/game/" + props.id} className='card__img-container'>
            <img src={props.background} alt={`background de ${props.name}`} />
        </Link>
        <div className='card__infos'>
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

// hover qui pop d'en dessous ( pousse le titre en bas vers le haut jusqu'a 60/70%)
// hover qui déclenche la lecture d'une video si presente ou image 2