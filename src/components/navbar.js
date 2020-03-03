import React, {useState, useEffect} from "react";
import "../styles/sass/navbar.css";
import logoOne from "../resource/logo1.png";
import logoTwo from "../resource/logo2.png";
import {Link} from "react-scroll";


const Navbar = (props) => {
    const [navStyle, setNavStyle] = useState()
    const [hr, setHr] = useState()
    window.addEventListener("scroll", () => {

    })
    const changeButton = () => {
        if (!active) {
            setNavPos({top:"0"})
            setActive("active");
            setMenuPos({
                top:"89px"
            })
            setNavStyle({
                position: "fixed",
                zIndex: 999,
                maxWidth: "100%",
                padding: "20px 34px",
                background: "white"
            })
        } else if (active) {
            setNavPos({top:"-90px"})
            setActive("");
            setMenuPos({})
        }
    }
    const [active, setActive] = useState('')
    const [menuPos, setMenuPos] = useState({})
    const [navPos, setNavPos] = useState({})

            useEffect(
                window.onscroll=  function fun(){
                    var header = document.querySelector('#header');
                    var headerPos = header.getBoundingClientRect();

                    var about = document.querySelector('#about');
                    var aboutPos = about.getBoundingClientRect();

                    var team = document.querySelector('#team');
                    var teamPos = team.getBoundingClientRect();

                    var services = document.querySelector('#services');
                    var servicesPos = services.getBoundingClientRect();

                    var works = document.querySelector('#works');
                    var worksPos = works.getBoundingClientRect();

                    var testimonials = document.querySelector('#testimonials');
                    var testimonialsPos = testimonials.getBoundingClientRect();

                    var clients = document.querySelector('#clients');
                    var clientsPos = clients.getBoundingClientRect();

                    var contact = document.querySelector('#contact');
                    var contactPos = contact.getBoundingClientRect();


                    if((headerPos.top-window.innerHeight/2 <= 0 && headerPos.bottom >=0 &&headerPos.bottom-window.innerHeight>=0)||(headerPos.top >= 0 && headerPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "11px"
                        })
                    }
                    if((aboutPos.top-window.innerHeight/2 <= 0 && aboutPos.bottom >=0 &&aboutPos.bottom-window.innerHeight>=0)||(aboutPos.top >= 0 && aboutPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "82px",
                            width: "50px"
                        })
                    }
                    if((teamPos.top-window.innerHeight/2 <= 0 && teamPos.bottom >=0 &&teamPos.bottom-window.innerHeight>=0)||(teamPos.top >= 0 && teamPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "158px",
                            width: "42px"
                        })
                    }
                    if((servicesPos.top-window.innerHeight/2 <= 0 && servicesPos.bottom >=0 &&servicesPos.bottom-window.innerHeight>=0)||(servicesPos.top >= 0 && servicesPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "224px",
                            width: "65px"
                        })
                    }
                    if((worksPos.top-window.innerHeight/2 <= 0 && worksPos.bottom >=0 &&worksPos.bottom-window.innerHeight>=0)||(worksPos.top >= 0 && worksPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "311px"
                        })
                    }
                    if((testimonialsPos.top-window.innerHeight/2 <= 0 && testimonialsPos.bottom >=0 &&testimonialsPos.bottom-window.innerHeight>=0)||(testimonialsPos.top >= 0 && testimonialsPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "383px",
                            width: "95px"
                        })
                    }
                    if((clientsPos.top-window.innerHeight/2 <= 0 && clientsPos.bottom >=0 &&clientsPos.bottom-window.innerHeight>=0)||(clientsPos.top >= 0 && clientsPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "505px",
                            width: "57px"
                        })
                    }
                    if((contactPos.top-window.innerHeight/2 <= 0 && contactPos.bottom >=0 &&contactPos.bottom-window.innerHeight>=0)||(contactPos.top >= 0 && contactPos.bottom <= window.innerHeight)) {
                        setHr({
                            left: "587px",
                            width: "65px"
                        })
                    }

                    if (document.getElementsByTagName("html")[0].scrollTop > 76 && navStyle === undefined) {
                        setNavStyle({
                            position: "fixed",
                            zIndex: 999,
                            maxWidth: "100%",
                            padding: "20px 34px",
                            background: "white"
                        })
                    } else if (document.getElementsByTagName("html")[0].scrollTop < 76 && navStyle !== undefined) {
                        setNavStyle()
                    }

                }

            , []);

    return (
        <div className="navbar" style={navStyle}>
            <a className="homeLink" href="/"><img className="test" src={logoOne} alt="Logo"/></a>
            <a className="homeLink" href="/"><img src={logoTwo} alt="Logo"/></a>
            <div onClick={changeButton} className="menuButton">
                <div className={`one ${active}`}></div>
                <div className={`two ${active}`}></div>
                <div className={`three ${active}`}></div>
            </div>
            <div style={menuPos} className="menu">
                <nav style={navPos}>
                    <Link
                        className="menuItem"
                        activeClass=""
                        to="header"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "11px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >HOME</Link>

                    <Link
                        className="menuItem"
                        activeClass="pasive"
                        to="about"
                        smooth={true}
                        offset={-90}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "82px",
                                width: "50px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >ABOUT</Link>
                    <Link
                        className="menuItem"
                        activeClass="pasive"
                        to="team"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "158px",
                                width: "42px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >TEAM</Link>
                    <Link
                        activeClass="pasive"
                        to="services"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "224px",
                                width: "65px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >SERVICES</Link>
                    <Link
                        activeClass="pasive"
                        to="work"
                        smooth={true}
                        offset={-270}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "311px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >WORK</Link>
                    <Link
                        activeClass="pasive"
                        to="testimonials"
                        smooth={true}
                        offset={-155}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "383px",
                                width: "95px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >TESTIMONIALS</Link>
                    <Link
                        activeClass="pasive"
                        to="clients"
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "505px",
                                width: "57px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >CLIENTS</Link>
                    <Link
                        activeClass="pasive"
                        to="contact"
                        smooth={true}
                        offset={-25}
                        duration={500}
                        onClick={(e) => {
                            setHr({
                                left: "587px",
                                width: "65px"
                            })
                            setActive("")
                            setMenuPos({})
                            setNavPos({top:"-90px"})
                        }}
                    >CONTACT</Link>
                    <hr style={hr} className="underLine"/>
                </nav>
            </div>
        </div>
    )
}
export default Navbar