import {aboutContentData} from "../actions/aboutAC";
import {connect} from "react-redux";
import About from "../components/about";

const mapStateToProps = state => ({
    header: state.header.header ?
         JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'aboutContent')].text).about
        : ''
});
const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(aboutContentData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(About)