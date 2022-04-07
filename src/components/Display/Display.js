import React from "react";
import createSentence from "../../functions/createSentence";
import textContent from "../../assets/text-content";
import './display.scss';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Only for testing - useQuotes value will be passed down to here using props later
  quotesOn = false;

  render() {
    const { escapedStrings } = this.props;

    const [firstStr, ...otherStr] = escapedStrings;

    const {
      casual: { start, middle, end },
    } = textContent;

    return (
        <p className="display-container">
        {/* <ul>
            // Text should only generate when escapedStrings is passed down
            {escapedStrings && escapedStrings.map((string) => (
              <li key={string}>{string}</li>
            ))}
          </ul> */}

        {/* Text start */}
        {!!escapedStrings.length && createSentence(firstStr, otherStr[0], start)}
        {/* Text middle - skipped if there are only two escaped strings*/}
        {!!otherStr.length &&
          otherStr.map(
            (string, i, arr) =>
              i < arr.length - 1 &&
              createSentence(
                string,
                arr[i + 1],
                middle[i % middle.length]
              )
          )}
        {/* Text end */}
        {!!escapedStrings.length && end}
        </p>

    );
  }
}

export default Display;
