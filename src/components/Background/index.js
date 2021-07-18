import React from "react";
import "./style.css";
class Background extends React.Component {
  render() {
    return (
      <div id="background">
        <div id="circle"></div>
        <div id="header-item">{this.props.headerElement}</div>
        <div id="main-item">{this.props.mainElement}</div>
        <div className="card-item">{this.props.cardElement}</div>
        <div id="email-item">{this.props.emailElement}</div>
        <div className="star">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star0">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star1">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star2">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star3">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star4">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star5">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star6">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
        <div className="star star7">
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
      </div>
    );
  }
}
export default Background;
