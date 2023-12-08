import { applyMiddleware, createStore } from "redux";
import {
    FETCH_DATA_ERROR,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS
} from "./actionTypes";
import { thunk } from "redux-thunk";


const initialState = {
    loading: true,
    country: [],
    error: ''
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                country: action.payload,
                error: ''
            };
        case FETCH_DATA_ERROR:
            return {
                loading: false,
                country: [],
                error: action.payload,
            };
        default:
            state;
    }
}

const store = createStore(countryReducer, applyMiddleware(thunk))

export default store