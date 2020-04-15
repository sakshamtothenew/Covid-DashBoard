import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../hoc/Card/Card'
import classes from './DynamicStateData.module.css';
import  graph1 from  '../../assets/images/gp.png'
import Up from '../../assets/images/Up.png'
const DynamicStatData = (props) => {

    const [statData, setStateData] = useState({});


    useEffect(() => {
        axios.get("https://corona.lmao.ninja/all")
            .then((Response) => {
                console.log(Response.data)
                const receivedCaseData = Response.data
                setStateData({
                    TotalCase: receivedCaseData["cases"],
                    TotalRecoved: receivedCaseData["todayCases"],
                    TotalDeath: receivedCaseData["deaths"],
                    TotalActive: receivedCaseData["active"]
                })

            })
    }, [])
    const renderState = Object.keys(statData) 
    const dailyCasereport = renderState.map((eachstate) => {

        return (
            <Card>
                <div className = {classes.dailyCasereport}>
                  <div>
                  <p>{eachstate} <img src = {Up} /></p>
                    <h3>{statData[eachstate]}</h3>
                  </div>
                  <div className = {classes.Graph}>
                      <img src = {graph1} />
                  </div>
                 </div>
            </Card>
        )
    })

    return (
        <div className = {classes.dailyCasereportSection}>{dailyCasereport}</div>
    )
}


export default DynamicStatData