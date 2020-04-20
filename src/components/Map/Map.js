import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector, useDispatch } from 'react-redux'

import mapDataWorld from './mapDataWorld'
import classes from './Map.module.css';



const Map = () => {

  require('highcharts/modules/map')(Highcharts);

  const mapData = useSelector(state => state.countryWiseData.MapData)



  const mapOptions = {

    chart: {
      backgroundColor: "#fbf6f6",
      height: 350,
      borderRadius: 8,
      width: 500
    },
    title: {
      text: "",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    colorAxis: {
      min: 0,
      stops: [[0.04, '#f6c7c6'], [0.08, '#ed7575'], [0.1, '#FF797D'], [0.5, '#ea453d']]
    },
    series: [
      {
        mapData: mapDataWorld,
        name: 'World',
        data: mapData
      }
    ]
  };



  return (

    <div className={classes.Map}>
      <div className={classes.title}>
        <h4>COVID-19 Affected Areas</h4>
        <div className={classes.leager}>
          <div className={classes.leager1}></div>
          <p>Least affected</p>
          <div className={classes.leager2}></div>
          <p>Most affected</p>
        </div>

      </div>
      <div className={classes.innerMap}>
        <HighchartsReact
          style={{ backgoundColor: "green" }}
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
      </div>



    </div>

  )
}

export default Map