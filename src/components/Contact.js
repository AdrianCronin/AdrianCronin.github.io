import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default function Contact() {
    return (
        <div className="col-md-6" id="contact">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Contact Me</h2>
                <p className="text-secondary">Let's work together</p>
                <a href="mailto:acronindev@gmail.com" className="btn btn-outline-secondary" target="_blank">Email:
                    acronindev@gmail.com</a>
                <a href="https://github.com/AdrianCronin" className="btn btn-outline-secondary" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/adrian-cronin-4442b5216/" className="btn btn-outline-secondary"
                    target="_blank">LinkedIn</a>
            </div>
        </div>
    );
};