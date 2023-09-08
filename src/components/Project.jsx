import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import connectLight from '../media/connect-light.png';
import connectDark from '../media/connect-dark.png';
import resume from '../media/Sachin_Kumar_Resume_12-09-2022-18-40-12.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Project = ({darkMode}) => {

    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
      
    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    return (
        <div>
          <br></br>
          <br></br>
            <Fade>
              <Container align='center'>
                    <Card className="nbcard">
                      <Card.Body>
                      <h1 className={`${darkMode?"whead":"chead"}`}>- Professional Experience -</h1>
                        <br></br>
                        <Card.Text>
                          <h3 className='namee'>Web Developer Intern</h3>
                          <h3 className='namee'>Zimyo  03/2023 - 06/2023</h3>
                          <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Developed and implemented new features for a client-
managing app using react js and node js, including

integrating WhatsApp functionality and email integration.</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Designed and implemented a resume parser utilizing
OpenAI integration, streamlining the recruitment process
and improving efficiency.</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Took responsibility for maintaining and updating a
payroll application, ensuring accurate and timely
processing of employee payments.</Card.Title>
                        </Card.Body>
                    </Card>
                            
                        </Card.Text>
                      </Card.Body>
                    </Card>
                <br></br>
                <hr></hr>
                <br></br>
              </Container>
            </Fade>
        </div>   
    )
}

export default Project
