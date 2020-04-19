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
               <NavLinks  exact link = '/'>Home </NavLinks>
                <NavLinks link = '/Faq'>Faq</NavLinks>
                <NavLinks link = '/helpfulLink'>HelpFul links</NavLinks>
               </div>
              
           </header>
        )
    }
}

export default NavBar;