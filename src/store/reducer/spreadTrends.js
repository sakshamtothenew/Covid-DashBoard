
import * as actionType from '../actions/actionTypes'

const initialState = {
    GraphData : []
}

const reducer = (state = initialState , action) => {

    switch(action.type) {

        case(actionType.SET_GRAPH_DATA) : 
        const CountrywiseData = Object.keys(action.RawData.data);
        const noOfDays = action.RawData.data[CountrywiseData[0]].length;
        const noOfCountries = CountrywiseData.length;
        console.log(noOfCountries , noOfDays)
        const structuredData = [];
        for (let i = 0; i < noOfDays; i++) {
            let date = action.RawData.data[CountrywiseData[0]][i].date
            let groupObj = { date: date }
            let sumOfcaseInWorld = 0;
            let sumOfrecoveredCase = 0;
            let sumOfDeath = 0;
            for (let j = 0; j < noOfCountries; j++) {
                sumOfcaseInWorld += action.RawData.data[CountrywiseData[j]][i].confirmed;
                sumOfrecoveredCase += action.RawData.data[CountrywiseData[j]][i].recovered;
                sumOfDeath += action.RawData.data[CountrywiseData[j]][i].deaths
            }
            groupObj.Affected = sumOfcaseInWorld;
            groupObj.Recovered = sumOfrecoveredCase;
            groupObj.Deaths = sumOfDeath;
            structuredData.push(groupObj);
            console.log(structuredData);

        }

        return {
            ...state , 
            GraphData : structuredData
        }
        default : 
        return state
    }
}

export default reducer;