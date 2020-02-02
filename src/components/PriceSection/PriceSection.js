import React, { Component } from 'react';
import '../../styles/PriceSection.sass';
import Container from 'react-bootstrap/Container'
import { motion } from "framer-motion"
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'


class PriceSection extends Component {
    state = {
        inter: [
            {
                id: 1,
                int: false,
            },
            {
                id: 2,
                int: false
            }
        ]
    }

    componentDidMount(){
        const pageSections = document.querySelectorAll(".section2")
        const options = {
            root: null,
            threshold: 0.5
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach( entry => {
                const id = entry.target.id
                // console.log(entry)
                const index = id - 1
                if(entry.isIntersecting) {
                    this.setState(prevState => {
                        const newInter = [...prevState.inter]
                        newInter[index].int = true
                        return { inter: newInter }
                    })
                }
            }
            )
        }, options)

        pageSections.forEach(item => {
            observer.observe(item)
        })
    }
    render() {

        return(
            <Container fluid={true} id="price-section">
                <Container  id="inner-section">
                        <div className="section2" id="1">
                            { this.state.inter[0].int === true ? (
                                <motion.div
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: "0", opacity: 1 }}
                                    transition={{ duration: 2 }}
                                >
                                <FirstRow />
                                </motion.div>
                                ) :
                                (
                                <div style={{ visibility: "hidden"}}>
                                    <FirstRow />
                                </div>
                                 )
                            }

                    </div>
                        <div className="section2" id="2">
                            { this.state.inter[1].int === true ? (
                                <motion.div
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: "0", opacity: 1 }}
                                    transition={{ duration: 2 }}
                                    >
                                <SecondRow />
                                </motion.div>
                            ) : (
                                <div style={{ visibility: "hidden"}}>
                                    <SecondRow />
                                </div>
                            ) }
                        </div>
                </Container>
            </Container>
        )
    }

}
export default PriceSection
