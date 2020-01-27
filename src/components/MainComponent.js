import React from 'react';
import Navigation from './Navigation';
import HomeSection from './HomeSection';
import About from './About';
import CarouselSection from './CarouselSection';

const MainComponent = () =>{
    return(
        <React.Fragment>
            <Navigation />
            <HomeSection />
            <About />
            <CarouselSection />
        </React.Fragment>
    )
}

export default MainComponent
