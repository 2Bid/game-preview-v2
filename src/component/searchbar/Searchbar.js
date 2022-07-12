import React, { useState } from 'react'

import "../../css/searchbar/searchbar.css"
import { useLoadSearchGame } from '../../hooks/loadSearchGame'
import CardContainer from '../cardContainer/CardContainer'

export default function Searchbar() {
     let [inputValue, setInputValue] = useState("")  

     const recherche =  useLoadSearchGame(inputValue)

     function onInputChange(e){
          setInputValue(e.target.value)
     }
     

     return (
     <div className='searchbar'>
          <input 
               onChange={(e)=>onInputChange(e)} 
               value={inputValue}
               placeholder="Recherchez un jeu"
          >
          </input>
          {
               inputValue.length > 1 &&
               recherche?.data?.results?.length  ?
               <div>
                    <CardContainer loop={recherche.data.results} />
               </div>
               :
               <></>
          }
     </div>
     )
}
