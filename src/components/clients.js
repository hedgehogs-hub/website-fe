import React from "react";
import "../styles/sass/clients.css";

class Clients extends React.Component{
    componentDidMount() {
        this.props.fetchData("clients");
    }
    render(){
        let clientsList = this.props.clients.map((data, index) => {
            return (
                <img key={index} src={data.image_source} alt={data.name}/>
            )
        })
    return (
        <div className="clientsContent" id="clients">
            <h1>{this.props.header ? this.props.header.title:""}</h1>
            <div className="clientsContext">
                <hr/>
                <h6>{this.props.header ? this.props.header.content:""}</h6>
                <hr/>
            </div>
            <div className="clients">
                {clientsList}
            </div>
        </div>
    )}
}

export default Clients