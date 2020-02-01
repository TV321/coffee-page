import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardImg from '../../images/cardImg.jpg'

const Description = () => {
    return(
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
    )
}

export default Description
