import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setGraphData = (RawData) => {

    return {
        type: actionTypes.SET_GRAPH_DATA,
        RawData: RawData
    }
}


export const getGraphData = () => {

    return dispatch => {
        axios.get('https://pomber.github.io/covid19/timeseries.json')
            .then(Response => {

                dispatch(setGraphData(Response));

            })
    }
}