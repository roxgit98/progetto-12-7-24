import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

const Sidebar = () => (
  <Navbar expand="md" className="fixed-left justify-content-between">
    <Navbar.Brand href="index.html">
      <img src={logo} width={131} height={40} alt="spotify" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar" />
    <Navbar.Collapse id="navbar">
      <Nav className="flex-column">
        <Nav.Link href="#">
          <HouseDoorFill />
          Home
        </Nav.Link>
        <Nav.Link href="#">
          <BookFill />
          Your Library
        </Nav.Link>
        <Form className="mt-3">
          <FormControl type="text" placeholder="Cerca" className="mr-sm-2" />
          <Button variant="outline-secondary" size="sm">
            Go
          </Button>
        </Form>
      </Nav>
    </Navbar.Collapse>
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
