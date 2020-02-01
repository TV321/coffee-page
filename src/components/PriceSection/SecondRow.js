import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SecondRow = () => {
    return(
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
    )
}

export default SecondRow
