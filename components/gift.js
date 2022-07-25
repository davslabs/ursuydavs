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
                            <p style={{ fontSize: 15, fontWeight: 'bold' }}>¡Lo más importante es que vengas!</p>
                            <p>Pero si queres hacernos un regalo, podes ayudarnos con nuestra luna de miel o también podes dejarnos tu presente el día de la fiesta</p>
                        </div>
                    </Col>
                    <Col lg={6} className='mt-5'>
                        <div className='gift-content'>
                            <p style={{ fontSize: 15, fontWeight: 'bold' }}>Caja de Ahorro en pesos</p>
                            <span style={{ fontSize: 10 }}>
                                CBU 0720182688000037839804
                                <p>Alias: UrsuEngelen</p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    );
}

export default Gift;