import React from "react";
import "../styles/sass/testimonials.css";

class Testimonials extends React.Component {
    state = {
        sliderChildWidth: 0
    };
    intervalID = 0;
    n = 0

    componentDidMount() {
        this.props.fetchData("testimonials");

        window.addEventListener("resize", () => {
            this.getWindowWidth();
            this.sliderSize();
            //document.getElementById("slider").style.left = 0
            clearInterval(this.intervalID);
        });
        window.addEventListener("load", () => {
            this.sliderSize();
            this.getWindowWidth();
            //document.getElementById("slider").style.left = 0

        });

    }

    getWindowWidth = () => {
        var sliderChildWidth;
        sliderChildWidth = document.getElementById("testimonials").clientWidth - document.getElementsByClassName("block")[0].clientWidth * 2;
        this.setState({sliderChildWidth});
    };

    sliderSize = () => {
        const sliderChildWidth = document.getElementById("testimonials").clientWidth - document.getElementsByClassName("block")[0].clientWidth * 2;
        for (var i in document.getElementById("slider").children) {
            if (document.getElementById("slider").children[i].style) {
                document.getElementById("slider").children[i].style.width = sliderChildWidth + 'px'
            }
        }
    };

    renderImages = () => {
        const {sliderChildWidth} = this.state;
        if (document.getElementsByClassName("sliderPos")[0]) document.getElementsByClassName("sliderPos")[0].innerHTML = '';
        return this.props.testimonials.map((data, index) => {
            var div = document.createElement('div');
            div.className = "sld";
            document.getElementsByClassName("sliderPos")[0].appendChild(div);
            return (
                <div className="slides" key={index} style={{width: sliderChildWidth + 'px'}}>

                    <img draggable="false"
                         src={data.client_image_source}
                         alt=""/>
                    <h3>{data.content}</h3>
                    <h3>{data.client_position ? data.client_name + " – " + data.client_position : data.client_name}</h3>
                </div>
            )
        });
    };

    render() {
        var sliderChildWidth = this.state.sliderChildWidth;
        var leftX;
        var clickCordX;
        var newCord;
        var changedX;
        var clicked = false;
        var mouseClickX;
        var n;
        n = 1;
        const touchStart = e => {
            if (e.clientX) {
                clicked = true;
                mouseClickX = e.clientX
            }
            if (document.getElementById("slider")) {
                sliderChildWidth = document.getElementById("slider").children[0].clientWidth;
            }
            var rect = document.getElementById("slider").getBoundingClientRect();
            if (e.touches) clickCordX = e.touches[0].clientX;
            leftX = rect.x - document.getElementsByClassName("block")[0].clientWidth;
            changedX = 0
        };
        const onMouseMove = e => {
            clearInterval(this.intervalID);
            document.getElementById("slider").style.transition = "0s";
            if (e.touches) {
                if (e.touches[0]) var touchX = e.touches[0].clientX;
                changedX = touchX - clickCordX;
                newCord = touchX - clickCordX + leftX;
                if (document.getElementById("slider")) document.getElementById("slider").style.left = newCord + "px";
            }
            if (clicked) {
                document.getElementById("slider").style.cursor = "grab";
                if (e.clientX) touchX = e.clientX;
                changedX = touchX - mouseClickX;
                newCord = touchX - mouseClickX + leftX;

                if (document.getElementById("slider")) document.getElementById("slider").style.left = newCord + "px";
            } else {
                document.getElementById("slider").style.cursor = "default"
            }

        };
        document.getElementsByTagName('img').ondragstart = function () {
            return false;
        };
        var nextPos = -sliderChildWidth;
        var sliderActived = true;
        var sliderBackActived = true;
        var sliderIcon = 0
        const touchEnd = e => {
            clearInterval(this.intervalID);
            if (document.getElementById("slider")) document.getElementById("slider").style.transition = ".5s";
            var rect = document.getElementById("slider").getBoundingClientRect();
            if (e.clientX) {
                if (mouseClickX - e.clientX > 150) {
                    if (sliderActived) {
                        n++
                        document.getElementById("slider").style.left = -this.state.sliderChildWidth * (n - 1) + "px";
                        nextPos = nextPos - sliderChildWidth;
                        sliderBackActived = true
                        for (var i = 0; i < document.getElementsByClassName("sld").length; i++) {
                            document.getElementsByClassName("sld")[i].style.background = "white"
                        }
                        sliderIcon++
                        if (document.getElementsByClassName("sld")[sliderIcon]) document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                    } else {
                        n = 1
                        nextPos = -sliderChildWidth;
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = 0;
                        sliderActived = true

                        for (i = 0; i < document.getElementsByClassName("sld").length; i++) {
                            document.getElementsByClassName("sld")[i].style.background = "white"
                        }
                        sliderIcon = 0
                        document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                    }
                } else if (mouseClickX - e.clientX < -150) {
                    if (sliderBackActived) {
                        if (document.getElementsByClassName("sld")[sliderIcon]) {
                            for (i = 0; i < document.getElementsByClassName("sld").length; i++) {
                                document.getElementsByClassName("sld")[i].style.background = "white"
                            }
                            sliderIcon--
                            document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                        }
                        nextPos += sliderChildWidth;
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = -this.state.sliderChildWidth * (n - 2) + "px";
                        n--
                    } else {
                        nextPos = -sliderChildWidth;
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = 0;
                    }
                } else {
                    document.getElementById("slider").style.left = rect.x - document.getElementsByClassName("block")[0].clientWidth - changedX + "px";
                }
                if (document.getElementById("slider").style.left === -sliderChildWidth * (document.getElementById("slider").childElementCount - 1) + "px") {
                    sliderActived = false
                }
                if (document.getElementById("slider").style.left === "0px") {
                    sliderBackActived = false
                }
                clicked = false
            }

            //////////////////////////////////////////////////////////////////////////////////////////////////////////////

            if (e.touches) {
                if (rect.x > 0) {
                    sliderBackActived = false
                }
                if (changedX < -150) {
                    if (sliderActived) {
                        clearInterval(this.intervalID);
                        for (i = 0; i < document.getElementsByClassName("sld").length; i++) {
                            document.getElementsByClassName("sld")[i].style.background = "white"
                        }
                        sliderIcon++
                        if (document.getElementsByClassName("sld")[sliderIcon]) document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                        n++
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = -this.state.sliderChildWidth * (n - 1) + "px";
                        nextPos += -sliderChildWidth;
                        sliderBackActived = true
                    } else {
                        n = 1
                        nextPos = -sliderChildWidth;
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = 0;
                        sliderActived = true

                        for (i = 0; i < document.getElementsByClassName("sld").length; i++) {
                            document.getElementsByClassName("sld")[i].style.background = "white"
                        }
                        sliderIcon = 0;
                        document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                    }
                } else if (changedX > 150) {
                    if (sliderBackActived) {
                        nextPos += sliderChildWidth;
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = -this.state.sliderChildWidth * (n - 2) + "px";
                        n--
                        if (document.getElementsByClassName("sld")[sliderIcon]) {
                            for (i = 0; i < document.getElementsByClassName("sld").length; i++) {
                                document.getElementsByClassName("sld")[i].style.background = "white"
                            }
                            sliderIcon--
                            document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                        }
                    } else {
                        nextPos = -sliderChildWidth;
                        if (document.getElementById("slider")) document.getElementById("slider").style.left = 0;
                    }
                } else {
                    document.getElementById("slider").style.left = rect.x - document.getElementsByClassName("block")[0].clientWidth - changedX + "px";
                }
                if (document.getElementById("slider").style.left === -sliderChildWidth * (document.getElementById("slider").childElementCount - 1) + "px") {
                    sliderActived = false
                }
                if (document.getElementById("slider").style.left === "0px") {
                    sliderBackActived = false
                }
            }
            changedX = 0
        };

        const mouseOut = e => {
            var rect = document.getElementById("slider").getBoundingClientRect();
            document.getElementById("slider").style.left = rect.x - document.getElementsByClassName("block")[0].clientWidth - changedX + "px"
            clicked = false;
            changedX = 0
        }
        this.intervalID = setInterval(() => {
            if (sliderActived && n !== document.getElementById("slider").children.length) {
                if (document.getElementById("slider")) document.getElementById("slider").style.transition = ".5s";
                //document.getElementsByClassName("sld")[sliderIcon].style.background = "white"
                for (var i = 0; i < document.getElementsByClassName("sld").length; i++) {
                    document.getElementsByClassName("sld")[i].style.background = "white"
                }
                sliderIcon++
                if (document.getElementsByClassName("sld")[sliderIcon]) document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
                if (document.getElementById("slider")) document.getElementById("slider").style.left = -this.state.sliderChildWidth * n + "px"
                n++
                this.n = n
            } else {
                if (document.getElementById("slider")) document.getElementById("slider").style.transition = ".5s";
                if (document.getElementById("slider")) document.getElementById("slider").style.left = 0;
                n = 1
                for (i = 0; i < document.getElementsByClassName("sld").length; i++) {
                    document.getElementsByClassName("sld")[i].style.background = "white"
                }
                sliderIcon = 0
                document.getElementsByClassName("sld")[sliderIcon].style.background = "aqua"
            }
        }, 2000000)
        return (
            <div className="testimonialsContent" id="testimonials">
                <div className="block"></div>
                <div onMouseLeave={mouseOut} className="testimonials-container"
                     style={{width: '80%', position: 'absolute', left: '10%', height: '100%', pointerEvent: 'none'}}>
                    <div onMouseMove={onMouseMove} onMouseDown={touchStart}
                         onMouseUp={touchEnd} onTouchEnd={touchEnd} onTouchStart={touchStart}
                         onTouchMove={onMouseMove}
                         className="testimonials" id="slider">
                        {this.renderImages()}
                    </div>
                </div>
                <div className="block"></div>
                <div className="sliderPos" id="sld"></div>
            </div>
        )
    }
}


export default Testimonials