import React from 'react'
import classes from './Searchbar.module.css'

const Searchbar = () => {

  return(
      <form>
          <div className = {classes.Searchbar}>
          <i class="fa fa-search" aria-hidden="true"></i>
      <input placeholder = "Search Country" className = {classes.InnerSearchbar} />
          </div>
    


      </form>
  )
}

export default Searchbar