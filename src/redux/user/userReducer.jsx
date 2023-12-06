import { loggedIn, loggedOut } from "./userType";
import { createStore } from "redux";
const initialState = {
    userState: false
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case loggedIn:
            return {
                state, userState: true
            };
        case loggedOut:
            return {
                state, userState: state.userState
            }

        default:
            state;
    }
}
const store = createStore(stateReducer)
export default store