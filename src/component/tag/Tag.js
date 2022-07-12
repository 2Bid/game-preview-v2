import React from 'react'

import "../../css/tag/tag.css"

export default function Tag(props) {

  return (
    <div className='tag__container'>
        <p className='tag'>{props.tag}</p>
    </div>
  )
}
