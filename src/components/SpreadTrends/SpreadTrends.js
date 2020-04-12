import React, { useEffect, useState } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from '../../hoc/Card/Card'
import classes from './SpreadTrends.module.css'

import axios from 'axios'

const SpreadTrends = (props) => {


    const [GraphData, setGraphData] = useState([])

    const [graphType, setGraphType] = useState("Affected")

    const [buttonState, setButtonsState] = useState([{ id: 1, flag: true, name: "Affected" },
    { id: 2, flag: false, name: "Recovered" },
    { id: 3, flag: false, name: "Deaths" }])

    useEffect(() => {
        axios.get('https://pomber.github.io/covid19/timeseries.json')
            .then((Response) => {

                console.log(Response.data)
                const CountrywiseData = Object.keys(Response.data);
                const noOfDays = Response.data[CountrywiseData[0]].length;
                const noOfCountries = CountrywiseData.length;
                const structuredData = [];
                for (let i = 0; i < noOfDays; i++) {
                    let date = Response.data[CountrywiseData[0]][i].date
                    let groupObj = { date: date }
                    let sumOfcaseInWorld = 0;
                    let sumOfrecoveredCase = 0;
                    let sumOfDeath = 0;
                    for (let j = 0; j < noOfCountries; j++) {
                        sumOfcaseInWorld += Response.data[CountrywiseData[j]][i].confirmed;
                        sumOfrecoveredCase += Response.data[CountrywiseData[j]][i].recovered;
                        sumOfDeath += Response.data[CountrywiseData[j]][i].deaths
                    }
                    groupObj.Affected = sumOfcaseInWorld;
                    groupObj.Recovered = sumOfrecoveredCase;
                    groupObj.Deaths = sumOfDeath;
                    structuredData.push(groupObj);
                }

                setGraphData(structuredData);

            })
    }, [])

    const graphChangeHandler = (id) => {
        const btnState = [...buttonState];
        console.log(btnState);
        for (let i in buttonState) {
            if (buttonState[i].id == id) {
                setGraphType(buttonState[i].name)
                btnState[i].flag = true;

            }
            else {
                btnState[i].flag = false;

            }
        }
        setButtonsState(btnState);

    }

    const buttons = buttonState.map((eachButton) => {
        let id = eachButton.id

        return (
            <button className={eachButton.flag ? classes.SelectedBtn : classes.Btn}
                onClick={() => graphChangeHandler(id)}>{eachButton.name}</button>
        )
    })

    const data = GraphData;

    return (

        <Card>
            <div>
                <div className={classes.SpreadHeader}>
                    <h4>Spread Trends</h4>
                    <div>
                        {buttons}
                    </div>
                </div>
                <LineChart width={448} height={151} data={data}>
                    <YAxis tick={{ fontSize: "12px" }} orientation="right" padding = {{bottom : 10}} />
                    <Tooltip />
                    <Line type="monotone" dot={false} dataKey={graphType} stroke="#FF0019" strokeWidth={2} />
                    <XAxis dataKey="date" tick={{ fontSize: "12px" }} padding = {{right : 5}} />
                </LineChart>
            </div>

        </Card>
    )
}

export default SpreadTrends


