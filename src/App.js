import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";


function App() {
  return (
    <Container fluid className="App">
      <Container>
        <h1 id="lead">Hi, I'm Luke</h1>
        <h4 id="lead-bottom">Welcome to my portfolio!</h4>
        <a id="lead-button" type="button" class="btn btn-outline-light btn-lg" href="/about" role="button">Click me!</a>
      </Container>
    </Container>
  );
}

export default App;
