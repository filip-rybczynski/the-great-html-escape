import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Only for testing - useQuotes value will be passed down to here using props later
  quotesOn = false;

  render() {
    // this.generateEscapedStrings(depth, useQuotes); // Previously the function was declared here

    return (
      <div>

          <ul>
            {this.props.children.map((string) => (
              <li key={string}>{string}</li>
            ))}
          </ul>

        <button>Clear</button>
      </div>
    );
  }
}

export default Display;
