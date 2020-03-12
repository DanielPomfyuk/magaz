import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { setCurrentGender } from "../actions/genderAction"
import { useSelector, useDispatch } from "react-redux";
import genderReducer from "../reducers/genderReducer";
import itemsData from "../mokData/ItemsData";
import "../styles/Item.css"

function ItemsCollection() {
    const gender = useSelector(state => state.genderReducer.currentGender)
    const itemsWithCorrectGender = itemsData.filter(item => item.gender === gender)
    const items = itemsWithCorrectGender.map(item => <Item {...item} />)
    return (<div className="collection-container">{items}</div>)
}
export default ItemsCollection;