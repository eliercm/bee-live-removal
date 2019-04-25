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
              <Col key={item.id} className="faq-content" lg={4} xs={12}>
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

/*class FaqsComponent extends Component {
  _handlerClick = e => {
    const target = e.target.getAttribute("data-target");
    document.querySelector(target).classList.toggle("in");
    document.querySelector(target).classList.toggle("collapsing");
    //document.querySelector(target).classList.toggle("collapsing");
  };

  render() {
    return (
      <Container className="faqs">
        <Row>
          <Col>
            {faqs.map((item, index) => {
              let id = `accordion_${index}`;
              return (
                <Card id="accordion">
                  <Card.Header
                    as="h5"
                    data-toggle="collapse"
                    data-parent="#colapse"
                    data-target={`#${id}`}
                    onClick={e => this._handlerClick(e)}
                  >
                    {item.question}
                  </Card.Header>
                  <Card.Body
                    id={id}
                    className="panel-collapse collapse in"
                    aria-expanded="true"
                  >
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}*/
export default FaqsComponent;
