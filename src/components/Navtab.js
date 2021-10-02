import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navtab() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h1>Adrian Cronin</h1></Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="#aboutMe">About Me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="./assets/pdf/AdrianCroninResume.pdf" target="_blank">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}