import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

const Sidebar = () => (
  <Navbar expand="md" className="fixed-left justify-content-between">
    <Container className="flex-column align-items-start">
      <Navbar.Brand href="index.html">
        <img src={logo} width={131} height={40} alt="spotify" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="flex-column">
          <Nav.Link href="#" className="d-flex align-items-center">
            <HouseDoorFill className="me-1" />
            Home
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center">
            <BookFill className="me-1" />
            Your Library
          </Nav.Link>
          <Form className="mt-3">
            <FormControl type="text" placeholder="Search" />
            <Button variant="outline-secondary" size="sm">
              Go
            </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <div className="nav-btn">
      <Button variant="light" className="signup-btn">
        Sign up
      </Button>
      <Button variant="dark" className="login-btn">
        Login
      </Button>
      <div>
        <a href="#" className="nav-btn">
          Cookie Policy
        </a>{" "}
        |{" "}
        <a href="#" className="nav-btn">
          Privacy
        </a>
      </div>
    </div>
  </Navbar>
);

export default Sidebar;
