import * as actionType from './actionTypes'
import axios from 'axios'


export const setAllStats = (StatisticalData) => {

      return {
          type : actionType.SET_STAT_DATA , 
           StatisticalData : StatisticalData
      }

}


export const getAllStats = () => {

    return dispatch => {

        axios.get('https://corona.lmao.ninja/all')
        .then(Response => {
            console.log(Response.data)
             dispatch(setAllStats(Response));
        })
    }
}
