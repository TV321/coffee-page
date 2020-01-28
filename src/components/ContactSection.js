import React from 'react';
import '../styles/ContactSection.sass';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactSection = () => {
    return(
        <Container fluid={true} id="contact-section">
            <Container  id="inner-contact">
                <h2>Contact Us</h2>
                <h3>Ante non turpis congue</h3>
                <Form>
                    <Form.Group>

                        <Form.Label>Name</Form.Label>
                        <div className="input-wrap">
                            <Form.Control type="text" placeholder="Name"  />
                        </div>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <div className="input-wrap">
                        <Form.Control type="email" placeholder="Enter email" />
                        </div>
                    </Form.Group>
                    <Form.Group>
                       <Form.Label>Message</Form.Label>
                       <div className="input-wrap">
                       <Form.Control as="textarea" rows="3" />
                       </div>
                     </Form.Group>

                  <Button type="submit" className="contact-btn">
                    Submit
                  </Button>
                  
                </Form>
            </Container>
        </Container>
    )
}

export default ContactSection
