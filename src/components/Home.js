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
        return (<React.Fragment>
            <div className="saleBanner"><div className="word"><h1>SALE</h1></div></div>
            <div className="imageCollection">
                {pictureComponents}
            </div>
        </React.Fragment>)
    }
}
export default Home;