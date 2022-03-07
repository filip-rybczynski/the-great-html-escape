import React from "react";
import Header from "./Header";
import Options from "./Options";
import Display from "./Display";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      depth: 0,
      useQuotes: false,
      tone: "Casual",
    };
  }

  updateState = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.hasOwnProperty("checked")
        ? e.target.checked
        : e.target.value,
    });
    if (!e.target.hasOwnProperty("checked")) e.preventDefault();
  };

  render() {
    return (
      <>
        <Header />
        <Options generatorState={this.state} updateState={this.updateState} />
        <Display />
      </>
    );
  }
}
