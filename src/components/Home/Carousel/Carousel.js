import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_1 from "../../../assets/images/slide-bg-1.jpg";
import slide_2 from "../../../assets/images/slide-bg-2.jpg";
import slide_3 from "../../../assets/images/slide-bg-3.jpg";
import "./carousel.css";

class CarouselComponent extends Component {
  state = {
    slides: [
      {
        id: "slide0",
        captionTitle: "Bee Hives",
        captionText: "Bee Hives",
        url: slide_1
      },
      {
        id: "slide1",
        captionTitle: "Hives work",
        captionText: "Hives work",
        url: slide_2
      },
      {
        id: "slide2",
        captionTitle: "Bees",
        captionText: "Bees",
        url: slide_3
      }
    ]
  };

  render() {
    return (
      <Carousel
        interval="15000">
        {this.state.slides.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={item.url} alt="Bee Hives" />
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
