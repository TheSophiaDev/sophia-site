import './Legal.css';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



function Legal() {
      return (
        <div className="Legal">
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
                    <Link to="/legal" role="button" class="dropdown-item active" data-rr-ui-dropdown-item tabindex="0">Legal Notice</Link>
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
          <div className="Legal-content container">
            <div className="Legal-text">
              <h1>Legal Notice</h1>
              <h2>Information according to § 5 TMG:</h2>
              <p>Sophia Fuhrmann</p>
              <h3>Postal address:</h3>
              <p>Rudolstädter Str. 27 <br/>07549 Gera</p>
              <h3>Contact:</h3>
              <p>Phone: <br/>E-mail: me@the-sophia.dev</p>
              <h2>Notes on the website</h2>
              <h3>Copyright notice</h3>
              <p>Images on the home page are from publicdomainvectors.org on freesvg.org. <br/> Photo of Sophia Fuhrmann is property of the page creator.</p>
              <h3>External links</h3>
              <p>This website contains links to third-party websites ("external links"). These websites are subject to the liability of the respective operators. When the external links were first created, the provider checked the external content for any legal violations. At that time, no legal violations were apparent. The provider has no influence on the current and future design and content of the linked pages. The inclusion of external links does not imply that the provider adopts the content behind the reference or link as its own. Constant monitoring of these external links is not reasonable for the provider without concrete indications of legal violations. However, if legal violations become known, such external links will be deleted immediately. </p>
              <h2>Information according to § 36 VSBG</h2>
              <p>The EU Commission provides a platform for out-of-court online dispute resolution (ODR platform), which can be accessed at <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.<br/>
                 We are neither willing nor obliged to participate in a dispute resolution procedure before a consumer arbitration board.</p>
            </div>
          </div>
        </div>
      );
    }


export default Legal;
