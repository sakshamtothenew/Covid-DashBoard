import React from 'react'
import classes from './RecoveryProgressBar.module.css'
import Card from '../../hoc/Card/Card'
const RecoveryBar = (props) => {

    return (
        <div className = {classes.ProgressBar}>
            <Card>
                <h3>Ratio of Recovery</h3>
                <div className = {classes.ProgressChart}>
                    <div className = {classes.PercentIndicator}>
                        <span>49%</span>
                    </div>
                </div>
                <div className = {classes.AnalogData}>
                    <p>these are no.</p>
                </div>
            </Card>
        </div>
    )
}

export default RecoveryBar 