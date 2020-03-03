import {getMoreWorks} from "../actions/worksAC";
import {connect} from "react-redux";
import OurWorks from "../components/ourWorks";

const mapStateToProps = state => ({
    works: state.works.works,
    setLoaderFalse: state.works.setLoaderFalse,
    header: state.header.header && JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'Works')].text)
});
const mapDispatchToProps = dispatch => ({
    fetchData: (url, start, end) => dispatch(getMoreWorks(url, start, end))
});
export default connect(mapStateToProps, mapDispatchToProps)(OurWorks)