import React from "react"
import { Link } from "react-router-dom";
function NavbarButton(props) {
    return (<div className="dropdown">
        <button className="dropdown-button">{props.name}</button>
        <div className="dropdown-content">
            {props.value.map(item => <a href={item.link}>{item.key}</a>)}
        </div>
    </div>)
}
export default NavbarButton;