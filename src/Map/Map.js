import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataWorld from './mapDataWorld'
import getDataArray from './countryCod'
import classes from './Map.module.css';
import Card from '../hoc/Card/Card';

const Map = (props) => {

  require('highcharts/modules/map')(Highcharts);

  const [countryWiseData, setCountriwiseData] = useState([])

  useEffect(() => {

    axios.get('https://pomber.github.io/covid19/timeseries.json')
      .then((Response) => {
        console.log(Response.data)
      })
    axios.get('https://corona.lmao.ninja/countries?sort=country')
      .then((Response) => {
        const data = Response.data.map((eachCountry) => {
          let str = new String(eachCountry.countryInfo.iso2)
          return [str.toLowerCase(), eachCountry.cases]
        })

        setCountriwiseData(data)

      })
  }, [])

  console.log(countryWiseData)
  const mapOptions = {
    title: {
      text: "Covid-19",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    colorAxis: {
      min: 0,
      stops: [[0.07, '#f6c7c6'], [0.3, '#ed7575'], [0.5, '#ea453d']]
    },


    series: [
      {
        mapData: mapDataWorld,
        name: 'World',
        data: countryWiseData
      }
    ]
  };
  console.log(countryWiseData)

  return (

    <div className={classes.Map}>
      <div className={classes.innerMap}>
        <HighchartsReact
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
      </div>



    </div>

  )
}

export default Map