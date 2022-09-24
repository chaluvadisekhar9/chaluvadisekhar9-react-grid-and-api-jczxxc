import React, { Component } from "react";

export default class CountDown extends Component {
  render() {
    return (
      <div className="counterPage">
        <h1>Upcoming : SXM-8</h1>
        <section className="timerPart">
          <div className="sec">
            <div className="numB">2</div>
            <p>DAYS</p>
          </div>
          <div className="sec">
            <div className="numB">7</div>
            <p>HOURS</p>
          </div>
          <div className="sec">
            <div className="numB">30</div>
            <p>MINUTES</p>
          </div>
          <div className="sec">
            <div className="numB">21</div>
            <p>SECONDS</p>
          </div>
        </section>
      </div>
    );
  }
}
