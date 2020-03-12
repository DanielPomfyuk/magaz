import React from "react";
import "../styles/Item.css";

function Item(props) {
    return (<div className="productCard">
        <div className="image-container">
            <img className="productImage" src={props.photo}></img>
        </div>
        <div className="container">
            <h4 className="productName">{props.name}</h4>
            <h5 className="productPrice">${props.price}.00</h5>
        </div>
    </div>)
}
export default Item;