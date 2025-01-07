import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../cssPage/potfolio.module.css';
import { Link } from 'react-router-dom';



function NavBar({handleShow}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
        <Container  >
          <Navbar.Brand as={Link} to="/" className={styles.brand}>
            Weexi Dev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about" className={styles.navLink}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/project/list" className={styles.navLink}>
                Projects
              </Nav.Link>
              <Nav.Link onClick={handleShow} className={styles.navLink}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
