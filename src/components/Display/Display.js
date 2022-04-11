import React from "react";
import "./display.scss";
import generateList from "../../functions/generateList";
import FullTextEscape from "../FullTextEscape/FullTextEscape";

function Display ({escapedStrings, mode, tone}) {

    return (
      <div className="display-container">
        {mode === "list" ? (
          generateList(escapedStrings)
        ) : (
          <FullTextEscape escapedStrings={escapedStrings} tone={tone} />
        )}
      </div>
    );
}

export default Display;
