import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
    return (
        <Container className='Footer m-3'>
        <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
            <Container>
            <Navbar.Brand className="mx-auto" href="#">Made by Konrad Romański Ⓒ</Navbar.Brand>
            </Container>
        </Navbar>
        </Container>
    )
}

export default Footer;