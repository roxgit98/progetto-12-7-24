import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import "./App.css";
import "./style.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <MainSection />
        </Col>
      </Row>
      <Player />
    </Container>
  );
}

export default App;
