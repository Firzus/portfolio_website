import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";

class Contact extends Component {
    render() {
        return (
            <>
                <div fluid className='d-flex flex-column  bg-black p-0 overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1'>

                        <Col className='d-flex justify-content-center align-items-center'>

                            <Row className='text-white fs-1 font-link'>
                                Contact
                            </Row>

                            <Row>

                                <Col className='d-flex align-items-center justify-content-center'>

                                    <a as={Row} target="_blank" href='https://www.google.com/'>
                                        <AiTwotoneMail className='p-2' size='3em' color='white' />
                                    </a>

                                    <a as={Row} target="_blank" href='https://www.google.com/'>
                                        <AiFillLinkedin className='p-2' size='3em' color='white' />
                                    </a>

                                    <a as={Row} target="_blank" href='https://www.google.com/'>
                                        <AiFillGithub className='p-2' size='3em' color='white' />
                                    </a>

                                </Col>

                                <Col>
                                    <Row className='text-left text-white fs-3 font-link'>
                                        Mail
                                    </Row>
                                    <Row className='text-left text-white fs-3 font-link'>
                                        Linkedin
                                    </Row>
                                    <Row className='text-left text-white fs-3 font-link'>
                                        GitHub
                                    </Row>
                                </Col>

                            </Row>

                        </Col>

                        <Col>
                            <Row className='text-white fs-3 font-link'>
                                Curriculum vitae
                            </Row>
                            <Row>
                                <Link to="/files/myfile.pdf" target="_blank" download>Download</Link>
                            </Row>
                        </Col>

                    </Container>

                </div>
            </>
        );
    };
}

export default Contact;