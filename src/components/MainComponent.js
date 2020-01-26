import React from 'react';
import Navigation from './Navigation';
import HomeSection from './HomeSection';
import About from './About';

const MainComponent = () =>{
    return(
        <React.Fragment>
            <Navigation />
            <HomeSection />
            <About />
        </React.Fragment>
    )
}

export default MainComponent
