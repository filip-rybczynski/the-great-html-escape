import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { depth, useQuotes, tone } = this.props.generatorState;
    return (
      <div>
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
            <option>Casual</option>
            <option>Funny guy</option>
            <option>Despairing</option>
            <option>Pissed</option>
          </select>
        </label>
        <button type="button"> Generate</button>
      </div>
    );
  }
}

export default Options;
