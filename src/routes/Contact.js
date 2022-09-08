import Container from "react-bootstrap/Container";
import { Fade, Rotate } from "react-reveal";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <Container fluid className="App">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="input">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="password" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="input">
            <Form.Label>Description</Form.Label>
            <Form.Control type="email" placeholder="Reason for Contact" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Container>
        <h1>MAP</h1>
      </Container>
    </Container>
  );
}
