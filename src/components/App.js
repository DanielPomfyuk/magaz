import React from 'react';
import Navbar from './Navbar';
import Item from "./Item";
import ItemsCollection from "./ItemsCollection";
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from "../reducers";
import { Provider } from "react-redux";
import store from "../Store"


function App() {
  return (<Provider store={store}>
    <Navbar />
    <ItemsCollection />
  </Provider>
  )
}

export default App;
