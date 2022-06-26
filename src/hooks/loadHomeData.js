import { useEffect, useState } from "react";
/**
 * Chargement des données principales
 * @param {*} id 
 * @returns {{
     * loading : boolean,
     * data : [],
     * error : any
 *   }}
 */
export const useLoadHomeData = (page)=> {
     const [loading,setLoading] = useState(true)
     const [data,setData] = useState([])
     const [error,setError] = useState(undefined)
     
     useEffect(()=>{
          const fetchData = () =>{
               fetch(`https://api.rawg.io/api/games?page=${page}&key=57ac9aae572f436a9dc75121ea1bb779`)
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
     }, [])


     return{
          loading,
          data,
          error
     }
}