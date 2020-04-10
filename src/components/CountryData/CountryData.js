import axios from 'axios'
import React , { useEffect, useState } from 'react'
import Card from '../../hoc/Card/Card'
import classes from './CountryData.module.css'
import Searchbar from '../UI/SearchBar/Searchbar'

const Country = () => {

    const [countryData , setCountrydata] = useState([])
     useEffect(()=> {
        axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then((Response) => {

            console.log(Response.data[0].countryInfo.iso2.toLowerCase())

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
                        <div className = {classes.CountryInfo}>
                        <img className = {classes.Img} src = {eachCountry.flag} alt = "countryflag" />
                          <h4>{eachCountry.countryName}</h4>
                        </div>
                        <div className = {classes.Statistics}>
                        <p>TotalAffected : {eachCountry.TotalAffected}</p>
                        <p> | </p>
                        <p> TotalRecovered : {eachCountry.TotalRecovered}</p>
                        </div>
                      
                    </Card>
            
            )

     })
        return (   <div className = {classes.CountryDiv}> <Card>
            <Searchbar />
 {CountryWiseData}
</Card> </div>)

}


export default Country