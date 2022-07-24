import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ImLocation } from 'react-icons/im';
import LinkTo from './linkTo';

const Hero = () => {
    return (
        <section className='section position-relative'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='hero-title'>
                        <h1>Ursu</h1>
                        <h2><p>&</p></h2>
                        <h1>David</h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mt-5'>
                    <Col className='hero-body'>
                        <h3>SAB | 05 | NOV</h3>
                        <h5>HORARIO | 18:30</h5>
                        <div className='mt-3'>
                            <LinkTo
                                url='https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MTNmc2hvZTdjMjBjcW9hNmZrbGtqNzFxdmwgYXNzZW4uZGF2aWRAbQ&amp;tmsrc=assen.david%40gmail.com'
                                text='Save the date'
                            />
                        </div>
                        <div className='mt-5'>
                            <span>
                                <span className='icon'>
                                    <ImLocation />
                                </span>
                                <span>
                                    <a className='icon-text' href='https://g.page/espaciomendoza?share'>Espacio Mendoza | El Vivero</a>
                                </span>    
                            </span>
                            <h5>ING. MASCHWITZ | BUENOS AIRES</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;