import React from "react";
import "./options.scss";
import Button from "./../Button/Button.js";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { depth, useQuotes, tone, mode, initialChar, display } =
      this.props.generatorState;
      
    return (
      <form className="options">
        <label>
          What character do you want to start with?
          <select
            name="initialChar"
            value={initialChar}
            onChange={this.props.updateState}
          >
            <option value="<">&lt;</option>
            <option value=">">&gt;</option>
            <option value="&amp;">&amp;</option>
          </select>
        </label>
        <label>
          How deep do you want to escape?
          <input
            type="number"
            name="depth"
            value={depth}
            // TODO - might change min to 0 later on, but need ideas for text-content.js
            min="2"
            max="100"
            aria-label="Choose number of escape levels"
            onChange={this.props.updateState}
          />
        </label>
        <label>
          Include quotes?
          <input
            type="checkbox"
            name="useQuotes"
            checked={useQuotes}
            aria-label="Do you want to include quotes?"
            onChange={this.props.updateState}
          />
        </label>
        <label>
          Select mode
          <select
            name="mode"
            value={mode}
            aria-label="What mode do you want"
            onChange={this.props.updateState}
          >
            <option value="prose">Prose</option>
            <option value="list">List</option>
          </select>
        </label>
        <label>
          Select preferred tone
          <select
            name="tone"
            value={tone}
            aria-label="What tone do you want the escaping to be narrated?"
            onChange={this.props.updateState}
            disabled={mode === "list"}
          >
            <option value="casual">Casual</option>
            {/* <option value="funny">Funny</option>
            <option value="despairing">Despairing</option> */}
            <option value="pissed">Pissed</option>
          </select>
        </label>
        {/* I don't think I needed to make buttons components, but it was good practice */}
        {/* type="submit" is default for <button>*/}
        <Button
          onClick={this.props.generateEscapedStrings}
          content="Generate"
        />
        {/* TODO: below button should only generate when text is generated and displayed */}
        <Button
          type="button"
          onClick={this.props.handleClearing}
          disabled={!display}
          mirrored
          content="Clear"
        />
      </form>
    );
  }
}

export default Options;
