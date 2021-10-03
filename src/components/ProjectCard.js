import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function ProjectCard(props) {
    return (
        <Col>
            <Card className="shadow position-relative">
                <Card.Img variant="top" src={props.image} width="100%" height="225" alt={props.alt} />

                <Card.Body >
                    <Card.Text><strong>{props.title}</strong> - {props.description}</Card.Text>
                    <Card.Text><strong>Technologies Used</strong> - {props.tools}</Card.Text>
                    <div className="d-flex justify-content-center align-items-center">
                        <ButtonGroup>
                            <a rel="noreferrer" href={props.deployed} target="_blank"
                                className="btn btn-sm btn-outline-secondary">View</a>
                            <a rel="noreferrer" href={props.repo} target="_blank"
                                className="btn btn-sm btn-outline-secondary">Repo</a>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}