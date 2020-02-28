import React from "react"
import { Link } from "react-router-dom";
import { setCurrentGender } from "../actions/genderAction"
import { useSelector, useDispatch } from "react-redux";
function NavbarButton(props) {
    const dispatch = useDispatch();
    const gender = useSelector(state => state.genderReducer.currentGender)
    return (<div className="dropdown" style={props.name === "about" ? { float: "right" } : {}}>
        <Link to={props.link}><button className="dropdown-button" onClick={() => dispatch(setCurrentGender(props.gender))}>{props.name}</button></Link>
        <div className="dropdown-content">
            {props.value.map(item => <a href={item.link}>{item.key}</a>)}
        </div>
    </div>)
}
export default NavbarButton;