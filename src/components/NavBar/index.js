import './style.css';

export default function Navbar() {

    return (
        <nav role="navigation" id="menu">
            <div id="nav-logo">
                ABC
            </div>
            <ul class="nav-list">
                <a href="#"><li class="nav-item">About Me</li></a>
                <a href="#"><li class="nav-item">Projects</li></a>
                <a href="#"><li class="nav-item">Contact</li></a>
                <a href="#"><li class="nav-item">Resume</li></a>
            </ul>
        </nav>
    );
};