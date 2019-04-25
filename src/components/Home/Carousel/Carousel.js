import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../../assets/images/slide-bg-1.jpg";
import slide_2 from "../../../assets/images/slide-bg-1.jpg";
import slide_3 from "../../../assets/images/slide-bg-1.jpg";
import "./carousel.css";

class CarouselComponent extends Component {
  state = {
    slides: [
      {
        id: "slide0",
        captionTitle: "First slide label",
        captionText:
          "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        url: slide_1
      },
      {
        id: "slide1",
        captionTitle: "Second slide label",
        captionText:
          "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        url: slide_2
      },
      {
        id: "slide2",
        captionTitle: "Third slide label",
        captionText:
          "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        url: slide_3
      }
    ]
  };

  render() {
    return (
      <Carousel>
        {this.state.slides.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={item.url} alt="First slide" />
              {/** <Carousel.Caption>
                <h3>{item.captionTitle}</h3>
                <p>{item.captionText}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
export default CarouselComponent;
