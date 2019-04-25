import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./services.css";
import { services } from "../../data";

export const ServicesComponent = () => {
  return (
    <div className="bg-services" id="services">
      <div className="services">
        <Container>
          <Row className="text-center">
            <Col>
              <h2>Services</h2>
            </Col>
          </Row>
          <Row className="text-center">
            {services.map(item => {
              return (
                <Col
                  key={item.id}
                  className="col-service"
                  md={6}
                  lg={3}
                  sm={12}
                >
                  <Row>
                    <Col>
                      <div className="hexagon">
                        <div className="lft-hexagon" />
                        <Figure className="bg-icon-service">
                          <Figure.Image alt="bee_removal" src={item.img} />
                        </Figure>
                        <div className="rtl-hexagon" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h3>{item.name}</h3>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default ServicesComponent;
