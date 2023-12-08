import {
    FETCH_DATA_ERROR,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS
} from "./actionTypes"
import axios from "axios";


const fetchRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}
const fetchData = (country) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: country
    }
}
const fetchError = (error) => {
    return {
        type: FETCH_DATA_ERROR,
        payload: error
    }
}

const asyncFunc = () => {
    return dispatch => {
        dispatch(fetchRequest())
        axios.get('https://restcountries.com/v3.1/all')
            .then(res =>
                dispatch(fetchData(res.data))
            )
            .catch(err =>
                dispatch(fetchError(err.message))
            )
    }
}
export default asyncFunc