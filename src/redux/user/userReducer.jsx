import { LOGIN } from "./userType";
import { createStore } from "redux";

const initialState = {
    active: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                active: true
            }

        default:
            return state
    }
}
const store = createStore(userReducer)
export default store