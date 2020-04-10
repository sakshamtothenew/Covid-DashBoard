import React, { useEffect } from 'react'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataWorld from './mapDataWorld'
import getDataArray from './countryCod'

const Map = (props) => {

require('highcharts/modules/map')(Highcharts);
//   const countryCodeArray = getDataArray() ;
 let data ;
  useEffect(() => {
      axios.get('https://corona.lmao.ninja/countries?sort=country')
      .then((Response) => {
        
      })
  })
   return (<div>
       this is map
   </div>)
}

export default Map