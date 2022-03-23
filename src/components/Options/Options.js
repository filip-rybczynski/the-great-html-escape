import React from "react";
import './options.scss';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { depth, useQuotes, tone, initialChar } = this.props.generatorState;
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
            <option value='"'>&quot;</option>
          </select>
        </label>
        <label>
          How deep do you want to escape?
          <input
            type="number"
            name="depth"
            value={depth}
            min="0"
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
          Select preferred tone
          <select
            name="tone"
            value={tone}
            aria-label="What tone do you want the escaping to be narrated?"
            onChange={this.props.updateState}
          >
            <option value="casual">Casual</option>
            <option value="funny">Funny</option>
            <option value="despairing">Despairing</option>
            <option value="pissed">Pissed</option>
          </select>
        </label>
        {/* type="submit" is default for <button>*/}
        <button onClick={this.props.updateEscapedStrings}>Generate</button>
      </form>
    );
  }
}

export default Options;
