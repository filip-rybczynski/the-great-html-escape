import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Only for testing - useQuotes value will be passed down to here using props later
  quotesOn = false

  generateEscapedStrings = (depth = 0) => {
    const strings = this.quotesOn
    ? ['"<"']
    : ['<'];
    
   

    for (let i = 0; i < depth; i++) {
      const string = strings[i];
      const nextString = this.quotesOn
      ? ['"']
      : [];


      [...string].forEach((char) => {
 
        switch (char) {
          case '<':
            nextString.push('&lt;');
            break;
          case '&':
            nextString.push('&amp;');
            break;
          case '"':
            nextString.push('&quot;');
            break;
            default:
                nextString.push(char);
        }

      });

      if(this.quotesOn) {
        nextString.push('"')
    }

      strings.push(nextString.join(""));



    }

    return strings;
  };

  render() {

    const test = 'Test';

    return (
      <div>
        <p>

          {/* Alright, let me tell you about escaping (while async loads)

HTML escaping is a bit funny, but not much funnier than writing how to do it. Say I want to use the symbol < in a sentence. That's quite easy to do: I just write "&lt;". However, in order to write "&lt;", I need to write "&quot;&amp;lt;&quot;". Then in order to write that, I need to

And on and on it goes... */}
        </p>
        <button>Clear</button>
      </div>
    );
  }
}

export default Display;
