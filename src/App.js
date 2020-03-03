import React from 'react';
import Header from './containers/header';
import About from "./containers/about";
import Team from "./containers/team";
import OurServices from "./containers/services";
import OurWorks from "./containers/works";
import Clients from "./containers/clients";
import Contact from "./containers/contact";
import Testimonials from "./containers/testimonials";

const  App =()=> {

    return (
        <div>
            <Header />
            <About />
            <Team />
            <OurServices />
            <OurWorks />
            <Testimonials />
            <Clients />
            <Contact />
        </div>
    );
}

export default App;
