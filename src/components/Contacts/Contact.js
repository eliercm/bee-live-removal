import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./contactus.css";
import logo from "../../assets/images/logo.png";
import { MenuItems, socialsNetworks } from "../../data";

export const contactUsComponent = () => {
  return (
    <div id="contacts-us">
      <Container>
        <Row>
          <Col md={5} xs={12}>
            <Figure>
              <Figure.Image alt="logo" src={logo} />
            </Figure>
            <h4>
              <small>We don't kill bees.</small> <br />
              We <span>saved</span> and
              <span> relocated</span> in other apiaries.
            </h4>
          </Col>
          <Col md={3} xs={12}>
            <h2>Quick Links</h2>
            {MenuItems.map((item, index) => {
              if (item.id !== "home0" && item.id !== "contacs6")
                return (
                  <h5 key={`${index}_${item.id}`}>
                    <a href={item.url}>{item.name}</a>
                  </h5>
                );
            })}
          </Col>
          <Col md={4} xs={12}>
            <h2>Contact Us</h2>
            <div>
              <i className="fa fa-envelope" />
              <p> info@companyname.com</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p> +88 01911 837404</p>
            </div>
            <div className="socials">
              {socialsNetworks.map(item => {
                return (
                  <div key={item.id}>
                    <a href={item.url}>
                      <i className={item.icon} />
                    </a>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default contactUsComponent;
/**  <div id="contactus">
      <Container>
        <Row className="row-rtl">
          <Col md={4} xs={12}>
            <h2>Contact Us</h2>
          </Col>
          <Col md={4} xs={12}>
            <h2>Quick Links</h2>
          </Col>
        </Row>
        <Row className="row-txt">
          <Col md={4} xs={12}>
            <Figure>
              <Figure.Image alt="logo" src={logo} />
            </Figure>
            <h4>
              <small>
                {" "}
                We don't kill bees. <br />
              </small>
              We <span>saved</span> and
              <span> relocated</span> in other apiaries.
            </h4>
          </Col>
          <Col md={4} xs={12}>
            {MenuItems.map((item, index) => {
              if (item.name !== "Home")
                return (
                  <h5 key={`${index}_${item.id}`}>
                    <a href={item.url}>{item.name}</a>
                  </h5>
                );
            })}
          </Col>
          <Col md={4} xs={12}>
            <div>
              <i className="fa fa-envelope" />
              <p> info@companyname.com</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p> +88 01911 837404</p>
            </div>
            <div className="socials">
              {socialsNetworks.map(item => {
                return (
                  <div key={item.id}>
                    <a href={item.url}>
                      <i className={item.icon} />
                    </a>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div> */