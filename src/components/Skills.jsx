import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/skills-light.svg';
import skillsDark from '../media/skills-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt,  faHtml5, faJs, faReact, } from '@fortawesome/free-brands-svg-icons';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const Skills = ({darkMode}) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
            <Container>
                <Row>
                <Col lg={4} xs={6}>
                    <h2 className="display-3 skill-h">I can work <p className="with">with</p> </h2>
                    <img src={darkMode? skillsDark : skillsLight} alt="skills" className="skills-img img-fluid animated"/>
                </Col>
                <Col lg={2} xs={5}>
                    <br></br>
                    <Card className="nbcard">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faHtml5}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faCss3Alt}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faJs}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faReact}/>
                    </Button>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    <br></br>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Technologies</Card.Title>
                            <Card.Text>HTML, CSS, JavaScript, ReactJs, MongoDB, Node.js</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Frameworks And Library</Card.Title>
                            <Card.Text>React, Express, Moongoose</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <br></br>
            <hr />
            </Container>
            </Slide>
        </div>
    )
}

export default Skills
