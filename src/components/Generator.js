import React from "react";
import Header from "./Header/Header";
import Options from "./Options/Options";
import Display from "./Display/Display";

// Functions
import generateEscapedStrings from "../functions/generateEscapedStrings";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Values used in options
      initialChar: "<",
      depth: 2,
      useQuotes: false,
      tone: "casual",
      // properties used in text generation
      escapedStrings: [],
      // toneSpecificPhrases: {}, // object of arrays
      // // property to control whether text is generated in the Display component
      // // this way escapedStrings can remain in state even when display is cleared
    };
  }

  //function used to handle changes of inputs in Options
  updateState = (e) => {
    const { name, value, type } = e.target;

    this.setState({
      ...this.state,
      [name]: type === "checkbox" ? e.target.checked : value,
      // checkbox input doesn't use "value" to store info on whether its checked, only "checked"
    });
    if (type !== "checkbox") e.preventDefault(); // preventDefault causes checkbox inputs to act all wonky
  };

  //function that will update the array of escaped strings in the state
  updateEscapedStrings = (e) => {
    e.preventDefault();

    const newArray = generateEscapedStrings(
      this.state.depth,
      this.state.useQuotes,
      this.state.initialChar
    );

    this.setState({
      escapedStrings: newArray,
    });
  };

  // Function that will prevent the escapedString array to be passed on to the Display component and, as a result, no text will be displayed (as generation is dependent on there being props.children)
  handleClearing = () => {
    this.setState({ escapedStrings: [] });
  };

  render() {
    const { tone } = this.state;
    return (
      <>
        <Header />
        <Options
          generatorState={this.state}
          updateState={this.updateState}
          updateEscapedStrings={this.updateEscapedStrings}
        />
        <Display
          handleClearing={this.handleClearing}
          escapedStrings={this.state.escapedStrings}
        />
      </>
    );
  }
}
