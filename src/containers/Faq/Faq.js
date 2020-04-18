import React, { useState, useEffect } from 'react'
import classes from './Faq.module.css'
import {data} from './staticFaq'

const Faq = () => {

   let arr  = [{Question : "this , demo question" , Answer : "this is demo answer"} ,
   {Question : "this , demo question" , Answer : "this is demo answer"},
   {Question : "this , demo question" , Answer : "this is demo answer"},
   {Question : "this , demo question" , Answer : "this is demo answer"}]
  
      let initialstate = data.map((o) => {
          return {display : false  }
      })

     let [displayArray , setDisplayArray] = useState(initialstate);
      
  
    


   let faqs = data.map((eachEle , i) => {
        return (
            <div className = {classes.eachFaq } >
                <div className = {classes.Question}>
                    <h2>{eachEle.question}</h2>
                    
        <button className = {classes.btn} onClick = {()=>show(i)}>{displayArray[i].display ? "Hide" : "Show"}</button>
                </div>
                <div className = {displayArray[i].display ? classes.show : classes.hide}>
                    <p>{eachEle.answer}</p>
                </div>
            </div>
        )
   })


   let show = (index) => {
       console.log(index);
     setDisplayArray((state) => {
       console.log(state);
        let newstate = [...state];

        console.log(newstate[index].display)
        newstate[index] = {display : !state[index].display};
        console.log(newstate[index].display)
        console.log("new state" , newstate);
        return [...newstate]
     })
   }
    return (
        <div className = {classes.Faq}>
            {faqs}
        </div>
    )
}

export default Faq ;
