import React from 'react'
import Loader from '../../component/loader/Loader'
import Searchbar from '../../component/searchbar/Searchbar'
import Slider from '../../component/slider/Slider'
import { useLoadOrderingGameData } from '../../hooks/loadOrderingGameData'

import "./../../css/home/home.css"


export default function Home() {

  const loadGameRelease = useLoadOrderingGameData("released")
  const gameReleaseResults = loadGameRelease.data.results

  const loadGameOrdering = useLoadOrderingGameData("metacritic") // ordered ne marche pas ?
  const gameOrdering = loadGameOrdering.data.results



  return (
    <div className='home'>
      <Searchbar/>

      {/* Chargement du premier slider */}
      {
      !loadGameRelease.loading &&
      !loadGameRelease.error ? 
        <Slider titre="Découvrez les dernières nouveautés" imgs={gameReleaseResults}/>
      :
        <Loader/>
      }

      {/* Chargement du deuxieme slider */}
      {
      !loadGameOrdering.loading &&
      !loadGameOrdering.error ? 
        <Slider titre="Les mieux notés" imgs={gameOrdering}/>
      :
        <Loader/>
      }    
    </div>
  )
}
