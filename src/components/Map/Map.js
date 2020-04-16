import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapDataWorld from './mapDataWorld'
import getDataArray from './countryCod'
import classes from './Map.module.css';
import Card from '../../hoc/Card/Card';
import {useSelector , useDispatch } from 'react-redux'
import  * as actions from '../../store/actions/index'
const Map = () => {

 require('highcharts/modules/map')(Highcharts);
 
const  dispatch = useDispatch();
const  mapData =  useSelector(state => state.countryWiseData.MapData)
const getCountryData = () => dispatch(actions.getCountryWiseData())
  

  
  const mapOptions = {

    chart: {
      backgroundColor: "#fbf6f6", 
    height : 350,
     borderRadius : 8,
     width : 550
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
      stops: [[0.04, '#f6c7c6'], [0.08, '#ed7575'], [0.1 , '#FF797D'] , [0.5, '#ea453d']]
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
      <div className = {classes.title}>
        <h4>COVID-19 Affected Areas</h4>
        <div className = {classes.leager}>
        <div style = {{height : "15px" ,borderRadius: "3px", width : "15px" , backgroundColor : "#f6c7c6" }}></div>
        <p>Least affected</p>
        <div style = {{height : "15px" ,borderRadius: "3px", width : "15px" , backgroundColor : "#ea453d" }}></div>
        <p>Most affected</p>
        </div>
       
      </div>
      <div className={classes.innerMap}>
        <HighchartsReact 
        style = {{backgoundColor : "green"}}
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
      </div>



    </div>

  )
}

export default Map