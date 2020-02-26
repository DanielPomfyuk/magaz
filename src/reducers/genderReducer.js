import { SET_CURRENT_GENDER } from '../actions/types';

const genderReducer = (state = { currentGender: "" }, action) => {
    switch (action.type) {
        case 'SET_CURRENT_GENDER':
            return { ...state, currentGender: action.gender };
        default:
            return state;
    }
}
export default genderReducer;