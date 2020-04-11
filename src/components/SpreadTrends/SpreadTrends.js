import React, { useEffect, useState } from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from '../../hoc/Card/Card'
import classes from './SpreadTrends.module.css'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios'

const SpreadTrends = (props) => {


    const [GraphData, setGraphData] = useState([])

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
                    groupObj.confirmedCases = sumOfcaseInWorld;
                    groupObj.reCoveredCases = sumOfrecoveredCase;
                    groupObj.deaths = sumOfDeath;
                    structuredData.push(groupObj);
                }

                setGraphData(structuredData);

            })
    }, [])

    const data = GraphData;

    return (

        <Card>
            <LineChart width={448} height={151} data={data}>
                <YAxis tick={{ fontSize: "12px" }} />
                <Tooltip />
                <Line type="monotone" dataKey="confirmedCases" stroke="#FF0019" strokeWidth={0.7} />
                <XAxis dataKey="date" tick={{ fontSize: "12px" }} />
            </LineChart>
        </Card>
    )
}

export default SpreadTrends


