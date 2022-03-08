import React from "react";
import Header from "./Header";
import Options from "./Options";
import Display from "./Display";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Values used in options
      depth: 0,
      useQuotes: false,
      tone: "Casual",
    };
  }

  //function used to handle changes of inputs in Options

  updateState = (e) => {
    const {name, value, type} = e.target

    this.setState({                             
      ...this.state,
      [name]: type === "checkbox" 
        ? e.target.checked
        : value,
        // checkbox input doesn't use "value" to store info on whether its checked, only "checked"
    });
    if (type !== "checkbox") e.preventDefault(); // preventDefault causes checkbox inputs to act all wonky
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
