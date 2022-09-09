import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import profile from "./images/man.png";
import Image from "react-bootstrap/Image";
import { Bounce, Fade, Rotate } from "react-reveal";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <Container fluid className="App">
      <Container>
        <Fade delay={1000} right big cascade>
          <h1 className="about">I'm Luke MacLean</h1>
        </Fade>
        <Fade delay={2000} left big cascade>
          <h3 className="about">Full Stack Software Engineer</h3>
        </Fade>
        <Fade delay={2500} right cascade>
          <Row>
            <Col xs lg="1">
              <SocialIcon
                className="social"
                style={{ height: 50, width: 50 }}
                network="facebook"
                bgColor="#5D255C"
                fgColor="#ffff"
                url="https://www.facebook.com/lukemac15"
              />
            </Col>
            <Col xs lg="1">
              <SocialIcon
                className="social"
                network="linkedin"
                bgColor="#107e7d"
                fgColor="#ffff"
                url="https://www.linkedin.com/in/luke-maclean-07ba65160/"
              />
            </Col>
            <Col xs lg="">
              <SocialIcon
                className="social"
                bgColor="#dddbcb"
                url="https://github.com/lsmaclean0"
              />
            </Col>
          </Row>
        </Fade>
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
