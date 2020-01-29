import React from 'react';
import Navigation from './Navigation';
import HomeSection from './HomeSection';
import About from './About';
import CarouselSection from './CarouselSection';
import PriceSection from './PriceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const MainComponent = () =>{
    return(
        <React.Fragment>
            <Navigation />
            <HomeSection />
            <CarouselSection />
            <About />
            <PriceSection />
            <ContactSection />
            <Footer />
        </React.Fragment>
    )
}

export default MainComponent
