import './Legal.css';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



function Privacy() {
      return (
        <div className="Privacy">
          <header className="Header">
           <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
              <Link to="/" class="navbar-brand">Sophia Fuhrmann</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                  <Link to="/skills" role="button" class="nav-link" tabindex="0">Skills</Link>
                  <Link to="/about" role="button" class="nav-link" tabindex="0">About</Link>
                  <Link to="/contact" role="button" class="nav-link" tabindex="0">Contact</Link>
                  <NavDropdown title="Legal" id="basic-nav-dropdown">
                    <Link to="/legal" role="button" class="dropdown-item" data-rr-ui-dropdown-item tabindex="0">Legal Notice</Link>
                    <Link to="/privacy" role="button" class="dropdown-item active" data-rr-ui-dropdown-item tabindex="0">Privacy </Link>
                  </NavDropdown>
                  <Nav.Item className="social-links">
                    <Nav.Link href="https://github.com/TheSophiaDev" target="_blank"><i class="fa-brands fa-github"></i></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/sophia-fuhrmann-645980217/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></Nav.Link>
                    <Nav.Link href="https://www.xing.com/profile/Sophia_Fuhrmann6/cv" target="_blank"><i class="fa-brands fa-xing"></i></Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
           </Navbar>
          </header>
          <div className="Legal-content container">
              <div className="Legal-text">
                <h1>Hello!</h1>
                <p>My name is Sophia and I am a web developer from Thuringia, Germany. I am passionate about developing websites and applications and have a love for successful design.</p>
                <p>So far, I am a one-person business with devLogick and work on private projects.</p>
                <p>In my free time, I like to read, do sports and do some handicraft activities.</p>
                <p>I am a well-structured person who quickly learns new topics. I especially value good teamwork and reliability.</p>

              </div>
          </div>
        </div>
      );
    }


export default Privacy;
