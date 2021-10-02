import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Contact() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#contact"><h2>Contact Me</h2></Navbar.Brand>
                <p className="text-secondary">Let's work together</p>
                <Nav className="">
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

{/* <Col className="col-md-6" id="contact">
<Container className="h-100 p-5 text-white bg-dark rounded-3">
    <h2>Contact Me</h2>
    <p className="text-secondary">Let's work together</p>
    <Nav>
        <Nav.Link href="mailto:acronindev@gmail.com" className="btn btn-outline-secondary" target="_blank">Email:
            acronindev@gmail.com</Nav.Link>
        <Nav.Link href="https://github.com/AdrianCronin" className="btn btn-outline-secondary" target="_blank">GitHub</Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/adrian-cronin-4442b5216/" className="btn btn-outline-secondary"
            target="_blank">LinkedIn</Nav.Link>
    </Nav>
</Container>
</Col> */}