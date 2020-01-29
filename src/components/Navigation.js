import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import '../styles/Navigation.sass';
import logo from '../images/logo.png'

const Navigation = () =>{
    return(
            <div>
            <Navbar collapseOnSelect={true} className="nav-style" expand="md" fixed="top">
                <Container>
                <Navbar.Brand href="#home">
                    <div id="nav-logo">
                        <img
                            alt=""
                            src={ logo }
                            width="auto"
                            height="70"
                            className="d-inline-block align-top"
                        />{' '}
                        <p id="nav-logo-text">Starducks Coffee</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#home" className="nav-links" >Home</Nav.Link>
                        <Nav.Link href="#about" className="nav-links" >About</Nav.Link>
                        <Nav.Link href="#contact-section" className="nav-links" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    )
}

export default Navigation
