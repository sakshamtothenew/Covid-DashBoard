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
                    TotalCase: addCommas(receivedCaseData["cases"]),
                    TotalRecoved: addCommas(receivedCaseData["recovered"]),
                    TotalDeath: addCommas(receivedCaseData["deaths"]),
                    TotalActive: addCommas(receivedCaseData["active"])
                })

            })
    }, [])

    function addCommas(nStr){
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
       }

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