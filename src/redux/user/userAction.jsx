import { loggedIn, loggedOut } from "./userType"
export const loginAction = () => {
    return {
        type: loggedIn
    }
}
export const logoutAction = () => {
    return {
        type: loggedOut
    }
}