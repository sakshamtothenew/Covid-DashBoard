import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../hoc/Card/Card'
import classes from './DynamicStateData.module.css';
const DynamicStatData = (props) => {

    const [statData, setStateData] = useState({});


    useEffect(() => {
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
            .then((response) => {
                console.log(response.data.results)
                const receivedCaseData = response.data.results[0];
                setStateData({
                    TotalCase: receivedCaseData["total_cases"],
                    TotalRecoved: receivedCaseData["total_recovered"],
                    TotalDeath: receivedCaseData["total_deaths"],
                    TotalActive: receivedCaseData["total_active_cases"]
                })

            })
    }, [])
    const renderState = Object.keys(statData)
    const dailyCasereport = renderState.map((eachstate) => {

        return (
            <Card>
                <div className = {classes.dailyCasereport}>
                  <div>
                  <p>{eachstate}</p>
                    <h3>{statData[eachstate]}</h3>
                  </div>
                  <div className = {classes.Graph}></div>
                 </div>
            </Card>
        )
    })

    return (
        <div className = {classes.dailyCasereportSection}> {dailyCasereport}</div>
    )
}


export default DynamicStatData