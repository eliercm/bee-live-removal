import React, { Component } from "react";
import logo from "../../../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import "./navbar.css";
import { MenuItems } from "../../../data";
//debugger;
class NavbarComponent extends Component {
  constructor() {
    super();
    this.state = { fixed: false };
    this.HandleFixedAtScroll = this.HandleFixedAtScroll.bind(this);
  }
  componentWillMount() {
    window.addEventListener("scroll", this.HandleFixedAtScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.HandleFixedAtScroll);
  }

  HandleFixedAtScroll = () => {
    this.setState({
      fixed: window.pageYOffset > 100 && window.innerWidth >= 992 ? true : false
    });
  };
  //window.innerWidth >= 768
  render() {
    return (
      <Navbar
        expand={"lg"}
        variant="light"
        fixed={this.state.fixed ? "top" : ""}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Figure style={{ marginBottom: "0" }}>
              <Figure.Image alt="logo" src={logo} />
            </Figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" defaultActiveKey="#home">
              {/*this.state.menuItems.map((item, index) => {*/}
              {MenuItems.map((item, index) => {
                return (
                  <Nav.Link href={item.url} key={index}>
                    {item.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
