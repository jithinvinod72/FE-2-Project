import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="trail-sign"></ion-icon>
              <h1>OutVentur</h1>
            </div>
            <p>
              Explore the outdoors with confidence! OutVentur brings you the best gear for hiking, camping, cycling, and more. Gear up for your next adventure!
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Our Mission</li>
              <li>Our Team</li>
              <li>Our Impact</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Support</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Order</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>123 Adventure Lane, Outdoorsville, USA</li>
              <li>Email: support@outventur.com</li>
              <li>Phone: +1 800 555 0199</li>
              <li>Follow Us: 
                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
