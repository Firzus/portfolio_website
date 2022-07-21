import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselProjects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            loading: true
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:1337/api/projects?populate=*', {
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
                <Carousel>

                    {this.state.projects.map((u, i) =>

                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={u.attributes.url}
                                alt="Slide Project"
                            />
                            <Carousel.Caption>

                                <h3>
                                    {u.attributes.title}
                                </h3>

                                <p>
                                    {u.attributes.description}
                                </p>

                            </Carousel.Caption>
                        </Carousel.Item>

                    )}


                </Carousel>

            </>
        );
    }

}

export default CarouselProjects;