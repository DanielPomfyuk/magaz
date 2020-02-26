import React from "react";
import Item from "./Item";
import "./Item.css";
import { connect } from "react-redux";
import { setCurrentGender } from "./actions/genderAction"
import { useSelector, useDispatch } from "react-redux";
import genderReducer from "./reducers/genderReducer";

function ItemsCollection() {
    const items = [<Item />, <Item />, <Item />, <Item />]
    const dispatch = useDispatch();
    const gender = useSelector(state => state.genderReducer.currentGender)
    return (<div className="itemsCollection">
        <h1>{gender}</h1>
        <button onClick={() => dispatch(setCurrentGender())}>lalal</button>
        {items}
    </div>)
}
export default ItemsCollection;