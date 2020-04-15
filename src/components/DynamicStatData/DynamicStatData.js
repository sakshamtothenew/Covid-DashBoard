import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../hoc/Card/Card'
import classes from './DynamicStateData.module.css';
import  graph1 from  '../../assets/images/gp.png'
import Up from '../../assets/images/Up.png'
import Down from '../../assets/images/Down.png'
import greenGraph from '../../assets/images/greenGraph.png'
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
                    TotalActive: addCommas(receivedCaseData["active"]) , 
                    difference : 0
                })

            })

            let interval = setInterval(()=> {
                axios.get("https://corona.lmao.ninja/all")
                .then((Response) => {
                    console.log(Response.data)
                    const receivedCaseData = Response.data
                    setStateData((state) => {
                        const diff = (receivedCaseData["cases"] - state.TotalCase) - state.diff;
                      return   {
                        TotalCase: addCommas(receivedCaseData["cases"]),
                        TotalRecoved: addCommas(receivedCaseData["recovered"]),
                        TotalDeath: addCommas(receivedCaseData["deaths"]),
                        TotalActive: addCommas(receivedCaseData["active"]),
                        difference : diff 
                        }
                    })
    
                })
            } , (5*60000))

            return () => clearInterval(interval);
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
        if(eachstate!="difference")
        return (
            <Card>
                <div className = {classes.dailyCasereport}>
                  <div>
                  <p>{eachstate} <img src = {statData["difference"]>=0 ? Up : Down} /></p>
                    <h3>{statData[eachstate]}</h3>
                  </div>
                  <div className = {classes.Graph}>
                      <img src = {statData["difference"] >=0? graph1 : greenGraph} />
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