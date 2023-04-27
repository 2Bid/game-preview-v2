import React from 'react'
import { useParams } from 'react-router-dom'
import Tag from '../../component/tag/Tag'

import { useLoadDetailGameData } from '../../hooks/loadDetailGameData'

import '../../css/detailgame/detailGame.css'
import Loader from '../../component/loader/Loader'
import Gallery from '../../component/gallery/Gallery'
import Collapse from '../../component/collapse/Collapse'
import Ratings from '../../component/ratings/Rating'

export default function DetailGame() {
    const {id} = useParams()
    const detailGameData = useLoadDetailGameData(id)
    const data = detailGameData.data
     // console.log(data)
  return (
    <>
     {
        !detailGameData.loading &&
        !detailGameData.error
        ?
        <div className='detailGame__container'>
               <div className='detailGame'>
                    <div className='detailGame__backimage' style={{backgroundImage:`url('${data.background_image}')`}}>
                    </div>
                    <h1 className="detailGame__title">
                         {data.name}
                    </h1>
                    <div className='detailGame__infos'>
                         {
                              data.rating.length && <Ratings rating={data.rating} />
                         }
                         <div className='detailGame__infos--top'>
                              
                              {
                                   data.developers.length
                                   &&
                                   <div className='detailGame__developers--container'>
                                        <h4>Développé par : </h4>
                                        <div className='detailGame__developers'>
                                             {
                                                  data.developers.map((developer)=>{
                                                       return <h3 key={developer.name}>{developer.name}</h3>
                                                  })
                                             }
                                        </div>
                                   </div>
                              }
                              {
                                   data.platforms.length
                                   &&
                                   <div className='platforms__container'>
                                        <h4>Plateformes :</h4>
                                        <div className='platforms__list'>
                                             {
                                                  data.platforms.map((platform)=>{
                                                       return  <Tag tag={platform.platform.name} key={platform.platform.id} type="platform"/>
                                                  })
                                             }
                                        </div>
                                   </div>
                              }
                         </div>
                         <div className='detailGame__infos--bottom'>
                              {
                                   data.genres?.length
                                   ?
                                   <div className='genres__container'>
                                        <h4>Genres :</h4>
                                        <div className='genres__list'>
                                             {
                                                  data.genres.map((genre)=>{
                                                       return <Tag tag={genre.name} key={genre.id} type="genre"/>
                                                  })
                                             }
                                        </div>
                                   </div>
                                   :<></>
                              }
                              {
                                   data.tags.length
                                   &&
                                   <div className='tags__container'>
                                        <h4>Tags :</h4>
                                        <div className='tags__list'>
                                             {
                                                  data.tags.map((tag)=>{
                                                       return <Tag tag={tag.name} key={tag.id} type="tag"/>
                                                  })
                                             }
                                        </div>
                                   </div>
                              }
                         </div>
                    </div>
                    
                    {
                         data.description_raw
                         &&
                         <div className='detailGame__description--container'>
                              <p className='detailGame__description'>{data.description_raw}</p>
                              {/* Limité a 5/6 ligne et ajouter un btn */}
                         </div>
                    }

                    <Gallery id={id} />
                    
                    {
                         (data.platforms[0]?.requirements.minimum ||  data.platforms[0]?.requirements.recommended)
                         &&
                         <div className='detailGame__requirements-container'>
                              <Collapse titre="Config minimum" content={data.platforms[0].requirements.minimum}/>
                              <Collapse titre="Config recommandé" content={data.platforms[0].requirements.recommended}/>
                         </div>
                    }
                    
               </div>
        </div>
        :
        <Loader />
    }
    </>
  )
}
