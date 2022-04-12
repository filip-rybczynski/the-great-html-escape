import React from "react";
import generateSentence from "../../functions/generateSentence";
import textContent from "../../assets/text-content";
import Button from "../Button/Button";
import "./full-text-escape.scss";

function FullTextEscape({ escapedStrings, tone }) {
  const textRef = React.createRef();

  const copyToClipboard = () => {
    const copiedText = textRef.current.textContent;
    navigator.clipboard.writeText(copiedText);
  };

  // Available prose texts are divided into three categories - beginning (first sentence), end (last sentence) and middle (the rest)
  const {
    [tone]: { beginning, middle, end },
  } = textContent;

  return (
    <div className="display-prose">
      <p className="display-prose__text" ref={textRef}>
        {escapedStrings.map((string, i, arr) => {
          if (i === arr.length - 1) return end;

          const prosePart =
            i === 0 ? beginning : middle[(i - 1) % middle.length]; // the entire "middle" array, one by one, starting from 0 and repeating once the end is reached

          return generateSentence(string, arr[i + 1], prosePart, i); // This will return a <span> element and change of order is not expected, so i is passed to the function as a key
        })}
      </p>
      <Button content="Copy" onClick={copyToClipboard}/>
    </ div>
  );
}

export default FullTextEscape;
