import React, { useEffect } from 'react'
import axios from 'axios'

const NewsFeed = (props) => {


  useEffect(() => {

       axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=WHO')
       .then((Response) => {
           console.log(Response.data)
       } , [])
  }) 
    return (
        <div>
            this is twitter response
        </div>
    )
}


export default NewsFeed