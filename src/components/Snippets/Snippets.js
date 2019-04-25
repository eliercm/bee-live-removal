import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./snippets.css";

export const SnippetsComponent = () => {
  return (
    <div className="bg-snippets text-center">
      <div className="snippets">
        <Container>
          <Row>
            <Col>
              <h1>
                <small>
                  {" "}
                  We don't kill bees. <br />
                </small>
                We <span>saved</span> and
                <span> relocated</span> in other apiaries.
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SnippetsComponent;
