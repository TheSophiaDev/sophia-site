import './Home.css';
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Phoenix from './img/Phoenix.svg';
import Shirt from './img/Shirt.svg';
import BasicStream from './img/BasicStream.svg';
import Yoga from './img/Yoga.svg';
import Pingu from './img/Pingu.svg';





function Home() {
    return (
      <div className="Home">
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="CookieConsentNotice"
          style={{ background: "#212529", borderTop: "2px solid #00AA95" }}
          buttonStyle={{ background: "rgba(255,255,255,.55)", color: "#212529", fontSize: "13px" }}
          expires={150}
        >
          This website uses necessary cookies to enhance the user experience.{" "}
          See more information on our <Link to="/privacy">Privacy Policy</Link>.
        </CookieConsent>
          <header className="Home-header">
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
                  <Link to="/privacy" role="button" class="dropdown-item" data-rr-ui-dropdown-item tabindex="0">Privacy Policy</Link>
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
        <div className="Home-start">
          <img src={Phoenix} className="Home-svg-start" alt="sELfmAdebyEla" />
          <div className="Home-me-title">
            <h1>Sophia Fuhrmann</h1>
          </div>
        </div>
       <div className="Home-content">
           <Carousel className="Home-carousel" id="CarouselSlider">
             <Carousel.Item className="Home-carousel-item shirt">
               <img src={Shirt} className="Home-svg" alt="sELfmAdebyEla" />
               <Carousel.Caption className="Home-carousel-text">
                 <h3><a href="https://devlogick.com/portfolio-item/selfmadebyela/">sELfmAdebyEla</a></h3>
                 <div className="Home-skill-icons">
                   <span title="WordPress"><i class="fa-brands fa-wordpress-simple"></i></span>
                   <span title="HTML5"><i class="fa-brands fa-html5"></i></span>
                   <span title="CSS3"><i class="fa-brands fa-css3-alt"></i></span>
                 </div>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item className="Home-carousel-item basic-stream">
               <img src={BasicStream} className="Home-svg" alt="BasicStream" />
               <Carousel.Caption className="Home-carousel-text">
                 <h3><a href="https://devlogick.com">Basic Stream</a></h3>
                 <div className="Home-skill-icons">
                   <span title="ModX"><i class="fa-brands fa-modx"></i></span>
                   <span title="Webdesign"><i class="fa-solid fa-paintbrush"></i></span>
                   <span title="PHP"><i class="fa-brands fa-php"></i></span>
                   <span title="JavaScript"><i class="fa-brands fa-js-square"></i></span>
                   <span title="MySQL"><i class="fa-solid fa-database"></i></span>
                   <span title="HTML5"><i class="fa-brands fa-html5"></i></span>
                   <span title="CSS3"><i class="fa-brands fa-css3-alt"></i></span>
                 </div>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item className="Home-carousel-item yoga">
               <img src={Yoga} className="Home-svg" alt="Nareia Verein" />
               <Carousel.Caption className="Home-carousel-text">
                 <h3><a href="https://devlogick.com">Nareia Verein</a></h3>
                 <div className="Home-skill-icons">
                   <span title="WordPress"><i class="fa-brands fa-wordpress-simple"></i></span>
                   <span title="Webdesign"><i class="fa-solid fa-paintbrush"></i></span>
                   <span title="HTML5"><i class="fa-brands fa-html5"></i></span>
                   <span title="CSS3"><i class="fa-brands fa-css3-alt"></i></span>
                 </div>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item className="Home-carousel-item pingu">
               <img src={Pingu} className="Home-svg" alt="" />
               <Carousel.Caption className="Home-carousel-text">
                 <h3><a href="https://devlogick.com">Stoffwindel-Forum</a></h3>
                 <div className="Home-skill-icons">
                   <span title="Python"><i class="fa-brands fa-python"></i></span>
                   <span title="Docker"><i class="fa-brands fa-docker"></i></span>
                   <span title="Django"><i class="fa-solid fa-d"></i></span>
                   <span title="PostgreSQL"><i class="fa-solid fa-database"></i></span>
                   <span title="HTML5"><i class="fa-brands fa-html5"></i></span>
                   <span title="CSS3"><i class="fa-brands fa-css3-alt"></i></span>
                 </div>
               </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
       </div>
      </div>
    );
}


export default Home;
