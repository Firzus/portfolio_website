import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';


class Projets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            loading: true
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/projects', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const projects = await response.json()
        this.setState({
            projects: projects.data,
            loading: false
        })
    }

    render() {

        console.log(this.state.projects);

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

                                    <Col className='fs-1 text-white'>



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