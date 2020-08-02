import React, { Component } from "react";
import Calculate from "./calculate";
import Header from "./header";
import About from "./about";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appliance: "",
      applianceInput: "",
      watts: "",
      kW: "",
      units: "",
      ppkWh: "",
      timeHours: "",
      noOfAppliances: 1,
      cost: "",
      totalAmount: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var watts = this.state.watts;
    var timeHours = this.state.timeHours;
    var noOfAppliances = this.state.noOfAppliances;
    var cost = this.state.cost;
    var kW = this.state.kW;
    var ppkWh = this.state.ppkWh;
    var units = this.state.units;
    var totalAmount = this.state.totalAmount;
    kW = watts / 1000;
    units = kW * timeHours * noOfAppliances;
    ppkWh = units * cost;
    totalAmount = ppkWh / 100;
    const round = totalAmount.toFixed(2);
    this.setState({ totalAmount: round });
    if (round > 0) console.log(this.state.appliance, "£" + round);
  }

  handleReset() {
    this.setState({
      appliance: "",
      watts: "",
      timeHours: "",
      noOfAppliances: "",
      cost: "",
      kW: "",
      units: "",
    });
  }

  render() {
    return (
      <div>
        <Header data={this.state} />
        <About />
        <Calculate
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}

export default Calculator;

//calculate() {
//let appliance = this.state.appliance;
//var watts = 2600;
//var kW = watts / 1000.0;
//var timeHours = 3;
//var noOfAppliances = 1;
//var units = kW * timeHours * noOfAppliances;
//var cost = 15;
//var ppkWh = units * cost;
//var totalAmount = ppkWh / 100.0;
//var t = totalAmount.toFixed(2);
