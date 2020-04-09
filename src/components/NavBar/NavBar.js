import React from 'react'
import { Component } from 'react';
import NavLinks from './NavLinks/NavLinks'
class NavBar extends Component {

    render() {

        return(
           <header>
               <div>logo</div>
               <NavLinks>home </NavLinks>
                <NavLinks>Faq</NavLinks>
                <NavLinks>HelpFul links</NavLinks>
           </header>
        )
    }
}

export default NavBar;