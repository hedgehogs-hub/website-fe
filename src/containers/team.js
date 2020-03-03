import {teamContentData} from "../actions/teamAC";
import {connect} from "react-redux";
import Team from "../components/team";
const mapStateToProps = state => ({
    team: state.team,
    header: state.header.header ?
        JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'team')].text)
        : ''
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(teamContentData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(Team)