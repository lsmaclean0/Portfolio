import React from 'react';
import man from '../images/man.png';
import cv from '../images/cv.png';
import projects from '../images/coding.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Home() {

  return(      
      <Container fluid className='App'>
        <Row>
          <Col>
            <Image fluid id="icon" className="col align-self-start" src={man}></Image>
            {/* TODO: add links for additional pages  */}
            <h1 id="icon-title" className="col align-self-start" >About</h1>
          </Col>
          <Col>
            <Image fluid id="icon" class="col align-self-start" src={cv}></Image>
            <h1 id="icon" className="col align-self-start">Resume</h1>
          </Col>
          <Col>
            <Image fluid id="icon" className="col align-self-start" src={projects}></Image>
            <h1 id="icon" className="col align-self-start">Projects</h1>
          </Col>
        </Row>
      </Container>
    )
}