import axios from 'axios'
import React , { useEffect, useState } from 'react'
import Card from '../../hoc/Card/Card'
import classes from './CountryData.module.css'

const Country = () => {

    const [countryData , setCountrydata] = useState([])
     useEffect(()=> {
        axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then((Response) => {

            // console.log(Response.data[0])

           const  OnlyRequiredData  =  Response.data.map((eachCountry) => {
                return {TotalAffected : eachCountry.cases , 
                TotalRecovered : eachCountry.recovered , 
                flag :  eachCountry.countryInfo.flag , 
            countryName : eachCountry.country}

           
            })
            setCountrydata(OnlyRequiredData);

        })

     } , [])

     console.log(countryData)
     const CountryWiseData = countryData.map((eachCountry) => {
            return (
                
                    <Card>
                        <h4>{eachCountry.countryName}</h4>
                        <p>totalAffected : {eachCountry.TotalAffected}</p>
                        <p>TotalRecovered : {eachCountry.TotalRecovered}</p>
                        <img className = {classes.Img} src = {eachCountry.flag} alt = "countryflag" />
                    </Card>
            
            )

     })
        return (   <div className = {classes.CountryDiv}> <Card>
 {CountryWiseData}
</Card> </div>)

}


export default Country