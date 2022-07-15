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

                        <Col md={6} xs={10}>

                            <Container>

                                <Row className='d-flex justify-content-center'>

                                    <Col md={3}>

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

                                    <Col md={3}>

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

                        <Col md={6} xs={{ order: 'first' }} className='d-flex align-items-center justify-content-center'>

                            <Image
                                className="bg-white"
                                src='https://www.pexels.com/fr-fr/photo/tour-eiffel-a-paris-france-1461974/'
                            />

                        </Col>

                    </Row >

                </Container >
            </>
        );
    };
}

export default Accueil;