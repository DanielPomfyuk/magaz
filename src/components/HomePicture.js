import React from "react"
import "../styles/Home.css"
import { Link } from "react-router-dom";
import { setCurrentGender } from "../actions/genderAction"
import { useSelector, useDispatch } from "react-redux";

function HomePicture(props) {
    const dispatch = useDispatch();
    return (<Link to={props.link} onClick={() => dispatch(setCurrentGender(props.gender))}>
        <div className="imageContainer" >
            <img src={props.photo}></img>
            <div className="hoverLayer"><p>{props.gender}</p></div>
        </div>
    </Link>)
}
export default HomePicture;