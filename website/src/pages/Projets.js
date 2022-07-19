import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';

class Projets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:1337/api/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result.posts
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {

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
                                            {posts.map(post => <h2> {post.title} </h2>)}
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
}

export default Projets;