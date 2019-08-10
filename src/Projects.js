import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './Projects.css';

class ExampleProjectCard extends React.Component {
    render() {
        return <Card className="text-center">
                    <Card.Img variant="top" src={this.props.imagesrc}/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>
                    </Card.Body>
                </Card>
    }
}

class ProjectTitleCard extends React.Component {
    render() {
        return <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h1>Projects</h1></Card.Title>
                        <Card.Text>
                            <p>
                                Here are some projects that I have worked on as part of my university course
                                and outside.
                            </p>
                            <p>
                                I have completed a wide variety of projects over the course of my degree in varying languages. 
                                These are C, C++, C#, Python, Java, Haskell to name a few. In my 3rd year of University, I undertook some web development,
                                becoming familiar with HTML, CSS and Javascript.
                            </p>
                            <p>
                                This website is a statically hosted on GitHub Pages, written in JavaScript and using React.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
    }
}

class ProjectsGrid extends React.Component {
    render() {
        return <Container>
                <Row>
                    <Col md={true}>
                        <ProjectTitleCard />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ExampleProjectCard title="Computer Graphics" imagesrc="/images/photon3.png"/>
                    </Col>
                    <Col md={6}>
                        <ExampleProjectCard title="This Website" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ExampleProjectCard title="The Pantry" />
                    </Col>
                    <Col md={6}>
                        <ExampleProjectCard title="Mini Neural Network"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ExampleProjectCard title="Index Scraper" />
                    </Col>
                    <Col md={6}>
                        <ExampleProjectCard title="Dartboard Detection" />
                    </Col>
                </Row>
            </Container>
    }
}

class Projects extends React.Component {
    render() {
        return <ProjectsGrid />
    }
}

export default Projects;