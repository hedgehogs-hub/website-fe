import React from "react";
import "../styles/sass/ourServices.css";
import Horse from "../resource/horse.svg"
import Pencil from "../resource/pencil.svg"
import Lightbulb from "../resource/lightbulb.svg"
import Graph from "../resource/graph.svg"
import Desktop from "../resource/desktop.svg"
import Basket from "../resource/basket.svg"
class OurServices extends React.Component{
    componentDidMount() {
        this.props.fetchData("services");
    }
    render() {
        let OurServicesList = this.props.services.map((data, index) => {

            return (
                <div key={index}>
                    <div className="iconParent">
                    <img src={data.image_source} alt="img"/>
                    </div>
                    <h3>{data.name}</h3>
                    <h6>{data.content}</h6>
                </div>
            )
        });
        return (
            <div className="servicesContent" id="services">
                <h1>{this.props.header ? this.props.header.title:""}</h1>
                <div className="servicesContext">
                    <hr/>
                    <h6>{this.props.header ? this.props.header.content:""}</h6>
                    <hr/>
                </div>
                <div className="serviceList">
                    {OurServicesList}
                </div>
            </div>
        )
    }
}

export default OurServices