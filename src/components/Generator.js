import React from "react";
import Header from "./Header";
import Options from "./Options";
import Display from "./Display";

// Functions
import generateEscapedStrings from "../functions/generateEscapedStrings";

export default class Generator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Values used in options
      depth: 0,
      useQuotes: false,
      tone: "Casual",
      escapedString: [],
      // properties used in text generation
      initialValue: "<",
      escapedStrings: [],
      toneSpecificPhrases: {}, // object of arrays
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

  //function that will generate an array of escaped strings
  updateEscapedStrings = (e) => {
    e.preventDefault();

    const newArray = generateEscapedStrings(this.state.depth, this.state.useQuotes);

    this.setState({
      escapedStrings: newArray,
    });
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
        <Display>
          {this.state.escapedStrings}
          {/* Alright, let me tell you about escaping (while async loads)

HTML escaping is a bit funny, but not much funnier than writing how to do it. Say I want to use the symbol < in a sentence. That's quite easy to do: I just write "&lt;". However, in order to write "&lt;", I need to write "&quot;&amp;lt;&quot;". Then in order to write that, I need to

And on and on it goes... */}
        </Display>
      </>
    );
  }
}
