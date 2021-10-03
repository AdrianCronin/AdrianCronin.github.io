import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Contact() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand id="contact">
                    <h2>Contact Me</h2>
                    <p className="text-secondary">Let's work together</p>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="mailto:acronindev@gmail.com" className="btn btn-outline-secondary" target="_blank">Email:
                        acronindev@gmail.com</Nav.Link>
                    <Nav.Link href="https://github.com/AdrianCronin" className="btn btn-outline-secondary" target="_blank">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/adrian-cronin-4442b5216/" className="btn btn-outline-secondary"
                        target="_blank">LinkedIn</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};