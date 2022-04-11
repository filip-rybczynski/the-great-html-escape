import React from "react";
import generateSentence from "../../functions/generateSentence";
import textContent from "../../assets/text-content";
import "./full-text-escape.scss";

function FullTextEscape ({ escapedStrings, tone }) {

    // Available prose texts are divided into three categories - beginning (first sentence), end (last sentence) and middle (the rest)
    const {
      [tone]: { beginning, middle, end },
    } = textContent;

    return (
      <p className="display-prose">
        {
          escapedStrings.map((string, i, arr) => {
            
            if (i === arr.length - 1) return end;
           
            const prosePart = i === 0
                ? beginning
                : middle[(i - 1) % middle.length]; // the entire "middle" array, one by one, starting from 0 and repeating once the end is reached
            
            return (
                generateSentence(string, arr[i + 1], prosePart, i)
              ); // This will return a <span> element and change of order is not expected, so i is passed to the function as a key
        })
        }
      </p>
    );
  
}

export default FullTextEscape;
