import React, { useEffect, useState } from 'react'
import {
    LineChart, Line, XAxis, YAxis ,Tooltip,
} from 'recharts';
import Card from '../../hoc/Card/Card'
import classes from './SpreadTrends.module.css'
import * as actions from '../../store/actions/index'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const SpreadTrends = (props) => {


    const dispatch = useDispatch();
    const  getGraphData  = () => dispatch(actions.getGraphData())
    const GraphData = useSelector(state => state.SpreadTrends.GraphData)
    const [graphType, setGraphType] = useState("Affected")

     
    const [buttonState, setButtonsState] = useState([{ id: 1, flag: true, name: "Affected" },
    { id: 2, flag: false, name: "Recovered" },
    { id: 3, flag: false, name: "Deaths" }])

   useEffect(() => {
    getGraphData();
   } , [])

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

    const buttons = buttonState.map((eachButton , i) => {
        let id = eachButton.id

        return (
            <button key = {i}className={eachButton.flag ? classes.SelectedBtn : classes.Btn}
                onClick={() => graphChangeHandler(id)}>{eachButton.name}</button>
        )
    })

    const data = GraphData;

    return (
        <div className = {classes.SpreadTrend}>
 <Card>
            <div>
                <div className={classes.SpreadHeader}>
                    <h4>Spread Trends</h4>
                    <div className = {classes.btnDiv}>
                        {buttons}
                    </div>
                </div>
                <div className = {classes.Graph}>
                <LineChart width={448} height={155} data={data}>
                    <YAxis tick={{ fontSize: "12px" }} orientation="right" padding={{ bottom: 10 }} />
                    <Tooltip />
                    <Line type="monotone" dot={false} dataKey={graphType} stroke="#FF0019" strokeWidth={2} />
                    <XAxis dataKey="date" tick={{ fontSize: "12px" }} padding={{ right: 5 }} />
                </LineChart>
                </div>
              
            </div>

        </Card>
        </div>
       
    )
}

export default SpreadTrends


