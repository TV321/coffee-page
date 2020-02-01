import React, { Component } from 'react';
import '../styles/PriceSection.sass';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from "framer-motion"

class PriceSection extends Component {
    state = {
        inter: [
            {
                id: 1,
                int: false
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
            threshold: 0.9
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach( entry => {
                const id = entry.target.id
                console.log(entry)
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

        let firstRow = ""
        if (this.state.inter[0].int === true) {
            firstRow =
        <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.6 }}
            >
        <Row>
            <Col>
                <h2>£ 9.95</h2>
                <h3>Pellentesque urna mauris</h3>
                <p>Sed tempus nulla nulla. Phasellus bibendum arcu sit amet eros scelerisque pharetra. Phasellus sit amet ante non turpis congue sodales id</p>
            </Col>
            <Col>
                <h2>£ 6.95</h2>
                <h3>Pellentesque urna mauris</h3>
                <p>Sed tempus nulla nulla. Phasellus bibendum arcu sit amet eros scelerisque pharetra. Phasellus sit amet ante non turpis congue sodales id</p>
            </Col>
        </Row>
        </motion.div>
        }

        let secondRow = ""
        if(this.state.inter[1].int === true) {
            secondRow =
            <motion.div
                initial={{ y: "200%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                >
                <Row>
                   <Col>
                       <h2>£ 3.95</h2>
                       <h3>Pellentesque urna mauris</h3>
                       <p>Sed tempus nulla nulla. Phasellus bibendum arcu sit amet eros scelerisque pharetra. Phasellus sit amet ante non turpis congue sodales id</p>
                   </Col>
                   <Col>
                       <h2>£ 4.95</h2>
                       <h3>Pellentesque urna mauris</h3>
                       <p>Sed tempus nulla nulla. Phasellus bibendum arcu sit amet eros scelerisque pharetra. Phasellus sit amet ante non turpis congue sodales id</p>
                   </Col>
                </Row>
            </motion.div>
        }
        return(
            <Container fluid={true} id="price-section">
                <Container  id="inner-section">

                        <div className="section2" id="1">
                            { firstRow }
                        </div>

                        <div className="section2" id="2">
                            { secondRow }
                        </div>
                </Container>
            </Container>
        )
    }

}
export default PriceSection
