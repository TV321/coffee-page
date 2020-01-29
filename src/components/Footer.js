import React from 'react';
import '../styles/Footer.sass';
import logo2 from '../images/logo3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stars from '../images/stars.png';





const Footer = () => {
    return(
        <Container  fluid={true} id="footer">
            <Container>
            <Row>
                <Col className="footer-col" sm={12} xs={{order: 3}} sm={{ order: 3}} md={{order: 1}} md={4}>
                    <p className="footer-text">2020 © Starducks. All rigths reserved.</p>
                </Col>
                <Col className="footer-col" sm={12} md={4} md={{order: 6}}>
                    <img id="logo2" src={ logo2 }/>
                </Col>
                <Col className="footer-col" sm={12} md={4} md={{order: 12}}>
                    <img id="stars" src={ Stars }/>
                </Col>
              </Row>
              </Container>
        </Container>

    )
}

export default Footer
