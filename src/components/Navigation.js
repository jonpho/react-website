import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <Navbar varient="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Jonathan Pho</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/issues">Issues</Nav.Link>
                        <NavDropdown title="Social Media" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="https://www.facebook.com/JonathanPhoForCityCouncil">Facebook</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/jonpho">LinkedIN</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/jonpho">GitHub</NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            {/*<NavDropdown.Item href="#action5">*/}
                            {/*    Something else here*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;