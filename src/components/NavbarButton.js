import React from "react"
import { Link } from "react-router-dom";
import { setCurrentGender } from "../actions/genderAction"
import { useSelector, useDispatch } from "react-redux";
function NavbarButton(props) {
    const dispatch = useDispatch();
    const gender = useSelector(state => state.genderReducer.currentGender)
    return (<div className="dropdown">
        <button className="dropdown-button" onClick={() => dispatch(setCurrentGender(props.gender))}>{props.name}</button>
        <div className="dropdown-content">
            {props.value.map(item => <a href={item.link}>{item.key}</a>)}
        </div>
    </div>)
}
export default NavbarButton;