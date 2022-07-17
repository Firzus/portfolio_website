import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';

class Accueil extends Component {
    render() {
        return (
            <>
                <Container fluid className='bg-black p-0 overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Row className='h-100 d-flex align-items-center justify-content-center'>

                        <Col md={6} xs="auto">

                            <Container>

                                <Row className='d-flex justify-content-center justify-content-center'>

                                    <Col md={5}>

                                        <Row className='pt-5 pb-5 text-left text-white fs-1 font-link'>
                                            Portfolio
                                        </Row>

                                        <Row className='pb-1 pt-1 text-left text-white fs-5 font-link'>
                                            PRIEU Lilian
                                        </Row>

                                        <Row className='pb-1 pt-1 text-left text-white fs-3 font-link'>
                                            20 ans
                                        </Row>

                                    </Col>

                                </Row>

                                <Row className='d-flex justify-content-center'>

                                    <Col md={5}>

                                        <Row className='pb-2 pt-2 text-left text-white fs-2  font-link'>
                                            Web developper
                                        </Row>

                                        <Row className='pb-2 pt-2 text-left text-white fs-2  font-link'>
                                            Game programmer
                                        </Row>

                                        <Row className='pb-2 pt-2 text-left text-white fs-5  font-link'>
                                            Objectif : travailler dans l'industrie du jeu vidéo
                                        </Row>

                                    </Col>

                                </Row>

                            </Container>

                        </Col>

                        <Col md={{ order: "last" }} xs={{ order: "first" }} >

                            <Container className='w-50 h-50 d-flex'>

                                <img
                                    src='http://localhost:1337/uploads/test_image_1ff195c520.png?updated_at=2022-07-15T14:09:19.213Z'
                                    className='img-fluid'
                                    alt='Profil Lilian Prieu'
                                />

                            </Container>

                        </Col>

                    </Row >

                </Container>
            </>
        );
    };
}

export default Accueil;