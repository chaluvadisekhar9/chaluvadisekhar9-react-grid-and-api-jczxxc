import React, { Component } from "react";

export default class CountDown extends Component {
  constructor(props){
    super(props)
    this.countDownTimer = null;
    this.state = {
      days : 0,
      hours : 0,
      minutes : 0,
      seconds : 0,
      expired : false
    }
  }
  componentDidMount (){
    this.countDownTimer = setInterval(this.timerInit,1000)
  }
  componentWillUnmount(){
    if (this.countDownTimer){
      clearInterval(this.countDownTimer)
    }
  }
  timerInit = ()=>{
    const { startDate } = this.props;
    console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownTimer);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, expired: false });
  };
  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return <div className="expired">Expired :(</div>;
    }
    return (
      <div className="counterPage"> 
        <h1>Upcoming : SXM-8</h1>
        <section className="timerPart">
          <div className="sec">
            <div className="numB">{days}</div>
            <p>DAYS</p>
          </div>
          <div className="sec">
            <div className="numB">{hours}</div>
            <p>HOURS</p>
          </div>
          <div className="sec">
            <div className="numB">{minutes}</div>
            <p>MINUTES</p>
          </div>
          <div className="sec">
            <div className="numB">{seconds}</div>
            <p>SECONDS</p>
          </div>
        </section>
      </div>
    );
  }
}
