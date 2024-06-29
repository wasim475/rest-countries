import { useState } from "react"


const Country = ({country}) => {
    console.log(country)
    let {name,flags, area, capital, population}= country

    let [visit, setVisit] = useState(false)

    let countryStyle = {
        color: 'red',
        border: '1px solid blue',
        borderRadius : '10px',
        padding: '10px',
        marginBottom: '10px'

    }

    let handleVisit = ()=>{
        setVisit(!visit)
    }
  return (
    <>
    <div style={countryStyle}>
   <h2> Country: {name?.common}</h2>
   <h4>Capital: {capital}</h4>
   <h4>Area: {area} km<sup>2</sup> </h4>
   <h4>Population: {population}</h4>
  
    <img src={flags?.png}></img>

    <button>mark as visited</button>

    <button onClick={handleVisit}>{visit? 'visited': 'going'}</button>

    
    </div>
    </>
  )
}

export default Country