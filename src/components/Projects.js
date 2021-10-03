import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard'

// project data to be used as props
const projectData = require('./ProjectData');

export default function Projects() {
    return (
        <main id="projects">

            <Container className="py-5 text-center">
                <Row className="py-lg-5">
                    <Col className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light text-white">Projects</h1>
                        <p className="lead text-secondary">
                            Check out some of the work I've done!
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="album py-5 bg-secondary">
                <Container>
                    <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {projectData.map((project, index) => (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                tools={project.tools}
                                deployed={project.deployed}
                                repo={project.repo}
                                key={index}
                            />
                        ))}
                    </Row>
                </Container>
            </div>

        </main>
    ); 
}; 