import { useEffect, useState } from "react";
/**
 * Chargement des données principales
 * @param {string} filterType
 * @param {string, number} filterValue
 * @param {string} inputValue
 * @returns {{
     * loading : boolean,
     * data : [],
     * error : any
 *   }}
 */
export const useLoadSearchGameWithFilter = (filterType, filterValue, inputvalue)=> {
     
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [error,setError] = useState(undefined)
     
     useEffect(()=>{
          let filter = `${filterType}=${filterValue}`

          if(filterValue){
               console.log(filterValue)
               filter = `${filter}&${filterType}=${filterValue}`
          }

          const fetchData = () =>{
               fetch(`https://api.rawg.io/api/games?${filter}&search=${inputvalue}&page_size=21&key=b07cbf09c55746d4a5b6500e38dacf21`)
               .then(response =>{
                    return response.json()
               })
               .then((mainData)=>{
                    setData(mainData)
                    setLoading(false)
               })
               .catch(e =>{
                    console.log(e)
                    setError(e)
                    setLoading(false)
               })
          }
          if(!filterValue) return
          
          fetchData()
     }, [filterType, filterValue, inputvalue])


     return{
          loading,
          data,
          error
     }
}