import {clientsContentData} from "../actions/clientsAC";
import {connect} from "react-redux";
import Clients from "../components/clients"
const mapStateToProps = state => ({
    clients: state.clients,
    header: state.header.header ?
        JSON.parse(state.header.header[Object.keys(state.header.header).find(item => state.header.header[item].system_name === 'clients')].text)
        : ''
});

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(clientsContentData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(Clients)