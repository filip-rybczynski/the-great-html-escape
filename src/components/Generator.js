import React from "react";
import Header from "./Header/Header";
import Options from "./Options/Options";
import Display from "./Display/Display";
import Description from "./Description/Description";

// Functions
import generateEscapedStrings from "../functions/generateEscapedStrings";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Values used in options
      options: {
        initialChar: "<",
        depth: 2,
        useQuotes: false,
        tone: "casual",
        mode: "prose",
      },
      // properties used in text generation
      display: false,
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
      options: {
        ...this.state.options,
        [name]: type === "checkbox" ? e.target.checked : value,
      }
      // checkbox input doesn't use "value" to store info on whether its checked, only "checked"
    });
    if (type !== "checkbox") e.preventDefault(); // preventDefault causes checkbox inputs to act all wonky
  };

  //function that will update the array of escaped strings in the state
  generateEscapedStrings = (e) => {
    e.preventDefault();

    const {depth, useQuotes, initialChar } = this.state.options;

    const newArray = generateEscapedStrings(
      depth,
      useQuotes,
      initialChar
    );

    this.setState({
      escapedStrings: newArray,
      display: true,
    });
  };

  // Function that will prevent the escapedString array to be passed on to the Display component and, as a result, no text will be displayed (as generation is dependent on there being props.children)
  handleClearing = () => {
    this.setState({
      escapedStrings: [],
      display: false,
    });
  };

  render() {
    const { options: {mode, tone }, display, escapedStrings } = this.state;

    return (
      <>
        <Header />
        <Description />
        <Options
          generatorState={this.state}
          updateState={this.updateState}
          generateEscapedStrings={this.generateEscapedStrings}
          handleClearing={this.handleClearing}
        />
        {display && (
          <Display
            escapedStrings={escapedStrings}
            mode={mode}
            tone={tone}
          />
        )}
      </>
    );
  }
}
