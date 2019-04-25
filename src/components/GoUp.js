import React, { Component } from "react";
//debugger;
class ScrollUp extends Component {
  constructor() {
    super();
    this.HandlerScrollUp = this.HandlerScrollUp.bind(this);
  }

  HandlerScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="scroll-up" onClick={this.HandlerScrollUp}>
        <i className="fa fa-angle-up" />
      </div>
    );
  }
}

export default ScrollUp;
