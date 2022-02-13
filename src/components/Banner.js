import "./App.js";
import Nav from "react-bootstrap/Nav";

function Banner() {
  return (
    <div className="Banner">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Music</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">Whoami</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Banner;
