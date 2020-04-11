import React from 'react'
import { Component } from 'react';
import NavLinks from './NavLinks/NavLinks'
import classes from './NavBar.module.css'
import Logo from  '../UI/Logo/Logo'
class NavBar extends Component {

    render() {

        return(
           <header className = {classes.NavBar}>
               <div className = {classes.Logo}>
                   <Logo />
               </div>
               <div className = {classes.Navlink}>
               <NavLinks>home </NavLinks>
                <NavLinks>Faq</NavLinks>
                <NavLinks>HelpFul links</NavLinks>
               </div>
              
           </header>
        )
    }
}

export default NavBar;