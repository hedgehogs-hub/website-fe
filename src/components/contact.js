import React from "react";
import Facebook from "../resource/fcb.svg";
import Twitter from "../resource/twitter.svg";
import GooglePlus from "../resource/gPlus.svg";
import MapIcon from "../resource/map.svg";
import PhoneIcon from "../resource/phone.png";
import MailIcon from "../resource/mail.png";
import "../styles/sass/contact.css";
import request from "../actions/api";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestMessage: '',
            name: '',
            email: '',
            subject: '',
            message: '',
            messageColor: {}
        }
    }

    sendMessage = async e => {
        e.preventDefault();
        const {name, email, subject, message} = this.state;
        switch (true) {
            case !name && !name.length:
                this.setState({
                    messageColor: {color: 'red'},
                    requestMessage: 'Name Field Is Required'
                });
                break;
            case !email && !email.length:
                this.setState({
                    messageColor: {color: 'red'},
                    requestMessage: 'Email Field Is Required'
                });
                break;
            case !subject && !subject.length:
                this.setState({
                    messageColor: {color: 'red'},
                    requestMessage: 'Subject Field Is Required'
                });
                break;
            case !message && !message.length:
                this.setState({
                    messageColor: {color: 'red'},
                    requestMessage: 'Message Field Is Required'
                });
                break;
            default:
                const res = await request.post('send', {
                    name,
                    email,
                    subject,
                    message
                });
                if (res && res.data === 'success') {
                    this.setState({
                        messageColor: {color: 'green'},
                        requestMessage: 'Your Email Sent Successfully'
                    })
                }
        }
        setTimeout(() => this.setState({requestMessage: ''}), 2000)
    };

    setValues = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {requestMessage, messageColor} = this.state;
        return (
            <div className="contactContent" id="contact">
                <div className="contact">
                    <h2>{this.props.header ? this.props.header.name : ""}</h2>
                    <h5>{this.props.header ? this.props.header.context : ""}</h5>
                    <div className="information">
                        <div>
                            <img src={MapIcon} alt="map"/>
                            <h6>{this.props.header ? this.props.header.address : ""}</h6>
                        </div>
                        <div>
                            <img src={PhoneIcon} alt="phone"/>
                            <h6>{this.props.header ? this.props.header.phone : ""}</h6>
                        </div>
                        <div>
                            <img src={MailIcon} alt="Mail"/>
                            <h6>{this.props.header ? this.props.header.email : ""}</h6>
                        </div>
                    </div>
                    <h3>FOLLOW US</h3>
                    <div className="social">
                        <a href={this.props.header ? this.props.header.social.fb : ""}>
                            <div><img src={Facebook} alt="Facebook"/></div>
                        </a>
                        <a href={this.props.header ? this.props.header.social.twitter : ""}>
                            <div><img src={Twitter} alt="Twitter"/></div>
                        </a>
                        <a href={this.props.header ? this.props.header.social.gMail : ""}>
                            <div><img src={GooglePlus} alt="GooglePlus"/></div>
                        </a>
                    </div>
                </div>
                <form onSubmit={this.sendMessage}>
                    <h2>{this.props.header ? this.props.header.submit.name : ""}</h2>
                    <h5>{this.props.header ? this.props.header.submit.context : ""}</h5>
                    <input onChange={this.setValues} name={'name'} placeholder="Name" type="text"/>
                    <input onChange={this.setValues} name={'email'} placeholder="Email" type="text"/>
                    <input onChange={this.setValues} name={'subject'} placeholder="Subject" type="text"/>
                    <textarea onChange={this.setValues} name={'message'} placeholder="Message"></textarea>
                    {requestMessage ? <div style={messageColor} className={'message'}>{requestMessage}</div> : ''}
                    <button style={{cursor: 'pointer', outline: 'none'}}>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default Contact