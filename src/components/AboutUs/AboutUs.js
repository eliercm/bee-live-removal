import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./aboutus.css";
import { AboutUs } from "../../data";

export const AboutUsComponent = () => {
  return (
    <div className="about-us" id="about-us">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>About Us</h2>
            <p>{AboutUs}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsComponent;
