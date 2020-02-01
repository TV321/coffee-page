import React from 'react';
import Navigation from './Navigation';
import HomeSection from './HomeSection';
import About from './About/About';
import PriceSection from './PriceSection/PriceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const MainComponent = () =>{
    return(
        <React.Fragment>
            <Navigation />
            <HomeSection />
            <About />
            <PriceSection />
            <ContactSection />
            <Footer />
        </React.Fragment>
    )
}

export default MainComponent
