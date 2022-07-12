import React, { useEffect, useState } from 'react'
import CardContainer from '../../component/cardContainer/CardContainer'
import Header from '../../component/header/Header'
import Loader from '../../component/loader/Loader'
import Pagination from '../../component/pagination/Pagination'
import Searchbar from '../../component/searchbar/Searchbar'

/* Import Hooks */
import { useLoadHomeData } from '../../hooks/loadHomeData'

export default function Home() {

    const [pagination, setPagination] = useState(1)

    const page1 = useLoadHomeData(pagination)
    const resultPerPage = page1.data.results
//     console.log(page1.data)

  return (
    <>
          { 
               !page1.loading &&
               !page1.error ?
                    <div className='home'>
                         <Header />
                         <Searchbar/>
                         <CardContainer loop={resultPerPage}/>
                         <Pagination prev={page1.data.previous} next={page1.data.next}/>
                    </div>
               :
               <Loader />
          }
    </>
  )
}
