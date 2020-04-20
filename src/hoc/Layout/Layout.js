import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './Layout.module.css'
import Sidedrawer from '../../components/UI/Sidedrawer/SideDrawer'
class Layout extends Component {
    state = {
        showsidedrawer: false
    }

    sidedrawerclosehandler = () => {
        
        this.setState({ showsidedrawer: false })

    }

    togglesideedrawerhandler = () => {
        console.log("this triggers")
        this.setState((prevstate) => {
            return { showsidedrawer: !prevstate.showsidedrawer }
        })
    }
    render() {

        return(
            <div className = {classes.Layout}>
                <NavBar togglehandle = {this.togglesideedrawerhandler}/>
                <Sidedrawer  show = {this.state.showsidedrawer} closehandle = {this.sidedrawerclosehandler}/>
                <div className = {classes.Container}>
                {this.props.children}
                </div>
               
            </div>
        )
    }
}


export default Layout