import {servicesContentData} from "../actions/servicesAC";
import {connect} from "react-redux";
import OurServices from "../components/ourServices";
const mapStateToProps = state => ({
    services: state.services,
    header: state.header.header ?
        JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'services')].text)
        : ''
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(servicesContentData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(OurServices)