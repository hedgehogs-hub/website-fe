import {contactContentData} from "../actions/contactAC";
import {connect} from "react-redux";
import Contact from "../components/contact";
const mapStateToProps = state => ({
    header: state.header.header ?
        JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'aboutContent')].text)
        : ''
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(contactContentData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(Contact)