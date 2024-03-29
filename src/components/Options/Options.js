import React from "react";
import "./options.scss";
import Button from "./../Button/Button.js";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  guardLimits = () => {
    
  }

  render() {
    const { optionsState: {depth, useQuotes, tone, mode, initialChar, minDepth, maxDepth}, canClear } =
      this.props;
      
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
          How deep do you want to escape (2-50)?
          <input
            type="number"
            name="depth"
            value={depth}
            // TODO - might change min to 0 later on, but need ideas for text-content.js
            min={minDepth}
            max={maxDepth}
            aria-label="Choose number of escape levels"
            onChange={this.props.updateState}
            // To avoid users inputting values from beyond the set range manually
            onBlur={this.props.keepLimits}
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
            <option value="annoyed">Annoyed</option>
            <option value="overReacting">Losing his mind</option>
          </select>
        </label>
        {/* I don't think I needed to make buttons components, but it was good practice */}
        {/* type="submit" is default for <button>*/}
        <Button
          onClick={this.props.generateDisplayData}
          content="Generate"
        />
        <Button
          type="button"
          onClick={this.props.handleClearing}
          disabled={!canClear}
          mirrored
          content="Clear"
        />
      </form>
    );
  }
}

export default Options;
