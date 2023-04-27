import React, { useEffect, useState } from 'react'

import CardContainer from '../cardContainer/CardContainer'

import "../../css/searchbar/searchbar.css"

/* Import Hooks */
import { useLoadSearchGame } from '../../hooks/loadSearchGame'
import Loader from '../loader/Loader'
import FiltersContainer from '../filtersContainer/FiltersContainer'
import { useDispatch, useSelector } from 'react-redux'
import { updateInputValue } from '../../features/searchFilter'

export default function Searchbar() {

     const dispatch = useDispatch()
     const inputValue = useSelector((state)=>state.search.inputValue)
     
     const recherche =  useLoadSearchGame(inputValue)

     function onInputChange(e){
          dispatch(updateInputValue(e.target.value))
     }

     const [actualResult, setActualResult] = useState(false)

     const [isInputFocus, setIsInputFocus] = useState(false)
     
     // recherche les jeux si l'input contient au moins deux caractere, sinon rien n'est affiché
     useEffect(()=>{
          if(inputValue.length > 2 && recherche?.data?.results?.length){
               setActualResult(recherche.data.results)
          }
          else if(inputValue.length > 0){
               setIsInputFocus(true)
          }
          else if(inputValue.length === 0){
               setIsInputFocus(false)
               setActualResult(false)
          }
          else{
               setActualResult(false)
          }
     },[recherche.data])

     return (
     <div className='searchbar'>
          <input 
               onChange={(e)=>onInputChange(e)} 
               onFocus={()=>setIsInputFocus(true)}
               value={inputValue}
               placeholder="Recherchez un jeu"
               className='searchbar__input'
          />
          <>
          {
               actualResult && <CardContainer loop={actualResult} />
          }
          {/* Fait apparaitre le menu des filtres si la recherche est activé */}
          {
               isInputFocus && <FiltersContainer setActualResult={setActualResult}/>
          }
          </>
     </div>
     )
}
