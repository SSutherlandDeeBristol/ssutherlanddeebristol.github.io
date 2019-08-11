import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Projects.css';

function ComputerGraphicsBody() {
    return  <div>
                <p className="text-left">CG body.</p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/computer-graphics-cw">View on GitHub</Button>
            </div>
}

function ThePantryBody() {
    return  <div>
                <p className="text-left">The Pantry</p>
                <Button variant="primary" target="blank" href="https://blooming-hamlet-80668.herokuapp.com/">View Website</Button>
            </div>
}

function MiniNNBody() {
    return  <div>
                <p className="text-left">MiniNN body.</p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/mini-nn">View on GitHub</Button>
            </div>
}

function IndexScraperBody() {
    return  <div>
                <p className="text-left">Index Scraper body.</p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/index-scraping">View on GitHub</Button>
            </div>
}

function DartboardBody() {
    return  <div>
                <p className="text-left">Dartboard Detector body.</p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/dartboard-detector">View on GitHub</Button>
            </div>
}

function PersonalSiteBody() {
    return <p>Personal Site body.</p>
}

class ExampleProjectCard extends React.Component {
    render() {
        return <Card className="text-center">
                    <Card.Img variant="top" src={this.props.imagesrc}/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>
                        <Card.Text>
                            {this.props.cardtext}
                        </Card.Text>
                    </Card.Body>
                </Card>
    }
}

class ProjectTitleCard extends React.Component {
    render() {
        return <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h1>Projects</h1></Card.Title>
                        <Card.Text className="text-left" id="projects-title-card-text">
                            <p>
                                Here are some projects that I have worked on as part of my university course
                                and outside.
                            </p>
                            <p>
                                I have completed a wide variety of projects over the course of my degree in varying languages.
                                These are C, C++, C#, Python, Java, Haskell to name a few. In my 3rd year of University, I undertook some web development,
                                becoming familiar with HTML, CSS and Javascript.
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
                        <ExampleProjectCard title="Computer Graphics"
                                            imagesrc="/images/photon3.png"
                                            cardtext={ComputerGraphicsBody()}/>
                        <ExampleProjectCard title="The Pantry"
                                            cardtext={ThePantryBody()} />
                        <ExampleProjectCard title="Index Scraper"
                                            cardtext={IndexScraperBody()}/>
                    </Col>
                    <Col md={6}>
                        <ExampleProjectCard title="This Website"
                                            imagesrc="/images/react-logo.svg"
                                            cardtext={PersonalSiteBody()}/>
                        <ExampleProjectCard title="Mini Neural Network"
                                            cardtext={MiniNNBody()}/>
                        <ExampleProjectCard title="Dartboard Detector"
                                            cardtext={DartboardBody()}/>
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