import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { combineReducers } from 'redux';

const a = function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

const initialState = {}
console.log(rootReducer)
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleWare = [composeEnhancers];

const store = createStore(combineReducers({ a }), initialState, applyMiddleware(...middleWare));
export default store;