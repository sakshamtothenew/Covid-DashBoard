import React from 'react'
import classes from './NavLink.module.css'
import { NavLink } from 'react-router-dom'
const NavLinks = (props) => {

    let actstyle = {
        height: "100%",
        padding: "1.2rem 0",
        color: "#FF0019",
        borderBottom: "3px solid #FF0019"
    }

    if (props.place === 'sideDrawer') {
        actstyle = {
            height: "100%",
            padding: "1.2rem 0",
            color: "#FF0019",
        }
    }

    return (
        <div className={classes.NavLinks}>
            <NavLink to={props.link} exact={props.exact}
                activeStyle={actstyle}>
                {props.children}
            </NavLink>
        </div>
    )

}



export default NavLinks