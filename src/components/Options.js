import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { depth, useQuotes, tone } = this.props.generatorState;
    return (
      <form>
        <label>
          How deep do you want to escape?
          <input
            type="number"
            name="depth"
            value={depth}
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
        <button  onClick={this.props.updateEscapedStrings}> Generate</button>
      </form>
    );
  }
}

export default Options;
