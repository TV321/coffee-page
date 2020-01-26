import React from 'react';
import '../styles/About.sass';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const About = () => {
    return(
            <Container id="about">
              <Row>
                <Col>
                    <h2>Etiam efficitur euismod</h2>
                    <h3>Praesent hendrerit lorem in augue</h3>

                </Col>
              </Row>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                        <p>Phasellus bibendum arcu sit amet eros scelerisque pharetra.
                            Phasellus sit amet ante non turpis congue sodales id sed odio.
                            Pellentesque urna mauris, cursus in dapibus fringilla, rutrum sed metus.
                        </p>
                    </Col>
                </Row>
              <Row>
                <Col className="cards-col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="//unsplash.it/200" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cards-col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="//unsplash.it/200" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="cards-col">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="//unsplash.it/200" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
              </Row>
            </Container>
    )
}


export default About
