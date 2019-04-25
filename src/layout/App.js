import React, { Component } from "react";
//import PreloaderStart from "../components/PreloaderStart";
import Header from "../components/Home/Header/Header";
import Carousel from "../components/Home/Carousel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import ServicesArea from "../components/ServicesAreas/ServicesArea";
import Snippets from "../components/Snippets/Snippets";
import Faqs from "../components/Faqs/Faqs";
import ContactUs from "../components/Contacts/Contact";
import ScrollUp from "../components/GoUp";
import { Container, Row, Col } from "react-bootstrap";

const date = new Date().getFullYear();
class App extends Component {
  constructor() {
    super();
    this.state = { fixed: false };
    this.HandleAtScrollShowBtn = this.HandleAtScrollShowBtn.bind(this);
  }
  componentWillMount() {
    window.addEventListener("scroll", this.HandleAtScrollShowBtn);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.HandleAtScrollShowBtn);
  }

  HandleAtScrollShowBtn = () => {
    let currentScroll = 300;
    if (window.pageYOffset >= currentScroll) {
      document.querySelector(".scroll-up").classList.add("d-block-scroll-up");
    } else {
      document
        .querySelector(".scroll-up")
        .classList.remove("d-block-scroll-up");
    }

    //console.log(window.pageYOffset);
  };

  render() {
    return (
      <section style={{ backgroundColor: "#f9f9f9" }} id="home">
        <Header />
        <div className="content">
          <ScrollUp />
          <Carousel />
          <AboutUs />
          <Services />
          <ServicesArea />
          <Snippets />
          <Faqs />
          {this.props.children}
        </div>
        <footer>
          <ContactUs />
          <Container className="footer-content">
            <Row>
              <Col className="text-center">
                <small>
                  Copyright © {date}
                  <span> Bee Keeping</span>
                </small>
              </Col>
            </Row>
          </Container>
        </footer>
      </section>
    );
  }
}

export default App;
