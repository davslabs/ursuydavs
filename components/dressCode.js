import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const DressCode = () => {
    return (
        <section className='section position-relative'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='rsvp-title'>
                        <h1>Dress code</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col>
                        <div className='rsvp-body'>
                            <h4><p>Podes elegir entre</p></h4>
                            <p className='italic'>Elegante y Elegante Sport</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DressCode;