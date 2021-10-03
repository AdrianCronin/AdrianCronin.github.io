import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard'

// project data to be used as props
const projectData = require('./ProjectData');
console.log(projectData);

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
                        {projectData.map((project) => (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                tools={project.tools}
                                deployed={project.deployed}
                                repo={project.repo}
                            />
                        ))}

                        {/* Cup of Sugear */}
                        {/* <Col>
                            <Card className="shadow position-relative">
                                <Card.Img variant="top" src="./assets/images/cupofsugear.png" width="100%" height="225" alt="Cup of Sugar Thumbnail" />

                                <Card.Body >
                                    <Card.Text><strong>Cup of Sugear</strong> - A tool to help neighbors
                                        borrow/loan/exchange items.</Card.Text>
                                    <Card.Text><strong>Technologies Used</strong> - HTML, CSS, JavaScript,
                                        Node.js, Express.js, MySQL, Sequelize, Handlebars</Card.Text>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <ButtonGroup>
                                            <a rel="noreferrer" href="https://cup-of-sugear.herokuapp.com/" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">View</a>
                                            <a rel="noreferrer" href="https://github.com/AdrianCronin/Cup-of-Sugear" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">Repo</a>
                                        </ButtonGroup>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col> */}

                        {/* Tech Blog */}
                        <div className="col">
                            <div className="card shadow position-relative">
                                <img src="./assets/images/techblog.jpg" className="bd-placeholder-img card-img-top" width="100%"
                                    height="225" alt="Tech Blog Thumbnail" />

                                <div className="card-body">
                                    <p className="card-text"><strong>Tech Blog</strong> - A blog site where users can
                                        view/publish blog posts and comment on other posts.</p>
                                    <p className="card-text"><strong>Technologies Used</strong> - HTML, CSS, JavaScript,
                                        Node.js, Express.js, MySQL, Sequelize, Handlebars</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn-group">
                                            <a href="https://a-tech-discourse.herokuapp.com/" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">View</a>
                                            <a href="https://github.com/AdrianCronin/Tech-Blog" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Employee Management System */}
                        <div className="col">
                            <div className="card shadow position-relative">
                                <img src="./assets/images/ems_menu.jpg" className="bd-placeholder-img card-img-top" width="100%"
                                    height="225" alt="Employee Management System Thumbnail" />

                                <div className="card-body">
                                    <p className="card-text"><strong>Employee Management System</strong> - A command line
                                        application to help manage a company's employee database.</p>
                                    <p className="card-text"><strong>Technologies Used</strong> - JavaScript, Node.js, MySQL,
                                        Inquirer</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn-group">
                                            <a href="https://drive.google.com/file/d/1SnPjHrLkBnNkWfSVr36kgNF94oEn0KgC/view"
                                                target="_blank" className="btn btn-sm btn-outline-secondary">Demo</a>
                                            <a href="https://github.com/AdrianCronin/Employee-Management-System"
                                                target="_blank" className="btn btn-sm btn-outline-secondary">Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Collector */}
                        <div className="col">
                            <div className="card shadow position-relative">
                                <img src="./assets/images/screenshot3.png" className="bd-placeholder-img card-img-top"
                                    width="100%" height="225" alt="The Collector Thumbnail" />

                                <div className="card-body">
                                    <p className="card-text"><strong>The Collector</strong> - A tool to help Marvel fans
                                        discover new Collectibles, Comics, Storylines and Characters!</p>
                                    <p className="card-text"><strong>Technologies Used</strong> - HTML, CSS, JavaScript, Bulma,
                                        jQuery</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn-group">
                                            <a href="https://michellecoder.github.io/The-Collector/" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">View</a>
                                            <a href="https://github.com/michellecoder/The-Collector" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Weather Dashboard */}
                        <div className="col">
                            <div className="card shadow">
                                <img src="./assets/images/weathdash.jpg" className="bd-placeholder-img card-img-top"
                                    width="100%" height="225" alt="Weather Dashboard Thumbnail" />

                                <div className="card-body">
                                    <p className="card-text"><strong>Weather Dashboard</strong> - Search a city and see its
                                        current weather and 5-Day forecast.</p>
                                    <p className="card-text"><strong>Technologies Used</strong> - HTML, CSS, JavaScript, jQuery
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn-group">
                                            <a href="https://adriancronin.github.io/WeatherDashboard/" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">View</a>
                                            <a href="https://github.com/AdrianCronin/WeatherDashboard" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Work Day Scheduler */}
                        <div className="col">
                            <div className="card shadow">
                                <img src="./assets/images/worksched.jpg" className="bd-placeholder-img card-img-top"
                                    width="100%" height="225" alt="Work Day Scheduler Thumbnail" />
                                <div className="card-body">
                                    <p className="card-text"><strong>Work Day Scheduler</strong> - A tool to help organize and
                                        plan your day.</p>
                                    <p className="card-text"><strong>Technologies Used</strong> - HTML, CSS, JavaScript, jQuery
                                    </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="btn-group">
                                            <a href="https://adriancronin.github.io/Work-Day-Scheduler/" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">View</a>
                                            <a href="https://github.com/AdrianCronin/Work-Day-Scheduler" target="_blank"
                                                className="btn btn-sm btn-outline-secondary">Repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>

        </main>
    ); // end return
}; // end function