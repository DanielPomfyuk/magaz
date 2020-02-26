import { SET_CURRENT_GENDER } from "./types"
export const setCurrentGender = () => {
    return ({
        type: 'SET_CURRENT_GENDER',
        gender: "men"
    })
}