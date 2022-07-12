import { useEffect, useState } from "react";
/**
 * Chargement des données principales
 * @param {string} value
 * @returns {{
     * loading : boolean,
     * data : [],
     * error : any
 *   }}
 */
export const useLoadSearchGame = (value)=> {
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [error,setError] = useState(undefined)
     
     useEffect(()=>{
          const fetchData = () =>{
               fetch(`https://api.rawg.io/api/games?search=${value}&key=b07cbf09c55746d4a5b6500e38dacf21`)
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
     
          fetchData()
     }, [value])


     return{
          loading,
          data,
          error
     }
}