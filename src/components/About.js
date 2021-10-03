import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function About() {
    return (
        <Container className="col-xxl-8 px-4 py-5 bg-dark text-secondary" id="aboutMe">
            <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                <Col className="col-10 col-sm-8 col-lg-6">
                    <Image src="./assets/images/mugshot.jpg" className="d-block mx-lg-auto img-fluid " alt=""
                        width="700" height="500" loading="lazy" />
                </Col>
                <Col className="col-lg-6 col-sm-9">
                    <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Hi, I'm Adrian.</h1>
                    <p className="lead">
                        I am a Full Stack web developer with a passion for learning and constant self-improvement.
                        Having worked on multiple manufacturing plant start-ups, I have experience working with
                        cross-functional teams on large projects. My primary focus during those projects was developing
                        safe, ergonomic and efficient workflows and Standard Operating Procedures.
                        <br /><br />
                        After a decade plus working in manufacturing I decided to pursue a career in web development and
                        obtained a Full Stack Web Development Certificate from the University of Washington. I have skills
                        in CSS, HTML, JavaScript, and MySQL, as well as creating MongoDB, Express, React, Node (MERN) stack
                        applications.
                        <br /><br />
                        I love solving problems, whether it be an algorithm or application functionality. I am excited to
                        get better at and learn more about writing code.
                    </p>
                </Col>
            </Row>
        </Container>
    ); 
}; 