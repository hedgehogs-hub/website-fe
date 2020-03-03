import {combineReducers} from "redux";
import header from "./header"
import about from "./about";
import team from "./team";
import services from "./services";
import works from "./works";
import clients from "./clients";
import contact from "./contact";
import testimonials from "./testimonials";

const rootReducer=combineReducers({
    header,
    about,
    team,
    services,
    works,
    testimonials,
    clients,
    contact
});

export default rootReducer