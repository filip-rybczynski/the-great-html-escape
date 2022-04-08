import React from "react";
import generateProse from "../../functions/generateProse";
import textContent from "../../assets/text-content";
import "./full-text-escape.scss";

function FullTextEscape ({ escapedStrings, tone }) {

    const [firstStr, ...otherStr] = escapedStrings;

    const {
      [tone]: { beginning, middle, end },
    } = textContent;

    return (
      <p className="display-prose">
        {/* Text start */}
        {!!escapedStrings.length && generateProse(firstStr, otherStr[0], beginning)}
        {/* Text middle - skipped if there are only two escaped strings*/}
        {!!otherStr.length &&
          otherStr.map(
            (string, i, arr) =>
              i < arr.length - 1 &&
              generateProse(string, arr[i + 1], middle[i % middle.length])
          )}
        {/* Text end */}
        {!!escapedStrings.length && end}
      </p>
    );
  
}

export default FullTextEscape;
