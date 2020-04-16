import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../../hoc/Card/Card'
import classes from './DynamicStateData.module.css';
import graph1 from '../../assets/images/gp.png'
import Up from '../../assets/images/Up.png'
import Down from '../../assets/images/Down.png'
import greenGraph from '../../assets/images/greenGraph.png'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/index'
const DynamicStatData = (props) => {

    // const [statData, setStateData] = useState({});
    const statData = {
        TotalCases: useSelector(state => state.TotalStat.TotalCases),
        ActiveCases: useSelector(state => state.TotalStat.ActiveCases),
        Recovered: useSelector(state => state.TotalStat.Recovered),
        Deaths: useSelector(state => state.TotalStat.Deaths)
    }

     const dispatch = useDispatch();

     const getAllStats = () => dispatch(actions.getAllStats());

    useEffect(() => {
         getAllStats()

        // let interval = setInterval(()=> {
        //     axios.get("https://corona.lmao.ninja/all")
        //     .then((Response) => {
        //         console.log(Response.data)
        //         const receivedCaseData = Response.data
        //         setStateData((state) => {
        //             const diff = (receivedCaseData["cases"] - state.TotalCase) - state.diff;
        //           return   {
        //             TotalCase: addCommas(receivedCaseData["cases"]),
        //             TotalRecoved: addCommas(receivedCaseData["recovered"]),
        //             TotalDeath: addCommas(receivedCaseData["deaths"]),
        //             TotalActive: addCommas(receivedCaseData["active"]),
        //             difference : diff 
        //             }
        //         })

        //     })
        // } , (5*60000))

        // return () => clearInterval(interval);
    }, [])



    const renderState = Object.keys(statData)
    const dailyCasereport = renderState.map((eachstate) => {
        if (eachstate != "difference")
            return (
                <Card>
                    <div className={classes.dailyCasereport}>
                        <div>
                            <p>{eachstate} <img src={statData["difference"] >= 0 ? Up : Down} /></p>
                            <h3>{statData[eachstate]}</h3>
                        </div>
                        <div className={classes.Graph}>
                            <img src={statData["difference"] >= 0 ? graph1 : greenGraph} />
                        </div>
                    </div>
                </Card>
            )
    })

    return (
        <div className={classes.dailyCasereportSection}>{dailyCasereport}</div>
    )
}


export default DynamicStatData