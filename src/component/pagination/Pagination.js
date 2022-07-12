import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoadHomeData } from '../../hooks/loadHomeData'

// import "./pagination.css"

export default function Pagination(props) {

    let pageNumberPrev
    let pageNumberNext

    props.prev ? pageNumberPrev = props.prev[props.prev.length - 1] : pageNumberPrev = undefined
    props.next ? pageNumberNext = props.next[props.next.length - 1] : pageNumberNext = undefined

    let nextUrl

    const PrevResult =(url)=>{
        useLoadHomeData(url)
    }
    const NextResult = (url) =>{
        useLoadHomeData(url)
        nextUrl = useLoadHomeData(pageNumberNext)
    }

    // console.log(useLoadHomeData())

  return (
    <div className='pagination'>
        {/* {
            props.prev ?
            <p onClick={PrevResult(PrevResult.url)}>&#60;</p>
            :
            <></>
        }
        {
            props.next ?
            <p onClick={NextResult(nextUrl)}>&gt;</p>
            :
            <></>
        } */}
    </div>
  )
}
