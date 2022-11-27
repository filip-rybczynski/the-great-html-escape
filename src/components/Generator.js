import React from "react";
import Options from "./Options/Options";
import Display from "./Display/Display";
import Description from "./Description/Description";

// Functions
import generateStrings from "../functions/generateStrings";
import keepWithinRange from "../functions/keepWithinRange";

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
        minDepth: 2,
        maxDepth: 50,
      },
      // properties used in text generation
      displayData: {
        displayMode: "",
        displayTone: "",
        escapedStrings: [],
      },
      // toneSpecificPhrases: {}, // object of arrays
      // // property to control whether text is generated in the Display component
      // // this way escapedStrings can remain in state even when display is cleared
    };
  }

  //function used to handle changes of inputs in Options
  updateState = (e) => {
    const { name, value, type } = e.target;

    const options = this.state.options;

    options[name] = type === "checkbox" ? e.target.checked : value;
    // checkbox input doesn't use "value" to store info on whether its checked, only "checked"

    this.setState({
      options,
    });
    if (type !== "checkbox") e.preventDefault(); // preventDefault causes checkbox inputs to act all wonky
  };

  //function that will update the array of escaped strings in the state
  generateDisplayData = (e) => {
    e.preventDefault();

    const {
      options: { depth, useQuotes, initialChar, mode, tone },
    } = this.state;

    if (depth > 50) {
      alert("Maximum depth is 50! Text will generate with depth = 50.");
    }
    if (depth < 2) {
      alert("Minimum depth is 2! Text will generate with depth = 2.");
    }

    const finalDepth = depth > 50 ? 50 : depth < 2 ? 2 : depth;

    // TODO - change function name, possible conflict!
    const newArray = generateStrings(finalDepth, useQuotes, initialChar);

    this.setState({
      displayData: {
        displayMode: mode,
        displayTone: tone,
        escapedStrings: newArray,
      },
    });
  };

  // Function that will prevent the escapedString array to be passed on to the Display component and, as a result, no text will be displayed (as generation is dependent on there being props.children)
  handleClearing = () => {
    this.setState({
      displayData: {
        ...this.state.displayData,
        escapedStrings: [],
      },
    });
  };

  keepDepthWithinLimits = (e) => {
    const value = keepWithinRange(
      e.target.value,
      this.state.options.minDepth,
      this.state.options.maxDepth
    );

    const options = this.state.options;

    options.depth = value;

    this.setState({
      options,
    });
  };

  render() {
    const {
      options,
      displayData: { displayMode, displayTone, escapedStrings },
    } = this.state;

    return (
      <>
        <Description />
        <Options
          optionsState={options}
          canClear={!!escapedStrings.length} // clearing button should be disabled if there won't be any content generated in the Display component - which is dependent on whether there are any strings in the escapedStrings array
          updateState={this.updateState}
          generateDisplayData={this.generateDisplayData}
          handleClearing={this.handleClearing}
          keepLimits={this.keepDepthWithinLimits}
        />
        {!!escapedStrings.length && (
          <Display
            escapedStrings={escapedStrings}
            mode={displayMode}
            tone={displayTone}
          />
        )}
      </>
    );
  }
}
