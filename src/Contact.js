import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_afhrzx4', 'template_f0jgf6q', form.current, 'MkAXXofqHBSQdu5_q')
        .then((result) => {
          console.log(result.text);
          alert('Message successfull sent!');
        }, (error) => {
          console.log(error.text);
          alert('Message could not sent!');
        });
    };

      return (
        <div className="Contact">
          <header className="Header">
           <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
              <Link to="/" class="navbar-brand">Sophia Fuhrmann</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                  <Link to="/skills" role="button" class="nav-link" tabindex="0">Skills</Link>
                  <Link to="/about" role="button" class="nav-link" tabindex="0">About</Link>
                  <Link to="/contact" role="button" class="nav-link active" tabindex="0">Contact</Link>
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
          <div className="Contact-content container">
            <h1>Contact me</h1>
            <p>If you have a request or question, don't hesitate to use the form.</p>
            <div className="Contact-form container">
              <Form ref={form} onSubmit={sendMail}>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="Name" name="name" required/>
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="E-Mail" name="email" required/>
                  </Col>
                </Row>
                <Form.Control type="text" placeholder="Subject" name="subject" required/>
                <Form.Control id="Contact-message" type="textarea" placeholder="Message" name="message" required/>
                <Form.Check type="switch" id="custom-switch" label="I accept the conditions set out in the privacy policy." href="#" value="privacy-check" required />
                <div className="Contact-button">
                  <Button id="Contact-submit" type="submit" value="Send"> Send message! </Button>
                </div>
              </Form>
            </div>
            <div className="Contact-social">
              <h2>Let's get social</h2>
              <div className="Contact-social-btns">
                <Button size="lg" className="Contact-social-btn" href="https://github.com/TheSophiaDev" target="_blank"><i class="fa-brands fa-github"></i>GitHub</Button>
                <Button size="lg" className="Contact-social-btn" href="https://www.linkedin.com/in/sophia-fuhrmann-645980217/" target="_blank"><i class="fa-brands fa-linkedin-in"></i>LinkedIn</Button>
                <Button size="lg" className="Contact-social-btn" href="https://www.xing.com/profile/Sophia_Fuhrmann6/cv" target="_blank"><i class="fa-brands fa-xing"></i>Xing</Button>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default Contact;
