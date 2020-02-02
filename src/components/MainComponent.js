import React,{ Component } from 'react';
import Navigation from './Navigation';
import HomeSection from './HomeSection';
import About from './About/About';
import PriceSection from './PriceSection/PriceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FAB from './FAB';


class MainComponent extends Component {
    state = {
        intersecting: false
    }

    componentDidMount() {
        const options2 = {}
        const fabPart = document.querySelector("#home")

        const fabObserver = new IntersectionObserver((entries, fabObserver) =>{
            entries.forEach(entry => {
                console.log(entry)
                if(entry.isIntersecting) {
                    this.setState({ intersecting: true})
                } else {
                    this.setState({intersecting: false})
                }
            })
        })

        fabObserver.observe(fabPart)
    }
    render() {
        return(
            <React.Fragment>
                <Navigation />
                <HomeSection />
                <About />
                <PriceSection />
                <ContactSection />
                <Footer />
                { this.state.intersecting === false ? (
                    <FAB />
                ) : (
                    <div style={{visibility: "hidden"}}>
                        <FAB />
                    </div>

                )}
            </React.Fragment>
        )
    }

}

export default MainComponent
