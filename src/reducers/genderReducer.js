import { SET_CURRENT_GENDER } from '../actions/types';

const genderReducer = (state = { currentGender: "" }, action) => {
    console.log("in reducer")
    switch (action.type) {
        case 'SET_CURRENT_GENDER':
            return { ...state, currentGender: "zalupa" };
        default:
            return state;
    }
}
export default genderReducer;