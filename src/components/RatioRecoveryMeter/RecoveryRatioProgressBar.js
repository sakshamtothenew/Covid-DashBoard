import React, { useEffect, useState } from 'react'
import classes from './RecoveryProgressBar.module.css'
import Card from '../../hoc/Card/Card'
import { useSelector } from 'react-redux'
const RecoveryBar = (props) => {

    const percentage = useSelector(state => state.TotalStat.percentage);
    const statData = useSelector(state => state.TotalStat.Recovered);
    const Cases = useSelector(state => state.TotalStat.TotalCases);
    // const [RecoveryRatio, setRecoveryRatio] = useState({  percentage: 0 , statData: 0 , Cases : 0})

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }


    const percent = 565 - (565 * percentage) / 100;


    return (
        <div className={classes.pt}>
            <Card>
                <h4>Ratio of Recovery</h4>
                <div className={classes.ProgressBar}>
                    <svg className={classes.ProgressSvg}>
                        <circle className={classes.ProgressBar_path} cx="50%" cy="50%" r="90px"></circle>
                        <circle className={classes.ProgressBar_thumb} style={{ strokeDashoffset: percent }} 
                        cx="50%" cy="50%" r="90px"></circle>
                    </svg>
                    <div className={classes.AnalogData}>{percentage}%</div>
                </div>
                <div className={classes.Statistics}>
                    <p>{kFormatter(Cases)} Affected</p>
                    <p>|</p>
                    <p>{kFormatter(statData)} Recovered</p>
                </div>
            </Card>
        </div>
    )
}

export default RecoveryBar 