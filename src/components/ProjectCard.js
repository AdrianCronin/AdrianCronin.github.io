import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


export default function ProjectCard(props) {
    return (
        <Col>
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
        </Col>
    )
}