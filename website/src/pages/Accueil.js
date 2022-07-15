import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Header from '../components/Header';

class Accueil extends Component {
    render() {
        return (
            <>
                <Header />

                <Container fluid className='bg-black' style={{ height: '100vh' }}>

                    <Row className='h-100 d-flex align-items-center justify-content-center'>

                        <Col>

                            <Row className='p-5'>
                                <Col>
                                    <Row>
                                        <Col>
                                            <p className='p-2 text-left text-white fs-1 font-link font-weight-bold'>
                                                Portfolio
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className='p-2 text-left text-white fs-5 font-link font-italic'>
                                                PRIEU Lilian
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className='p-2 text-left text-white fs-3  font-link'>
                                                20 ans
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className='p-5'>
                                <Col>
                                    <Row>
                                        <Col className='p-2 text-left text-white fs-2  font-link'>
                                            Web developper
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='p-2 text-left text-white fs-2  font-link'>
                                            Game programmer
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='p-2 text-left text-white fs-4  font-link'>
                                            Objectif : travailler dans l'industrie du jeu vidéo
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>

                        <Col className='d-flex align-items-center justify-content-center'>
                            <Image className="m-5 img-fluid w-50 h-60 bg-white" src='https://www.pexels.com/fr-fr/photo/tour-eiffel-a-paris-france-1461974/' />
                        </Col>

                    </Row>

                </Container >
            </>
        );
    };
}

export default Accueil;