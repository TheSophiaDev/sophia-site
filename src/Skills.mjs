import './Skills.css';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



function Skills() {
      return (
        <div className="Skills">
          <header className="Header">
           <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
              <Link to="/" class="navbar-brand">Sophia Fuhrmann</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                  <Link to="/skills" role="button" class="nav-link active" tabindex="0">Skills</Link>
                  <Link to="/about" role="button" class="nav-link" tabindex="0">About</Link>
                  <Link to="/contact" role="button" class="nav-link" tabindex="0">Contact</Link>
                  <NavDropdown title="Legal" id="basic-nav-dropdown">
                    <Link to="/legal" role="button" class="dropdown-item" data-rr-ui-dropdown-item tabindex="0">Legal Notice</Link>
                    <Link to="/privacy" role="button" class="dropdown-item" data-rr-ui-dropdown-item tabindex="0">Privacy </Link>
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
          <div className="Skills-content container">
            <h1>Skills</h1>
            <div className="Skills-progress">
              <div className="chart">
                <span>WordPress & TYPO3</span>
                <footer>
                  <div data-width="95%" style={{width: "95%"}}></div>
                </footer>
              </div>
            <div className="chart">
                <span>HTML 5 & CSS 3</span>
                <footer>
                  <div data-width="75%" style={{width: "95%", backgroundColor:"#00EA80"}}></div>
                </footer>
            </div>
              <div className="chart">
                <span>PHP</span>
                <footer>
                  <div data-width="70%" style={{width: "70%", backgroundColor:"#00D587"}}></div>
                </footer>
              </div>
              <div className="chart">
                <span>MySQL & PostgreSQL</span>
                <footer>
                  <div data-width="60%" style={{width: "85%", backgroundColor:"#00BF8E"}}></div>
                </footer>
              </div>
              <div className="chart">
                <span>Pascal & Shell</span>
                <footer>
                  <div data-width="60%" style={{width: "80%", backgroundColor:"#00AA95"}}></div>
                </footer>
              </div>
              <div className="chart">
                <span>Symfony</span>
                <footer>
                  <div data-width="30%" style={{width: "30%", backgroundColor:"#1D959C"}}></div>
                </footer>
              </div>
              <div className="chart">
                <span>JavaScript</span>
                <footer>
                  <div data-width="30%" style={{width: "75%", backgroundColor:"#0080A2"}}></div>
                </footer>
              </div>
              <div className="chart">
                <span>ReactJS</span>
                <footer>
                  <div data-width="20%" style={{width: "40%", backgroundColor:"#0060AC"}}></div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default Skills;
