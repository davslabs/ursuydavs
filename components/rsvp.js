import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LinkTo from './linkTo';

const Rsvp = () => {
    return (
        <section className='section position-relative'>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col className='rsvp-title'>
                        <h1>RSVP</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col className='rsvp-body'>
                        <h4><p>¡Esperamos que todos puedan venir!</p>
                        <p className='italic'>Para confirmar asistencia por favor completar el formulario que se abre al apretar el botón que aparece a continuación</p></h4>
                        <div className='mt-3'>
                            <LinkTo
                                url='https://forms.gle/c3hVEWSsKaZPvLpM9'
                                text='Confirmar asistencia'
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Rsvp;