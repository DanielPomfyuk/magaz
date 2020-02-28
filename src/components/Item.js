import React from "react";
import "../styles/Item.css";

function Item(props) {
    return (<div className="col-sm col-md-6 col-lg-3 ftco-animate">
        <div className="product">
            <a href="#" className="img-prod"><img className="img-fluid" src={props.photo} /></a>
            <div className="text py-3 px-3">
                <h3><a href="#">{props.name}</a></h3>
                <div className="d-flex">
                    <div className="pricing">
                        <p className="price"><span>${props.price}.00</span></p>
                    </div>
                </div>
                <hr />
                <p className="bottom-area d-flex">
                    <a> Add to cart</a>
                </p>
            </div>
        </div>
    </div>)
}
export default Item;