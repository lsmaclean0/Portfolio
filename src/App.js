import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import profile from "./images/man.png";
import Image from "react-bootstrap/Image";
import { Bounce, Fade, Rotate } from "react-reveal";

function App() {
  return (
    <Container fluid className="App">
      <Container>
        <Fade left big cascade>
          <h1 className="about">Hello</h1>
        </Fade>
        <Fade delay={2000} right big cascade>
          <h2 className="about">I'm Luke MacLean,</h2>
        </Fade>
        <Fade delay={3000} left big cascade>
          <h3 className="about">Full Stack Software Engineer from Maryland.</h3>
        </Fade>
        <Rotate delay={4000} bottom left>
          <p className="intro">
            This website is just one example of the many technologies I've used
            over the course of my carrer.
            <br></br>I designed and built this website as a way to showcase some
            of my skills, build uppon those skills even <br></br>further and,
            test out some designs and animations as a side project.{" "}
          </p>
        </Rotate>
      </Container>
      <Container fluid>
        <Bounce right>
          <Image src={profile} fluid class="avatar"></Image>
        </Bounce>
      </Container>
    </Container>
  );
}

export default App;
