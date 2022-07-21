import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarouselProjects from '../components/CarouselProjects';
import Header from '../components/Header';


class Projets extends Component {

    render() {

        return (
            <>

                <div className='d-flex flex-column bg-black overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1 d-flex align-items-center justify-content-center'>

                        <Row>
                            <Col>

                                <Row>

                                    <Col className='fs-1 text-white font-link d-flex align-items-center justify-content-center'>
                                        Projets
                                    </Col>

                                </Row>

                                <Row>

                                    <Col>

                                        <CarouselProjects />

                                    </Col>

                                </Row>

                            </Col>
                        </Row>

                    </Container>

                </div>
            </>
        );
    };
}


export default Projets;