import React from 'react'
import { useParams } from 'react-router-dom'
import Tag from '../../component/tag/Tag'

import { useLoadDetailGameData } from '../../hooks/loadDetailGameData'

import '../../css/detailgame/detailGame.css'
import Loader from '../../component/loader/Loader'
import Gallery from '../../component/gallery/Gallery'

export default function DetailGame() {
    const {id} = useParams()
    const detailGameData = useLoadDetailGameData(id)
    const data = detailGameData.data
     console.log(detailGameData)
  return (
    <>
    {
        !detailGameData.loading &&
        !detailGameData.error
        ?
        <div className='detailGame__container'>
               <div className='detailGame'>
                    <div className='detailGame__backimage' style={{backgroundImage:`url('${data.background_image}')`}}>
                         {/* <img src={data.background_image} alt={`background de ${data.background_image}`}/> */}
                         <div className={`detailGame__title ${
                              data.dominant_color === "0f0f0f" 
                              ? "detailGame__title--white" 
                              : "detailGame__title--black"
                              }`}>
                                   {data.name}
                         </div>
                    </div>
                    <div className='detailGame__infos'>
                         <div className='detailGame__infos--left'>
                              <div className='detailGame__developers--container'>
                              <p>Développé par : </p>
                              <div className='detailGame__developers'>
                                        {
                                             data.developers.map((developer)=>{
                                                  return <p key={developer.name}>{developer.name}</p>
                                             })
                                        }
                              </div>
                              </div>
                              <div className='tags__container'>
                              {
                                   data.tags.map((tag)=>{
                                        return <Tag tag={tag.name} key={tag.id}/>
                                   })
                              }
                              </div>
                         </div>
                         <div className='detailGame__infos--right'>
                              <div className='genres__container'>
                              {
                                   data.genres.map((genre)=>{
                                        return <Tag tag={genre.name} key={genre.id}/>
                                   })
                              }
                              </div>
                              <div className='platforms__container'>
                              {
                                   data.platforms.map((platform)=>{
                                        return <p key={platform.platform.id}>{platform.platform.name}</p>
                                   })
                              }
                              </div>
                         </div>
                    </div>
                    
                    <div className='detailGame__description--container'>
                         <p className='detailGame__description'>{data.description_raw}</p>
                         {/* Limité a 5/6 ligne et ajouter un btn */}
                    </div>

                    <Gallery id={id} />
                    
               </div>
        </div>
        :
        <Loader />
    }
    </>
  )
}
