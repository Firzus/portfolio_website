import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

class Contact extends Component {

    render() {
        return (
            <>
                <div className='d-flex flex-column bg-black overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1 d-block d-sm-flex align-items-center'>

                        <Col className=''>

                            <Row className='p-5 d-flex justify-content-center text-white font-link fs-1'>
                                Contact
                            </Row>

                            <Row>

                                <Row className='d-flex align-items-center'>
                                    <Col className='p-3 d-flex justify-content-end'>

                                        <a href='https://www.google.com/'>

                                            <AiFillMail
                                                size='4em'
                                                color='white'
                                            />

                                        </a>

                                    </Col>

                                    <Col
                                        className='text-white fs-3 p-3 font-link'
                                    >
                                        Email
                                    </Col>
                                </Row>

                                <Row className='d-flex align-items-center'>
                                    <Col className='p-3 d-flex justify-content-end'>

                                        <a href='https://www.linkedin.com/in/lilian-prieu-554058221/'>

                                            <AiFillLinkedin
                                                size='4em'
                                                color='white'
                                            />

                                        </a>

                                    </Col>

                                    <Col
                                        className='text-white fs-3 p-3 font-link'
                                    >
                                        Linkedin
                                    </Col>
                                </Row>

                                <Row className='d-flex align-items-center'>
                                    <Col className='p-3 d-flex justify-content-end'>

                                        <a href='https://github.com/Firzus'>

                                            <AiFillGithub
                                                size='4em'
                                                color='white'
                                            />

                                        </a>

                                    </Col>

                                    <Col
                                        className='text-white fs-3 p-3 font-link'
                                    >
                                        GitHub
                                    </Col>
                                </Row>

                            </Row>

                        </Col>

                        <Col className='d-flex align-items-center justify-content-center'>

                            <Row className='d-flex align-items-center justify-content-center'>

                                <Row className='d-flex justify-content-center fs-1 text-white text-center font-link p-5'>
                                    Curriculum Vitae
                                </Row>

                                <Row className='d-flex justify-content-center align-items-center w-50 p-2'>

                                    <Button
                                        variant="outline-light"
                                        size="lg"
                                        to="/files/cv_prieu_lilian.pdf"
                                        target="_blank"
                                        download
                                        as={Link}
                                    >

                                        Télécharger

                                    </Button>

                                </Row>

                            </Row>

                        </Col>

                    </Container>

                </div>
            </>
        );
    };
}

export default Contact;