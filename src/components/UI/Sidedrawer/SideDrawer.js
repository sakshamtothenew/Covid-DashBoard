import React from 'react'
import classes from './SideDrawer.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Logo from '../Logo/Logo'
import NavLinks from '../../NavBar/NavLinks/NavLinks'
const SideDrawer = (props) => {
    let attachclasses;
   if(props.show)
   {
        attachclasses = [classes.SideDrawer , classes.Open]
   }
   else {
        attachclasses = [classes.SideDrawer , classes.Close]
   }
    return (
        <Aux>
            <Backdrop  show = {props.show} click = {props.closehandle} />
            <div className = {attachclasses.join(' ')}>
                <div className = {classes.Logo}>
                <Logo />
                </div>
                <NavLinks place = "sideDrawer" exact link = '/' >Home</NavLinks>
                <NavLinks place = "sideDrawer" link = '/Faq' >Faq</NavLinks> 
                 <NavLinks place ="sideDrawer" link = '/helpfulLink'>Helpful Links</NavLinks>
            </div>

        </Aux>
    )
}

export default SideDrawer