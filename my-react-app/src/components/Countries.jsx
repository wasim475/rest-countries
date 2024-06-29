import { useEffect, useState } from "react"
import Country from "./Country"
import './country.css'

const Countries = () => {
    let [countriesData, setCountriesData] = useState([])
    let [visitedCountry, setVisitedCountry]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountriesData(data))
    },[])

    let handleVisitedCountry = ()=>{
      
    }

  
  return (
    <>
      <div className="country-container">
      {
            countriesData.map(country=><Country key={country.cca3} country={country}></Country>
            )
        }
      </div>
    </>
  )
}

export default Countries