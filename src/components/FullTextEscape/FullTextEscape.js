import React from "react";
import generateSentence from "../../functions/generateSentence";
import textContent from "../../assets/text-content";
import "./full-text-escape.scss";

function FullTextEscape ({ escapedStrings, tone }) {

    const [firstStr, secondStr, ...otherStr] = escapedStrings;

    const {
      [tone]: { beginning, middle, end },
    } = textContent;

    return (
      <p className="display-prose">
        {/* Text start */}
        {generateSentence(firstStr, secondStr, beginning)}
        {/* Text middle - skipped if there are only two escaped strings*/}
        {otherStr.length &&
          [secondStr, ...otherStr].map(
            (string, i, arr) =>
              i < arr.length - 1 &&
              generateSentence(string, arr[i + 1], middle[i % middle.length])
          )}
        {/* Text end */}
        {end}
      </p>
    );
  
}

export default FullTextEscape;
