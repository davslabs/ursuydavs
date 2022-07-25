import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Location = () => {
    return(
        <section className='section position-relative'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='location-title'>
                        <h1>Hospedaje</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col className='mt-5'>
                        <div className='location-content'>
                            <p>Para quienes quieran quedarse a pasar la noche, el salón cuenta con una posada con habitaciones para quienes quieran alli alojarse</p>
                            <p>Haciendo click <a href="https://drive.google.com/file/d/1c05d2XdM8KLnbPX1BTNPjQGJNK_9WTYD/view?usp=sharing">acá</a> van a encontrar la información para hacer la reserva</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Location;