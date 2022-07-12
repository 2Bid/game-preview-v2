import React from 'react'
import { useLoadScreenshotsData } from '../../hooks/loadScreenshotsData'

import "../../css/gallery/gallery.css"

export default function Gallery(props) {

     const screenshots = useLoadScreenshotsData(props.id)

  return (
    <>
    {
     !screenshots.loading &&
     !screenshots.error &&
     screenshots.data.results.length > 0 ?
     <div className='gallery__container'>
          {
          screenshots.data.results.map((img, index)=>{
               return(
                    <div className='gallery__image-container'>
                         <img className='gallery__image' src={img.image} alt={`gallery ${index}`}/>
                    </div>
               )
          })
          }
     </div>
     : <></>
    }
    </>
  )
}
