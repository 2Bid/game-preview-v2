import React, { useEffect, useState } from 'react'

import "../../css/tag/tag.css"

export default function Tag(props) {
// avoir le detail du tag ( via son id et nouveau hook ) lors du hover sous form de tooltip

const [color, setColor] = useState("")

useEffect(()=>{
     switch (props.type) {
          case "genre":
               setColor("#ff3366")
               break;
               case "platform":
                    setColor("#c74066")
                    break;
                    case "tag":
                   setColor("#8f4d65")
                    break;
          default:
               break;
     }
},[props.type])

  return (
    <div className='tag__container' style={{backgroundColor: color}}>
        <p className='tag'>{props.tag}</p>
    </div>
  )
}
