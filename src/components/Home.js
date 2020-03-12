import React from "react"
import { render } from "@testing-library/react";
import "../styles/Home.css"
import picturesData from "../mokData/choiceImages"
import HomePicture from "./HomePicture"
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            pictures: picturesData
        }
    }
    render() {
        const pictureComponents = this.state.pictures.map(picture => <HomePicture {...picture} />)
        return (<div className="imageCollection">
            {pictureComponents}
        </div>)
    }
}
export default Home;