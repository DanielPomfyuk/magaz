import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { setCurrentGender } from "../actions/genderAction"
import { useSelector, useDispatch } from "react-redux";
import genderReducer from "../reducers/genderReducer";
import itemsData from "../mokData/ItemsData";

function ItemsCollection() {
    const items = itemsData.map(item => <Item {...item} />)
    console.log("HEREEEE" + { items })
    const dispatch = useDispatch();
    const gender = useSelector(state => state.genderReducer.currentGender)
    return (<div className="itemsCollection">
        <h1>{gender}</h1>
        <button onClick={() => dispatch(setCurrentGender())}>lalal</button>
        {items}
    </div>)
}
export default ItemsCollection;