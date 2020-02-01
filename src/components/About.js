import React, { Component } from 'react';
import '../styles/About.sass';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardImg from '../images/cardImg.jpg'
import CarouselSection from './CarouselSection';
import { motion } from "framer-motion"


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
            threshold: 1,
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
        // observer.observe(one)
    }


    render() {

        let firstPart = ""
        if (this.state.inter[0].int === true) {
            firstPart =
            <React.Fragment>
            <Row>
              <Col>
                  <motion.h2
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{ duration: 1 }}
                      >
                      Etiam efficitur euismod
                  </motion.h2>
                  <motion.h3
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: "0", opacity: 1 }}
                      transition={{ duration: 1 }}
                      >
                      Praesent hendrerit lorem in augue
                  </motion.h3>

              </Col>
            </Row>

              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                      <motion.p
                          initial={{ y: "150%", opacity: 0 }}
                          animate={{ y: "0", opacity: 1 }}
                          transition={{ duration: 1 }}

                          >
                          Phasellus bibendum arcu sit amet eros scelerisque pharetra.
                          Phasellus sit amet ante non turpis congue sodales id sed odio.
                          Pellentesque urna mauris, cursus in dapibus fringilla, rutrum sed metus.
                      </motion.p>
                  </Col>
              </Row>
              </React.Fragment>

        }
        let thirdPart = ""
        if(this.state.inter[2].int === true) {
            thirdPart =
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ duration: 1 }}
                >
                    <Row>
                      <Col className="cards-col" md={4}>
                          <Card style={{ maxWidth: '360px' }}>
                              <Card.Img variant="top" src={ CardImg } />
                              <Card.Body>
                                  <Card.Title className="card-title">Euismod Cursus</Card.Title>
                                   <Card.Subtitle className="mb-2 card-subtitle">Cras ac mattis dolor</Card.Subtitle>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the bulk of
                                      the card's content.
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col className="cards-col" md={4}>
                          <Card style={{ maxWidth: '360px' }}>
                              <Card.Img variant="top" src={ CardImg } />
                              <Card.Body>
                                  <Card.Title className="card-title">Euismod Cursus</Card.Title>
                                   <Card.Subtitle className="mb-2 card-subtitle">Cras ac mattis dolor</Card.Subtitle>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the bulk of
                                      the card's content.
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col className="cards-col" md={4}>
                          <Card style={{ maxWidth: '360px' }}>
                              <Card.Img variant="top" src={ CardImg } />
                              <Card.Body>
                                  <Card.Title className="card-title">Euismod Cursus</Card.Title>
                                   <Card.Subtitle className="mb-2 card-subtitle">Cras ac mattis dolor</Card.Subtitle>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the bulk of
                                      the card's content.
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                    </Row>
            </motion.div>

        }


        return(
                <Container id="about">
                    <div id="1" className="section">
                        { firstPart }
                    </div>

                    <div id="2" className="section">
                        <CarouselSection />
                    </div>

                    <div id="3" className="section">
                        { thirdPart }
                    </div>

                </Container>
        )
    }

}


export default About
