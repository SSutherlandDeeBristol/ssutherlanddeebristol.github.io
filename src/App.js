import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import './App.css';
import Home from './Home.js';
import Projects from './Projects.js';
import Blog from './Blog.js';

class Transcript extends React.Component {
  render() {
    return <Container>
            <Card>
              <Card.Img variant="top" src="/images/transcript.png"/>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <p>3rd Year Transcript (2018-19)</p>
                            <Button variant="primary" href="/#/">Return to Home</Button>
                        </Card.Title>
                    </Card.Body>
              </Card>
          </Container>
  }
}

class Christine extends React.Component {
  render() {
    return <Container>
              <Card>
                <Card.Img variant="top" src="/images/christine.jpg"/>
                      <Card.Body>
                          <Card.Title className="text-center">
                              I love you.
                          </Card.Title>
                      </Card.Body>
                </Card>
            </Container>
  }
}

class App extends React.Component {
  render() {
    return <Router>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
              <Navbar.Brand>Samuel Sutherland-Dee</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/#/">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/christine" component={Christine}/>
            <Route path="/transcript" component={Transcript} />
            <Route path="/blog" component={Blog} />
          </Router>
  }
}

export default App;