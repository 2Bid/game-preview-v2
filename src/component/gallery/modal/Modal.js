import React from 'react'

import "../../../css/gallery/modal/modal.css"

import {ReactComponent as Close} from "../../../images/close.svg"
import {ReactComponent as Prev} from "../../../images/prev.svg"
import {ReactComponent as Next} from "../../../images/next.svg"

export default function Modal({img, prev, next, setCurrentImg}) {

     const handleCloseModal = (e) => {
          const body = document.getElementsByTagName('body')[0]
          body.classList.remove('noScroll')
          setCurrentImg(null)
     }     

  return (
    <div className='modalGallery__container'
          // Ferme la modal quand on clique en arriere plan (le container)
          onClick={(e)=>{
               if(e.target.classList.contains("modalGallery__container"))  handleCloseModal(e)
          }}>
               
          <div className='modalGallery'>
               <span onClick={(e)=>{handleCloseModal(e)}} className="modalGallery__close">
                    <Close />
               </span>

               <div className='modalGallery__slider'>
                    <span onClick={()=>{prev()}} className='modalGallery__arrow modalGallery__arrow--prev'>
                         <Prev />
                    </span>

                    <div className='mdaolGallery__item'>
                         <img className='modalGallery__img' src={img} alt=''/>
                    </div>

                    {/* <div className='modalGallery__dot'>
                         {
                              props.imgs.map((img, index)=>{
                                   return (
                                        <li key={index}></li>
                                   )
                              })
                         }
                    </div> */}

                    <span onClick={()=>{next()}} className='modalGallery__arrow modalGallery__arrow--next'>
                         <Next />
                    </span>
               </div>
          </div>
    </div>
  )
}
