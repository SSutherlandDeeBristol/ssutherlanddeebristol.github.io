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
    return  <div>
                <p>
                    I am currently undertaking a summer placement at Hawk-Eye Innovations in the Bristol. The Bristol office is
                    home to the innovations team and they develop new methods for a variety of challenges in all areas of the company domain.
                    These include ball tracking, player tracking and human pose estimation to name a few.
                </p>
                <p>
                    So far during my placement, I have worked on replicating a state of the art method for stratified initialisation free bundle adjustment
                    utilising VarPro. This involved countless hours of reading papers and problem solving. I will go into detail about what I did in
                    a future blog post. In short, I used Hawk-Eye's Nascar scanning data and built a 3d model of a car starting with random points and camera parameters
                    from just correspondences in the cameras.
                </p>
                <p>
                    Once I had finished this task I made a small edit to the internal tool for human pose data annotation to make it usable for
                    very zoomed out images.
                </p>
                <p>
                    I contributed to the codebase in the form of a new automatic camera calibration function and a better loop filter for the calibration software.
                    At the moment I am experimenting with methods for anti-wobble.
                </p>
                <p>
                    So far I have learned a great deal about working in a professional software environment and liasing with various members of
                    the development team that are in a different office.
                </p>
            </div>
}

function SummerSoftwareBody() {
    return  <div>
                <p>
                    Developed a graphical editor called SBDRML for a researcher’s robotics modelling language. Conducted over the summer
                    alongside another student with no technical assistance. Written in Java we utilised an MVC architecture
                    and wrote custom low-level rendering code for a canvas. I gained experience in liaising with a client every week in which we adjusted
                    the goals regularly and therefore required us to be agile with our development.
                </p>
                <p>
                    More information and download <a target="blank" href="http://swarmdesign.lenkaspace.net/sbdrml/">here</a>.
                </p>
            </div>

}

function FunctionalTABody() {
    return  <p>
                I was a teaching assistant for the 1<sup>st</sup> year unit Functional Programming. The role required me
                to be present during lab times to assist students with their coursework and problem sheets.
            </p>
}

function PizzaExpressBody() {
    return  <div>
                <p>
                    I joined the restaurant as a potwash before taking some waiter shifts and being promoted to Manager On Duty.
                </p>
                <p>
                    Manager on Duty:
                    <ul>
                        <li>Responsible for everything that happens on shift</li>
                        <li>Maintaining health and safety standards</li>
                        <li>Dealing with customer complaints</li>
                        <li>Applying discounts and refunds</li>
                        <li>Managing stock – ordering and receiving deliveries</li>
                        <li>Cashing up at the end of the shift and making sure that all money is accounted for.</li>
                        <li>Managing staff rota, sending staff home to reduce labour costs and managing staff breaks.</li>
                        <li>Helping out on the floor when the restaurant is busy.</li>
                    </ul>
                </p>
            </div>;
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
                                <HomeMedia imagesrc="/images/bristol-uni-icon.png"
                                                jobtitle={<h5>Teaching Assistant - Functional Programming</h5>}
                                                title={<h6>University of Bristol</h6>}
                                                subtitle="September 2017 - December 2017"
                                                mainbody={FunctionalTABody()}/>
                                <HomeMedia imagesrc="/images/pizza-express-icon.png"
                                                jobtitle={<h5>Manager On Duty/Waiter/Cleaner</h5>}
                                                title={<h6>Pizza Express</h6>}
                                                subtitle="January 2016 - September 2016"
                                                mainbody={PizzaExpressBody()}/>
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
                                over 275 members (and hopefully more at the start of the next academic year!). This has greatly developed me as a person and
                                improved my teamwork and communication. I also hold an Orange belt and have competed in several competitions, most notably
                                achieving 3rd place in my category at the Irish Open. I have run a half-marathon and enjoy playing football, frisbee and golf casually.
                            </p>
                            <p>
                                Having written in so many different programming languages over the course of my degree, I am
                                comfortable with programming in a new language or framework and utilising new libraries. So far I
                                have used: C, C++, C#, Python, Java, JavaScript and Haskell. In additon I have done some web development
                                so am comfortable in using HTML, CSS etc.
                            </p>
                            <p>
                                My preferred programming languages are C++ and Python.
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