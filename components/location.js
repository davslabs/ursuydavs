import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LocationMini from './locationMini';

const Location = () => {
    return(
        <section className='section position-relative'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='location-title'>
                        <h1>Hospedaje y traslado</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col lg={6} className='mt-5'>
                        <LocationMini 
                            title='Hospedaje'
                            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit.`}
                        />
                    </Col>
                    <Col lg={6} className='mt-5'>
                        <LocationMini 
                            title='Cómo llegar'
                            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Location;