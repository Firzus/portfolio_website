import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";

class Contact extends Component {
    render() {
        return (
            <>
                <div className='d-flex flex-column bg-black overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1 d-flex align-items-center'>

                        <Col>

                            <Row className='p-5 text-center text-white font-link fs-1'>
                                Contact
                            </Row>

                            <Row>

                                <Col className='flex-column'>

                                    <Row>
                                        <a target="_blank" href='https://www.google.com/'>

                                            <AiTwotoneMail
                                                className='p-2'
                                                size='5em'
                                                color='white'
                                            />

                                        </a>
                                    </Row>

                                    <Row>
                                        <a target="_blank" href='https://www.google.com/'>

                                            <AiTwotoneMail
                                                className='p-2'
                                                size='5em'
                                                color='white'
                                            />

                                        </a>
                                    </Row>

                                    <Row>
                                        <a target="_blank" href='https://www.google.com/'>

                                            <AiTwotoneMail
                                                className='p-2'
                                                size='5em'
                                                color='white'
                                            />

                                        </a>
                                    </Row>

                                </Col>

                                <Col className='flex-column text-white'>

                                    <div
                                        className='text-white fs-3 p-2 font-link'
                                    >
                                        Email
                                    </div>

                                    <div
                                        className='text-white fs-3 p-2 font-link'
                                    >
                                        Linkedin
                                    </div>

                                    <div
                                        className='text-white fs-3 p-2 font-link'
                                    >
                                        GitHub
                                    </div>

                                </Col>

                            </Row>

                        </Col>

                        <Col className='flex-column'>

                            part 2

                        </Col>

                    </Container>

                </div>
            </>
        );
    };
}

export default Contact;