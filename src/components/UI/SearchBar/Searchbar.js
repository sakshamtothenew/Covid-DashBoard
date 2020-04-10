import React from 'react'
import classes from './Searchbar.module.css'
import { destroyObjectProperties } from 'highcharts'


const Searchbar = (props) => {

  return(
      <form>
          <div className = {classes.Searchbar}>
          <i class="fa fa-search" aria-hidden="true"></i>
      <input   onChange = {props.searchFilterHandler} placeholder = "Search Country" className = {classes.InnerSearchbar} />
          </div>
    


      </form>
  )
}

export default Searchbar