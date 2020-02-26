import React from 'react';
import Navbar from './Navbar';
import Item from "./Item";
import ItemsCollection from "./ItemsCollection";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function App() {
  return (<Provider store={store}>
    <Navbar />
    <ItemsCollection />
  </Provider>
  )
}

export default App;
