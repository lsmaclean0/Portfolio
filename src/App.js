import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import man from './images/man.png';
import cv from './images/cv.png';
import projects from './images/coding.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/"></Link> */}
        <Container fluid>
          <Row>
            <Col>
              <Link to="/about">
                <Image fluid id="icon" className="col align-self-start" src={man}></Image></Link>
              {/* TODO: add links for additional pages  */}
              <h1 id="icon-title" className="col align-self-start" >About</h1>
            </Col>
            <Col>
              <Link to="/resume">
                <Image fluid id="icon" class="col align-self-start" src={cv}></Image></Link>
              <h1 id="icon" className="col align-self-start">Resume</h1>
            </Col>
            <Col>
              <Link to="/projects">
                <Image fluid id="icon" className="col align-self-start" src={projects}></Image></Link>
              <h1 id="icon" className="col align-self-start">Projects</h1>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route exact path='/about' element={< About />}></Route>
          {/* TODO: add Routes, figure out why the links are't changing */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
