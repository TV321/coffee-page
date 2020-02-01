import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Intro = () => {
    return(
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
                <p>
                    Phasellus bibendum arcu sit amet eros scelerisque pharetra.
                    Phasellus sit amet ante non turpis congue sodales id sed odio.
                    Pellentesque urna mauris, cursus in dapibus fringilla, rutrum sed metus.
                </p>
            </Col>
        </Row>
    )
}

export default Intro
