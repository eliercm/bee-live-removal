import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./servicesarea.css";
import { areas } from "../../data";

export const ServicesAreaComponent = () => {
  return (
    <div id="services-areas">
      <div className="bg-services-areas">
        <Container className="text-center">
          <Row>
            <Col className="text-center">
              <h2>Services Areas</h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-area">
              {areas.map(item => {
                return <h4 key={item.id}>{item.area}</h4>;
              })}
            </Col>
            {/**<Col>
            <Figure>
              <Figure.Image alt="map" src={map} />
            </Figure>
          </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ServicesAreaComponent;
