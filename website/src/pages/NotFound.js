import React, { Component } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

class NotFound extends Component {
    render() {
        return (
            <>
                <div className='d-flex flex-column bg-black overflow-hidden' style={{ height: '100vh' }}>

                    <Header as={Row} />

                    <Container className='flex-grow-1 d-flex align-items-center justify-content-center'>

                        <div className='flex-column'>

                            <div className='fs-2 p-3 text-white d-flex align-items-center justify-content-center'>
                                Page Not Found
                            </div>

                            <div className='d-flex align-items-center p-3 justify-content-center'>
                                <Button as={NavLink} to='/' size="lg" variant="outline-light">Home</Button>{' '}
                            </div>

                        </div>

                    </Container>

                </div>
            </>
        );
    };
}

export default NotFound;