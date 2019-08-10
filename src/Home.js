import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

import './Home.css';

class HomeMedia extends React.Component {
    render() {
        return  <Media as="li" className="text-left">
                    <img
                        width={100}
                        height={100}
                        className="align-self-start mr-3 media-img"
                        src={this.props.imagesrc}
                        alt="Education Icon"
                    />
                    <Media.Body>
                    {this.props.jobtitle}
                    {this.props.title}
                    <p>{this.props.subtitle}</p>
                    {this.props.mainbody}
                    </Media.Body>
                </Media>
    }
}

function BristolBody() {
    return  <div>
                <h6>3<sup>rd</sup> Year (1<sup>st</sup> Class Achieved):</h6>
                <p>Image Processing & Computer Vision, Machine Learning, Intro to High Performance Computing,
                    Cryptography A, Games Project, Computer Graphics, Computational Neuroscience, Advanced Algorithms,
                    Web Technologies.</p>
                <p>My third year transcript can be viewed <a href="/#/transcript">here</a>.</p>
                <h6>2<sup>nd</sup> Year (1<sup>st</sup> Class Achieved):</h6>
                <p>
                    Concurrent Computing, Human Computer Interaction, Data Structures & Algorithms, Databases & Cloud Concepts,
                    Language Engineering, Symbols, Patterns & Signals, Software Project Engineering.
                </p>
                <h6>1<sup>st</sup> Year (1<sup>st</sup> Class Achieved):</h6>
                <p>
                    Mathematical Methods, Programming and Algorithms I & II, Big Ideas in Science, Theory of Computation,
                    Hi-Tech Enterprise, Intro to Computer Architecture.
                </p>
            </div>;
}

function SixthFormBody() {
    return  <div>
                <p>A-Levels: <b>A*</b> Mathematics, <b>A</b> Futher Mathematics, <b>B</b> Computing</p>
                <p>AS-Levels: <b>B</b> Physics</p>
            </div>;
}

function SchoolBody() {
    return <p>GCSEs 10 <b>A*</b>-<b>B</b></p>;
}

class EducationCard extends React.Component {
    render() {
        return  <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h1>Education</h1></Card.Title>
                        <Card.Text>
                            <ul className="list-unstyled">
                                <HomeMedia imagesrc="/images/bristol-uni-icon.png"
                                                title={<h5>University of Bristol</h5>}
                                                subtitle="2016-2020, MEng Computer Science"
                                                mainbody={BristolBody()}/>
                                <HomeMedia imagesrc="/images/sixth-form-icon.jpeg"
                                                title={<h5>The Sixth Form College Farnborough</h5>}
                                                subtitle="2013-2015"
                                                mainbody={SixthFormBody()} />
                                <HomeMedia imagesrc="/images/rms-logo-1.png"
                                                title={<h5>Robert Mays School</h5>}
                                                subtitle="2008-2013"
                                                mainbody={SchoolBody()} />
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
    }
}

function HawkEyeBody() {
    return <p>Blank for now.</p>
}

function SummerSoftwareBody() {
    return  <div>
                <p>
                Developed a graphical editor for a post-doc researcher’s modelling language alongside another student
                with no assistance. Written in Java, using JavaFX we used an MVC architecture and wrote custom low-level
                rendering code for the canvas. I gained experience in liaising with a client every week in which we adjusted
                the goals and required us to be agile with our development.
                </p>
                <p>
                More information and download <a target="blank" href="http://swarmdesign.lenkaspace.net/sbdrml/">here</a>.
                </p>
            </div>

}

class ExperienceCard extends React.Component {
    render() {
        return  <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h1>Experience</h1></Card.Title>
                        <Card.Text>
                            <ul className="list-unstyled">
                                <HomeMedia imagesrc="/images/bristol-uni-icon.png"
                                                jobtitle={<h5>Teaching Assistant - Image Processing & Computer Vision</h5>}
                                                title={<h6>University of Bristol</h6>}
                                                subtitle="September 2019 - December 2019"
                                                mainbody={<p>I will be a teaching assistant in the upcoming Autumn term for
                                                             Image Processing & Computer Vision.
                                                         </p>}/>
                                <HomeMedia imagesrc="/images/hawk-eye-icon.png"
                                                jobtitle={<h5>Software Development Intern - Computer Vision</h5>}
                                                title="Hawk-Eye Innovations"
                                                subtitle="June 2019 - September 2019"
                                                mainbody={HawkEyeBody()}/>
                                <HomeMedia imagesrc="/images/bristol-uni-icon.png"
                                                jobtitle={<h5>Summer Software Developer</h5>}
                                                title={<h6>University of Bristol</h6>}
                                                subtitle="June 2018 - September 2018"
                                                mainbody={SummerSoftwareBody()}/>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
    }
}

class HomeTitleCard extends React.Component {
    render() {
        return  <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h1>Hi, I'm Sam.</h1></Card.Title>
                        <Card.Text>
                            <p>
                                I'm a 4th year student at the University of Bristol studying for a MEng in Computer Science.
                                I have achieved a first class grade every year so far.
                                This summer I am interning in the innovations team at <a target="blank" href="https://www.hawkeyeinnovations.com">Hawk-Eye Innovations</a>.
                            </p>
                            <p>
                                My interests at University are mainly Computer Vision and Machine Learning however I am always looking to learn about new
                                technologies and new areas of study. I am particulary keen to investigate the technology behind trading which aligns with
                                my greater interest in finance.
                            </p>
                            <p>
                                The work I am undertaking at Hawk-eye is focused on Computer Vision and I have learned a great deal during my time there.
                                These include experimenting with state of the art stratified bundle adjustment algorithms, camera calibration in stadiums
                                including Major League Baseball and making improvements to various pieces of software.
                            </p>
                            <p>
                                Outside of my studies, I have been on the Kickboxing Society committee for the past two years, helping to run a club with
                                over 275 members (and hopefully more at the start of this academic year!). This has greatly developed me as a person and
                                improved my teamwork and communication. I also hold an Orange belt and have competed in several competitions, most notably
                                achieving 3rd place in my category at the Irish Open. I have run a half-marathon and enjoy playing football, frisbee and golf casually.
                            </p>
                            <p>
                                Some of my recent projects can be viewed on the <Link to="/projects">Projects</Link> page.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
    }
}

class HomeGrid extends React.Component {
    render() {
        return <Container>
                <Row noGutters="true">
                    <Col >
                        <HomeTitleCard />
                        <ExperienceCard />
                        <EducationCard />
                    </Col>
                </Row>
            </Container>
    }
}

class Home extends React.Component {
    render() {
        return <div>
                <HomeGrid />
               </div>
    }
}

export default Home;