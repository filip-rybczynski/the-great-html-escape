import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Only for testing - useQuotes value will be passed down to here using props later
  quotesOn = false;

  render() {

    const {children} = this.props;

    return (
      <div>
          <ul>
            {/*Text should only generate when props.children is passed down, since it is the escapedStrings array*/}
            {children && children.map((string) => (
              <li key={string}>{string}</li>
            ))}
          </ul>

        <button type="button" onClick={this.props.handleClearing}>Clear</button>
      </div>
    );
  }
}

export default Display;
