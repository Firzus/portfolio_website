import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

class CarouselProjects extends Component {

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

        if (this.props.loading) {
            return <Spinner animation="border" variant="light" />
        }


        return (
            <>
                {this.state.projects.map((project) =>

                    <li key={project.id}>
                        {project.title}
                    </li>

                )}
            </>
        );
    }

}

export default CarouselProjects;