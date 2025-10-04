import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const API_URL = "https://api.countrystatecity.in/v1/countries";
const API_KEY = `${import.meta.env.VITE_COUNTRY_STATE_CITY_API}==`;

const fetchRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchData = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});

const asyncFunc = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const res = await axios.get(API_URL, {
        headers: {
          "X-CSCAPI-KEY": API_KEY,
        },
      });

      dispatch(fetchData(res.data));
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };
};

export default asyncFunc;
