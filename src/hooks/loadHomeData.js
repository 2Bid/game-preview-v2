import { useEffect, useState } from "react";
/**
 * Chargement des données principales
 * @param {*} id 
 * @returns {{
     * loading : boolean,
     * url : string,
     * data : [],
     * error : any
 *   }}
 */
export const useLoadHomeData = ()=> {
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [url, setUrl] = useState('')
     const [error,setError] = useState(undefined)
     
     useEffect(()=>{
          const fetchData = () =>{
               fetch("https://api.rawg.io/api/games?ordering=released&key=b07cbf09c55746d4a5b6500e38dacf21")
               .then(response =>{
                    setUrl(response.url)
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
     }, [])


     return{
          loading,
          url,
          data,
          error
     }
}