import React from 'react'
import {Link} from "react-router-dom"

import "../../css/card/card.css"
import Tag from '../tag/Tag'

export default function Card(props) {
     
     // const handleMouseEnter = (e) =>{
     //      const infoMore = e.target.offsetParent.lastChild.lastChild
     //      infoMore.style.height = infoMore.style.height = `${infoMore.scrollHeight}px`
     // }

     // const handleMouseLeave = (e) =>{
     //      const infoMore = e.target.offsetParent.lastChild.lastChild
     //      infoMore.style.height = infoMore.style.height = 0
     // }

  return (
    <div className='card' >
        <Link to={"/game/" + props.id} className='card__img-container'>
            {  
               props.background ?
                    <img src={props.background} alt={`background de ${props.name}`} />
               :    <></>
            }
        </Link>
        <div className='card__infos--container'>
               <div className='card__infos'>
                    <h3>{props.name}</h3>
               </div>
               <div className='card__infos--more'>
                    {
                         props.platforms?.length > 0 ?
                         props.platforms.map((platform, index)=>{
                              return <Tag tag={platform.platform.name} key={index} type="platform"/>
                         })
                         : <></>
                    }
               </div>
        </div>
    </div>
  )
}

// hover qui pop d'en dessous ( pousse le titre en bas vers le haut jusqu'a 60/70%)
// hover qui déclenche la lecture d'une video si presente ou image 2