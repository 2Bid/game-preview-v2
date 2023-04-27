import React, { useEffect, useState } from 'react'
import { useLoadFilterGameData } from '../../hooks/loadFilterGameData'

import "../../css/filter/filter.css"
import { useLoadSearchGameWithFilter } from '../../hooks/loadSearchGameWithFilter'
import { useDispatch, useSelector } from 'react-redux'

export default function Filter({type, setActualResult}) {

  const dispatch = useDispatch()
  const currentFilters = useSelector((state)=>state.search.currentFilters)
  const inputValue = useSelector((state)=>state.search.inputValue)

  const filterResults = useLoadFilterGameData(`${type}`)

  const [filterType, setFilterType] = useState(false)
  const [filterValue, setFilterValue] = useState(false)

  const applyNewFilter = useLoadSearchGameWithFilter(filterType, filterValue, inputValue)

  const onFilterCheck = (e) => {
	  setFilterType(e.target.attributes.datatype.value)
    if(e.target.attributes.datatype.value === "platforms" || e.target.attributes.datatype.value === "developers" || e.target.attributes.datatype.value === "stores"){
      setFilterValue(e.target.attributes.id.value)
    }
    else{
      setFilterValue(e.target.attributes.datavalue.value)
    }
  }

  useEffect(()=>{
    setActualResult(applyNewFilter.data.results)
  },[applyNewFilter.data])
  

  return (
    <>
      {
        filterResults.data.results &&
        <div className='filter__container'>
          <h3 className='filter__title'>{type}</h3>
          {
            filterResults.data.results.map((el, index)=>{
              return (
                <div className='filter__item' key={index}>
                  <input className='filter__item-checkbox' type="checkbox"  onChange={(e) => onFilterCheck(e)} datatype={type} datavalue={el.slug} id={el.id}></input>
                  <label className='filter__item-label' htmlFor={el.id}>{el.name}</label>
                </div>
              )
            })
          }
        </div>
      }
    </>
  )
}
