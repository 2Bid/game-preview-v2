import React, { useState } from 'react'
import Modal from './modal/Modal'

import { useLoadScreenshotsData } from '../../hooks/loadScreenshotsData'

import "../../css/gallery/gallery.css"

export default function Gallery(props) {

     const loadingScreenshots = useLoadScreenshotsData(props.id)
     const screenshots = loadingScreenshots.data.results

     const [currentImg, setCurrentImg] = useState(false)
     const [currentIndex, setCurrentIndex] = useState(null)

     const handleModal= (img, index)=>{
          const imgSrc = img.image
          const body = document.getElementsByTagName('body')[0]
          body.classList.add('noScroll')

          setCurrentIndex(index)
          setCurrentImg(imgSrc)
     }

     const prevSlide = () => {
          if(currentIndex === 0){
               setCurrentIndex(screenshots.length)
               const lastImg = screenshots.length - 1
               const newImgSrc = screenshots[lastImg].image
               setCurrentImg(newImgSrc)
               return
          }

          const newIndex = currentIndex - 1
          const newImg = screenshots.filter((img)=>{
               return screenshots.indexOf(img) === newIndex;
          })
          const newImgSrc = newImg[0].image

          setCurrentImg(newImgSrc)
          setCurrentIndex(newIndex)
     }

     const nextSlide = () => {
          if(currentIndex === screenshots.length - 1){
               setCurrentIndex(0)
               const newImgSrc = screenshots[0].image
               setCurrentImg(newImgSrc)
               return
          }

          const newIndex = currentIndex + 1
          const newImg = screenshots.filter((img)=>{
               return screenshots.indexOf(img) === newIndex;
          })
          const newImgSrc = newImg[0].image

          setCurrentImg(newImgSrc)
          setCurrentIndex(newIndex)
     }

  return (
    <>
    {
     (!loadingScreenshots.loading &&
     !loadingScreenshots.error &&
     screenshots.length > 0) &&
     <div className='gallery__container'>
          {
          screenshots.map((img, index)=>{

               return(
                    <div className='gallery__image-container' onClick={()=>handleModal(img, index)} key={index}>
                         <img className='gallery__image' src={img.image} alt={`gallery ${index}`}/>
                    </div>
               )
          })
          }

          {/* Affiche la modal uniquement si currentImg est défini  */}
          {
               currentImg && 
               <Modal 
               imgs={screenshots} 
               img={currentImg} 
               prev={prevSlide}
               next={nextSlide}
               setCurrentImg={setCurrentImg}
               />
          }
     </div>
    }
    </>
  )
}
