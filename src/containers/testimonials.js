import {testimonialsContentData} from "../actions/testimonialsAC";
import {connect} from "react-redux";
import Testimonials from "../components/testimonials";
const mapStateToProps = state => ({
    testimonials: state.testimonials,
    title: state.header
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(testimonialsContentData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(Testimonials)