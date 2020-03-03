import React from "react";
import Navbar from './navbar';
import "../styles/sass/header.css";
import appleHeadphones from '../resource/apple-headphones.png';
import brushboxNew from '../resource/brushbox-new.png';
import coffeeCup from '../resource/coffee-cup.png';
import iphoneNew from '../resource/iphone-new.png';
import mbpNew from '../resource/mbp-new.png';
import padNew from '../resource/pad-new.png';
import Loader from '../resource/loader.svg';

class Header extends React.Component {
    componentDidMount() {
        this.props.fetchData("messages")
    }

    state = {
        loader: {display: "block"},
        brushboxNewStyle: {left: "-235px"},
        appleHeadphonesStyle: {bottom: "-200px"},
        coffeeCupStyle: {right: "-200px"},
        iphoneNewStyle: {left: "-200px"},
        mbpNewStyle: {bottom: "-290px"},
        padNewStyle: {right: "-330px"},
        navStyle: {display: "none"},
        headerTextH1Style: {
            top: "-50px",
            opacity: "0"
        },
        headerTextH5Style: {
            top: "-90px",
            opacity: "0"
        },
    }

    render() {
        window.onload = () => {
            var brushboxNewLeft = document.getElementsByClassName("brushboxNew")[0]&&document.getElementsByClassName("brushboxNew")[0].style.left;
            var appleHeadphonesBottom = document.getElementsByClassName("appleHeadphones")[0].style.bottom;
            var iphoneNewLeft = document.getElementsByClassName("iphoneNew")[0].style.left;
            var coffeeCupRight = document.getElementsByClassName("coffeeCup")[0].style.right;
            var padNewRight = document.getElementsByClassName("padNew")[0].style.right;
            var mbpNewBottom = document.getElementsByClassName("mbpNew")[0].style.bottom;
            setTimeout(() => {
                this.setState({
                    loader: {display: "none"},
                    brushboxNewStyle: {brushboxNewLeft},
                    iphoneNewStyle: {iphoneNewLeft},
                    appleHeadphonesStyle: {appleHeadphonesBottom},
                    coffeeCupStyle: {coffeeCupRight},
                    padNewStyle: {padNewRight},
                    mbpNewStyle: {mbpNewBottom},
                    headerTextH1Style: {top: "0px"},
                    headerTextH5Style: {top: "0px"},
                    navStyle: {display: "block"},
                })
            }, 500)
        }
        return (
            <div className="header" id="header">
                <Navbar/>
                <div className="sliderContent">
                    <img style={this.state.loader} src={Loader} alt="loader" className="loader"></img>
                    <div className="headerText">
                        <h1 style={this.state.headerTextH1Style}>{this.props.header ? this.props.header.title : ""}</h1>
                        <h5 style={this.state.headerTextH5Style}>{this.props.header ? this.props.header.content : ""}</h5>
                    </div>
                    <img style={this.state.brushboxNewStyle} className="brushboxNew" src={brushboxNew}
                         alt="brushbox-new"/>
                    <img style={this.state.appleHeadphonesStyle} className="appleHeadphones" src={appleHeadphones}
                         alt="apple-headphones"/>
                    <img style={this.state.coffeeCupStyle} className="coffeeCup" src={coffeeCup} alt="coffee-cup"/>
                    <img style={this.state.iphoneNewStyle} className="iphoneNew" src={iphoneNew} alt="iphone-new"/>
                    <img style={this.state.mbpNewStyle} className="mbpNew" src={mbpNew} alt="mbp-new"/>
                    <img style={this.state.padNewStyle} className="padNew" src={padNew} alt="pad-new"/>
                </div>
            </div>
        )

    }

}

export default Header