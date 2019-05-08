import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./faqs.css";
import { Faqs } from "../../data";

export const FaqsComponent = () => {
  return (
    <div id="faqs">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>FAQs</h2>
          </Col>
        </Row>
        <Row>
          {Faqs.map(item => {
            return (
              <Col key={item.id} className="faq-content" xs={12}>
                <div className="question">
                  <h4>{item.question}</h4>
                </div>
                <p>{item.answer}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqsComponent;
