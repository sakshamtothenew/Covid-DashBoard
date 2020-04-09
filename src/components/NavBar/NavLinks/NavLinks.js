import React, { Component } from 'react'
import classes from './NavLink.module.css'
const NavLinks = (props) => {

        return(
            <div className = {classes.NavLinks}>
                <a href="#">{props.children}</a>
            </div>
        )
     
}



export default NavLinks