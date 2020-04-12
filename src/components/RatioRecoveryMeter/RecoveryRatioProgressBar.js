import React, { useEffect, useState } from 'react'
import classes from './RecoveryProgressBar.module.css'
import Card from '../../hoc/Card/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts'
import axios from 'axios'
const RecoveryBar = (props) => {

    const [RecoveryRatio , setRecoveryRatio] = useState({bar : [{name : 'recoveryRate' , value : 0}] , statData : 0})
    useEffect(()=> {
        axios.post('https://api.thevirustracker.com/free-api?global=stats')
        .then((Response) => {
            console.log(Response.data)

          const totalCases = Response.data.results[0].total_cases;
          const Recovered = Response.data.results[0].total_recovered;
           const ratio  = parseInt((Recovered/totalCases)*100);
                console.log(Response.data);
           setRecoveryRatio({bar : [{name : 'recoveryRate' , value : ratio}] , statData : Recovered})
           
        })
    } , [])


    const data = RecoveryRatio.bar;
    console.log(data);
    console.log(RecoveryRatio);


    const circleSize = 250;
    return (
        <div className = {classes.pt}>
        <Card>
           
            <h3>Ratio of Recovery</h3>

<RadialBarChart
    width={circleSize}
    height={circleSize}
    cx={circleSize / 2}
    cy={circleSize / 2}
    innerRadius={90}
    outerRadius={100}
    barSize={3}
    data={data}
    startAngle={90}

    endAngle={-270} >

    <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
        style = {{backgroundColor : "#999999"}}

    />
    <RadialBar

        clockWise
        dataKey="value"
        cornerRadius={circleSize / 2}
        fill="#82ca9d"

    />
  
       
        <text className = {classes.PercentIndicator}
    
        x={circleSize / 2}
        y={circleSize / 2}
        textAnchor="middle"
        dominantBaseline="middle">{data[0].value}%</text>
       
  
</RadialBarChart>


<div className={classes.AnalogData}>
    <p>{RecoveryRatio.statData} Recovered</p>
</div>
          
           
        </Card>
        </div>
    )
}

export default RecoveryBar 