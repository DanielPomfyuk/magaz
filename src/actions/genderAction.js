import { SET_CURRENT_GENDER } from "./types"
export const setCurrentGender = (gender) => {
    return ({
        type: 'SET_CURRENT_GENDER',
        gender: gender
    })
}