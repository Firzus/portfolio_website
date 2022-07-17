import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';

class Projets extends Component {
    render() {
        return (
            <>
                <div className='d-flex flex-column bg-black overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1 d-flex align-items-center justify-content-center'>

                        <div>
                            projets
                        </div>

                    </Container>

                </div>
            </>
        );
    };
}

export default Projets;