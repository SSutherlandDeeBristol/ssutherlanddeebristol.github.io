import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Projects.css';

function ComputerGraphicsBody() {
    return  <div>
                <p className="text-left">
                    As part of our computer graphics coursework, my partner and I wrote a photon mapper, raytracer,
                    raycaster, pathtracer and rasteriser. The image above is an example of the photon mapper used to
                    calculate some of the scene lighting. More images can be seen on GitHub by pressing the button below.
                    We received a combined 86% on this unit.
                </p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/computer-graphics-cw">View on GitHub</Button>
            </div>
}

function ThePantryBody() {
    return  <div>
                <p className="text-left">
                    For our Web Technologies project we wrote what is essentially a simplified clone
                    of <a href="https://www.bbcgoodfood.com/" target="blank">BBC Good Food</a> but with better searching criteria.
                    The server uses Node.js and we used the bootstrap library for our front end components. Our
                    whole <a href="https://blooming-hamlet-80668.herokuapp.com/report" target="blank">report</a> is
                    available on the website which can be visited by clicking the button below. It is hosted as a Heroku app so
                    may take a few seconds to load and the images were removed for copyright reasons.
                </p>
                <Button variant="primary" target="blank" href="https://blooming-hamlet-80668.herokuapp.com/">Visit Website</Button>
            </div>
}

function MiniNNBody() {
    return  <div>
                <p className="text-left">
                    I have been following <a href="http://neuralnetworksanddeeplearning.com/chap1.html" target="blank">this textbook</a> on
                    neural networks to classify hand written digits from the <a href="http://yann.lecun.com/exdb/mnist/" target="blank">MNIST dataset</a>.
                    The code can be viewed on GitHub.
                </p>

                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/mini-nn">View on GitHub</Button>
            </div>
}

function IndexScraperBody() {
    return  <div>
                <p className="text-left">
                    I wrote a small web scraper in python that extracts index data from BBC News and places it in a sqlite database.
                    The code can be viewed on GitHub.
                </p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/index-scraping">View on GitHub</Button>
            </div>
}

function DartboardBody() {
    return  <div>
                <p className="text-left">
                    As part of our Image Processing & Computer Vision course, we were tasked with writing a program that could classify
                    dartboards in images. We achieved this by combining a Viola-Jones detector, Hough transforms and colour histogram similarity.
                    We received a mark of 76%. More images can be seen by viewing this project on GitHub.
                </p>
                <Button variant="primary" target="blank" href="https://github.com/SSutherlandDeeBristol/dartboard-detector">View on GitHub</Button>
            </div>
}

function PersonalSiteBody() {
    return  <p className="text-left">
                This website was written in a weekend using the React framework and is statically hosted on github pages.
                In the future I may integrate a Node.js server and host it on Heroku for example, but for now I have no need.
            </p>
}

class BottomProjectCard extends React.Component {
    render() {
        return  <div className="project-bottom-card">
                    <ExampleProjectCard title={this.props.title}
                                        imagesrc={this.props.imagesrc}
                                        cardtext={this.props.cardtext} />
                </div>
    }
}

class ExampleProjectCard extends React.Component {
    render() {
        return <Card className="text-center">
                    <Card.Img variant="top" src={this.props.imagesrc}/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>
                        <Card.Text className="projects-card-text">
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
                        <Card.Text className="text-left projects-card-text">
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
                    <Col md={6} className="project-col">
                        <ExampleProjectCard title="Computer Graphics"
                                            imagesrc="/images/photon3.png"
                                            cardtext={ComputerGraphicsBody()} />
                        <ExampleProjectCard title="The Pantry"
                                            imagesrc="/images/logo-black.svg"
                                            cardtext={ThePantryBody()} />
                        <BottomProjectCard title="Index Scraper"
                                            imagesrc="/images/index-scraping.jpg"
                                            cardtext={IndexScraperBody()} />
                    </Col>
                    <Col md={6}>
                        <ExampleProjectCard title="Dartboard Detector"
                                            imagesrc="/images/dart-detector.jpg"
                                            cardtext={DartboardBody()} />
                        <ExampleProjectCard title="Mini Neural Network"
                                            imagesrc="/images/mnist.png"
                                            cardtext={MiniNNBody()} />
                        <BottomProjectCard title="This Website"
                                            imagesrc="/images/react-logo.svg"
                                            cardtext={PersonalSiteBody()} />
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