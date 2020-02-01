import React, { Component } from 'react';
import '../../styles/About.sass';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardImg from '../../images/cardImg.jpg'
import CarouselSection from './CarouselSection';
import { motion } from "framer-motion"
import Title from "./Title";
import Intro from "./Intro";
import Description from "./Description";


class About extends Component{
    state = {
        intersecting: false,
        inter: [
            {
                id: 1,
                int: false,
            },
            {
                id: 2,
                int: false,
            },
            {
                id: 3,
                int: false,
            }
        ]
    }
    componentDidMount() {
        const pageSections = document.querySelectorAll(".section")
        const options = {
            root: null,
            threshold: 0.9,
            // rootMargin: "-100px"
         }
        const observer = new IntersectionObserver((entries, observer) =>{
            entries.forEach(entry => {
                const id = entry.target.id
                const index = id - 1
                if(entry.isIntersecting){
                    this.setState(prevState =>{
                        const newInter = [...prevState.inter]
                        newInter[index].int = true
                        return {inter: newInter}
                    })
                }

            })
        }, options)

        pageSections.forEach(item => {
            observer.observe(item)
        })
    }


    render() {

        if(this.state.inter[2].int === true) {
        }

        return(
                <Container id="about">
                    <div id="1" className="section">
                        { this.state.inter[0].int === true ? (
                            <React.Fragment>
                            <motion.div
                                initial={{ y: "-100%", opacity: 0 }}
                                animate={{ y: "0", opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <Title />
                            </motion.div>
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0", opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                            <Intro />
                            </motion.div>
                            </React.Fragment>
                        ) : (
                            <div style={{ visibility: "hidden"}}>
                            <Title />
                            <Intro />
                            </div>
                        )}

                    </div>

                    <div id="2" className="section">
                        <CarouselSection />
                    </div>

                    <div id="3" className="section">
                    { this.state.inter[2].int === true ? (
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                        <Description />
                        </motion.div>
                    ) : (
                        <div style={{ visibility: "hidden"}}>
                            <Description/>
                        </div>

                    ) }


                    </div>

                </Container>
        )
    }

}


export default About
