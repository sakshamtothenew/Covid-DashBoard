import React from 'react'
import classes from './Searchbar.module.css'
import { destroyObjectProperties } from 'highcharts'


const Searchbar = (props) => {

  return(
      <form>
          <div className = {classes.Searchbar}>
          <i className="fa fa-search" aria-hidden="true"></i>
      <input   onChange = {props.searchFilterHandler} placeholder = "Search Location" className = {classes.InnerSearchbar} />
          </div>
    


      </form>
  )
}

export default Searchbar