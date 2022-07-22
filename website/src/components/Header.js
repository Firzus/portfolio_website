import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/">
                            <img
                                src="http://localhost:1337/uploads/logo_portfolio_7b3b681c13.png?updated_at=2022-07-22T09:36:21.584Z"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="Portfolio Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='fs-3 font-link' as={NavLink} to="/">Accueil</Nav.Link>
                                <Nav.Link className='fs-3 font-link' as={NavLink} to="/projets">Projets</Nav.Link>
                                <Nav.Link className='fs-3 font-link' as={NavLink} to="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </>
        );
    };
}

export default Header;