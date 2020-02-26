import { SET_CURRENT_GENDER } from "./types"
export const setCurrentGender = () => {
    console.log("in action!!!")
    return ({
        type: 'SET_CURRENT_GENDER'
    })
}