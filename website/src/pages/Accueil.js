import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';

class Accueil extends Component {
    render() {
        return (
            <>
                <Container fluid className='bg-black' style={{ height: '100vh' }}>
                    <Header />
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}

export default Accueil;