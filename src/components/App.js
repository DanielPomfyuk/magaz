import React from 'react';
import Navbar from './Navbar';
import Home from "./Home.js";
import ItemsCollection from "./ItemsCollection";
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../Store"

function App() {
    return (< Provider store={store} >
        <Router >
            < Navbar />
            <Switch>
                <Route path="/items"><ItemsCollection /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>
    </Provider >
    )
}
export default App;