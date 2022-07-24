import React, { useState, useEffect } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const moveTo = (section) => {
        if (typeof window !== "undefined") {
            window.fullpage_api.moveTo(section, 0);
        }        
    }

    return (
        <div className='header sticky'>
            <Navbar light expand="md">
                <Container>
                    <NavbarBrand className='logo' href='/'>U & D</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem>
                                <NavLink onClick={() => { moveTo('hero') }} href="#">Fecha y Lugar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { moveTo('location') }} href="#">Hospedaje y Traslado</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { moveTo('rsvp') }} href="#">RSVP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => { moveTo('gift') }} href="#">Regalos</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>       
        </div>
    )
}

export default Header;