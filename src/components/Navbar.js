import React from "react"
import NavbarData from "../mokData/NavbarData"
import { render } from "@testing-library/react";
import NavbarButton from "./NavbarButton";
import "../styles/Navbar.css";
class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            buttons: NavbarData
        }
    }
    render() {
        const buttonComponents = this.state.buttons.map(button => <NavbarButton {...button} />)
        return (<div className="navbar-family">
            {buttonComponents}
        </div>)
    }
}
export default Navbar;