import React from "react";
import "../styles/sass/ourWorks.css";
import Loader from "../resource/loader.svg"

class OurWorks extends React.Component {
    state = {
        page: 2,
        loader: {display: "block"},
        workList: [],
        disabled: {}
    };

    componentDidMount() {
        this.props.fetchData("portfolio", this.state.page - 1);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.works !== this.props.works) {
            this.setState({loader: {display: "none"}})
        }
        if (this.props.setLoaderFalse && this.props.setLoaderFalse !== prevProps.setLoaderFalse) {
            this.setState({
                loader: {display: "none"},
                disabled: {
                    background: '#575763',
                    color: 'white',
                    cursor: 'default'
                }
            })
        }
    }

    render() {
        const {works} = this.props;
        //var count = 4;
        var page = this.state.page;

        const getMoreData = () => {
            this.setState({loader: {display: "block"}});
            this.props.fetchData("portfolio", this.state.page);
            page++;
            this.setState(page = {page});
        };
        return (
            <div className="worksContent" id="works">
                <h1>{this.props.header ? this.props.header.title : ""}</h1>
                <div className="worksContext">
                    <hr/>
                    <h6>{this.props.header ? this.props.header.content : ""}</h6>
                    <hr/>
                </div>
                <div className="workList">
                    <img style={this.state.loader} src={Loader} alt="Loader" className="loader"/>
                    {works.map((data, index) => {
                        return (
                            <div key={index} className="work">
                                <img src={data.image_source} alt="img"/>
                                <div className="workInfo">
                                    <h4>{data.name}</h4>
                                    <h6>{data.content}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button id="test" disabled={this.props.setLoaderFalse} style={this.state.disabled}
                        onClick={getMoreData}>LOAD MORE
                </button>
            </div>
        )
    }
}


export default OurWorks