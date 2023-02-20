import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import '../../components/mediaQueries.scss';

function Header() {
  const menus = ["Home", "Service", "About", "Pages", "Blocks", "Contact"];

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/Auto_Logo_black.png"
            alt=""
            className="brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {menus.map((menu,i) => (
              <Nav.Link key={i} href="#features">{menu}</Nav.Link>
            ))}
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
