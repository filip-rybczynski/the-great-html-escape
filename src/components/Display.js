import React from "react";
import createSentence from "../functions/createSentence";
import textContent from "../assets/text-content";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Only for testing - useQuotes value will be passed down to here using props later
  quotesOn = false;

  render() {

    const {children, generatorState: {initialChar}} = this.props;
    const {casual: {start, middle, end}} = textContent;

    return (
      <div>
          {/* <ul>
            // Text should only generate when props.children is passed down, since it is the escapedStrings array
            {children && children.map((string) => (
              <li key={string}>{string}</li>
            ))}
          </ul> */}
          {!!children.length && (start[0] + children[0] + start[1] + children[1])}
          {!!children.length && children.map((string, i, children) => {
            if(i === 0 || i === children.length - 1) return
            return createSentence(string, children[i+1], middle[i < middle.length ? i : middle.length % i])
          })}
          {!!children.length && end}

      </div>
    );
  }
}

export default Display;
