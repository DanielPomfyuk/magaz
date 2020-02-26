import React from "react";
import "../styles/Item.css";

function Item(props) {
    return (<div className="card">
        <img src={props.photo}></img>
        <h1>{props.name}</h1>
        <p className="price">{props.price}$</p>
    </div>)
}
export default Item;