import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <>
                <Container fluid className='bg-black d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className='fs-2 p-5 text-white d-flex align-items-center justify-content-center'>
                                    Page Not Found
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex align-items-center justify-content-center'>
                                    <Button as={NavLink} to='/' size="lg" variant="outline-light">Accueil</Button>{' '}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

export default NotFound;