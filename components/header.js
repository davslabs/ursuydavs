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
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    });
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else if (window.scrollY < 50) {
        setSticky(false);
      }
    }

    return (
        <div className={`header${sticky ? ' sticky' : ''}`}>
            <Navbar light expand="md">
                <Container>
                    <NavbarBrand className='logo' href='/'>U & D</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Fecha y Lugar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Hospedaje y Traslado</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">RSVP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Regalos</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>       
        </div>
    )
}

export default Header;