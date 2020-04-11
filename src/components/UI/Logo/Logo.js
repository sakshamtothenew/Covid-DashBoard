import React from 'react'
import virusImg from '../../../assets/images/covidLogo.png'
import classes from './Logo.module.css'
const Logo = (props) => {

    return (
        <div className = {classes.Logo}>
            <img src = {virusImg} />
             <h2>COVID'19</h2>
        </div>
    )
}

export default Logo