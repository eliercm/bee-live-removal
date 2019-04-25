import React from "react";
import NavbarComponent from "../../Home/Navbar/Navbar";
import "./header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Dropdown from "react-bootstrap/Dropdown";

const HeaderComponent = () => {
  return (
    <header>
      {/**    <div className="top-contact">
        <Container>
          <Row>
            <Col md={8}>
              <i className="fa fa-envelope">
                <span> info@worldbeekeeping.com</span>
              </i>
              <i className="fa fa-phone">
                <span> +88 01911 837404</span>
              </i>
            </Col>
            <Col md={4} xs={12} className="shop-pos">
            <i className="fa fa-shopping-cart">
                <span className="badge">3</span>
              </i>
            </Col> 
          </Row>
        </Container>
      </div>*/}
      <NavbarComponent />
    </header>
  );
};

export default HeaderComponent;
