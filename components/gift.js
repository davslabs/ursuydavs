import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Gift = () => {
    return (
        <section className='section position-relative'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='gift-title'>
                        <h1>Regalos</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col lg={6} className='mt-5'>
                        <div className='gift-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                            <p>consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-5'>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='gift-content'>
                                    <p style={{ fontSize: 12, fontWeight: 'bold' }}>Caja de Ahorro en pesos</p>
                                    <span style={{ fontSize: 10 }}>
                                        CBU 0340117608449814602004
                                        <p>Alias: DAVIDASSEN.PATAGONIA</p>
                                    </span>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='gift-content'>
                                    <p style={{ fontSize: 12, fontWeight: 'bold' }}>Caja de Ahorro en dolares</p>
                                    <span style={{ fontSize: 10 }}>
                                        CBU 0340010409449814602005
                                        <p>Alias: ASSEN.PATAGONIA.DLS</p>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </section >
    );
}

export default Gift;