import React from "react";
import "../styles/sass/team.css";
import Twitter from "../resource/twitter.svg";
import GooglePlus from "../resource/gPlus.svg";
import Facebook from "../resource/fcb.svg";
import xxxx from "../resource/xxxx.png";


class Team extends React.Component {
    componentDidMount() {
        this.props.fetchData("team");

    }

    render() {
        let teamList = this.props.team.map((data, index) => {
            let socialNetworks=data.socialAccounts.map((item,index)=>{
                return <a className="soc" key={index} href={item.social_network_url+item.account_url}><img src={require(item.social_network_image_source)} alt="Twitter"/></a>
            })
            return (
                <div className="team" key={index}>
                    <div className="imgContent">
                        <img src={data.image_source} alt="T2"/>
                        <div className="social">
                            {socialNetworks}
                        </div>
                    </div>
                    <h3>{data.name}</h3>
                    <h5>{data.position}</h5>
                    <h6>{data.about}</h6>
                </div>
            )
        });
        return (
            <div className="teamContent" id="team">
                <h1>{this.props.header?this.props.header.title:""}</h1>
                <div className="teamContext">
                    <hr/>
                    <h6>{this.props.header?this.props.header.content:""}</h6>
                    <hr/>
                </div>
                <div className="teamList">
                    {teamList}
                </div>
            </div>
        )
    }
}

export default Team