import React from "react";
import '../styles/sass/about.css';
import anchorIcon from "../resource/anchor.png";

import {Link} from "react-scroll";

class About extends React.Component {
    stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        document.getElementById('aboutUsText').innerHTML = doc.body.innerHTML
    };

    render() {
        this.props.header && this.stringToHTML(this.props.header);
        return (
            <div className="aboutContent" id="about">
                <img src={anchorIcon} alt="Anchor"/>
                <h1 id={'aboutUsText'}></h1>
                <Link
                    activeClass=""
                    to="work"
                    smooth={true}
                    offset={-270}
                    duration={500}
                >OUR WORK</Link>
            </div>
        )
    }
}

export default About
