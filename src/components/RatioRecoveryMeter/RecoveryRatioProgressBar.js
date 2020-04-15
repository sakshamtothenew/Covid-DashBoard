import React, { useEffect, useState } from 'react'
import classes from './RecoveryProgressBar.module.css'
import Card from '../../hoc/Card/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts'
import axios from 'axios'
const RecoveryBar = (props) => {

    const [RecoveryRatio, setRecoveryRatio] = useState({  percentage: 0 , statData: 0 , Cases : 0})
    useEffect(() => {


        axios.get('https://corona.lmao.ninja/all')
            .then((Response) => {
                console.log(Response.data)

                const totalCases = Response.data.cases;
                const Recovered = Response.data.recovered;
                const ratio = ((Recovered / totalCases) * 100).toFixed(1);
                console.log(Response.data);
                setRecoveryRatio({  percentage : ratio , statData: kFormatter(Recovered) , Cases : kFormatter(totalCases)})

            })
    }, [])

   
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }
    const data = RecoveryRatio.bar;
    console.log(data);
    console.log(RecoveryRatio);

    const percent = 565 - (565 * RecoveryRatio.percentage)/100;
    
    
    return (
        <div className={classes.pt}>
            <Card>

                <h4>Ratio of Recovery</h4>

                <div className={classes.ProgressBar}>
                  
                    <svg className = {classes.ProgressSvg}>
                        <circle className={classes.ProgressBar_path} cx="50%" cy="50%" r="90px"></circle>
                        <circle className={classes.ProgressBar_thumb} style = {{strokeDashoffset : percent }}cx="50%" cy="50%" r="90px"></circle>
                       
                    </svg>
                    <div className = {classes.AnalogData}>{RecoveryRatio.percentage}%</div>
                </div>
 
                <div className = {classes.Statistics}>
                    <p>{RecoveryRatio.Cases} Affected</p>
                    <p>|</p>
                    <p>{RecoveryRatio.statData} Recovered</p>
                </div>


            </Card>
        </div>
    )
}

export default RecoveryBar 