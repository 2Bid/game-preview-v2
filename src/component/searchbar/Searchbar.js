import React, { useEffect, useState } from 'react'

import CardContainer from '../cardContainer/CardContainer'

import "../../css/searchbar/searchbar.css"

/* Import Hooks */
import { useLoadSearchGame } from '../../hooks/loadSearchGame'
import Loader from '../loader/Loader'
import FiltersContainer from '../filtersContainer/FiltersContainer'


export default function Searchbar() {

     let [inputValue, setInputValue] = useState('')
     const recherche =  useLoadSearchGame(inputValue)

     function onInputChange(e){
          setInputValue(e.target.value)
     }

     const [actualResult, setActualResult] = useState(false)
     
     // recherche les jeux si l'input contient au moins deux caractere, sinon rien n'est affiché
     useEffect(()=>{
          if(inputValue.length > 2 && recherche?.data?.results?.length){
               setActualResult(recherche.data.results)
          }
          else{
               setActualResult(false)
          }
     },[inputValue])

     return (
     <div className='searchbar'>
          <input 
               onChange={(e)=>onInputChange(e)} 
               value={inputValue}
               placeholder="Recherchez un jeu"
               className='searchbar__input'
          />
          <>
          {
               actualResult.length && <CardContainer loop={actualResult} />
          }
          {/* Fait apparaitre le menu des filtres si la recherche est activé */}
          {
               actualResult.length && <FiltersContainer />
          }
          </>
     </div>
     )
}
