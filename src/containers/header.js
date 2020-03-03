import {headerContentData} from "../actions/headerAC";
import {connect} from "react-redux";
import Header from "../components/header";

const mapStateToProps = state => ({
    header: state.header.header && JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'header')].text)
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(headerContentData(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(Header)