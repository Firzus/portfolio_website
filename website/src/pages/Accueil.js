import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';

class Accueil extends Component {
    render() {
        return (
            <>
                <div className='d-flex flex-column bg-black overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1 d-block d-sm-flex align-items-center'>

                        <Col className='pb-5'>

                            <Row className='d-flex justify-content-center justify-content-center'>

                                <Col className='pl-2 pr-2'>

                                    <div className='pt-5 pb-5 text-white fs-1 font-link'>
                                        Portfolio
                                    </div>

                                    <div className='pb-1 pt-1 text-white fs-5 font-link'>
                                        PRIEU Lilian
                                    </div>

                                    <div className='pb-1 pt-1 text-white fs-3 font-link'>
                                        20 ans
                                    </div>

                                </Col>

                            </Row>

                            <Row className='d-flex justify-content-center'>

                                <Col>

                                    <div className='pb-2 pt-2 text-white fs-2 font-link'>
                                        Web developper
                                    </div>

                                    <div className='pb-2 pt-2 text-white fs-2 font-link'>
                                        Game programmer
                                    </div>

                                    <div className='pb-2 pt-2 text-white fs-5 font-link'>
                                        Objectif : travailler dans l'industrie du jeu vidéo.
                                    </div>

                                </Col>

                            </Row>

                        </Col>

                        <Col md={{ span: 4, offset: 1 }} xs={{ span: 8, offset: 2 }} className="d-flex align-items-center jsutify-content-center pt-5 pb-2" >


                            <img
                                src='http://localhost:1337/uploads/profil_a8e9a4dec3.png?updated_at=2022-07-18T15:34:25.862Z'
                                className='img-fluid'
                                alt='Profil Lilian Prieu'
                                as={Row}
                            />

                        </Col>

                    </Container >

                </div>
            </>
        );
    };
}

export default Accueil;