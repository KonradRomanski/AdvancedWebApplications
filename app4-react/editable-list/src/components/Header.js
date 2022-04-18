import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Header({sortA, sortD}) {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Movie collection</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {/* <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link> */}
                <NavDropdown title="Sort" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => sortA()}>By Name ↓</NavDropdown.Item>
                <NavDropdown.Item onClick={() => sortD()}>By Name ↑</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item> */}
                </NavDropdown>
                {/* <Nav.Link href="#" disabled>
                Link
                </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
    
}

export default Header