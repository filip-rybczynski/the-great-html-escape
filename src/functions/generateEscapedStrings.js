export default function generateEscapedStrings(depth = 0, useQuotes = false) {
    const strings = useQuotes ? ['"<"'] : ["<"];

    for (let i = 0; i < depth; i++) {
      const string = strings[i];
      const nextString = useQuotes ? ['"'] : [];

      [...string].forEach((char) => {
        switch (char) {
          case "<":
            nextString.push("&lt;");
            break;
          case "&":
            nextString.push("&amp;");
            break;
          case '"':
            nextString.push("&quot;");
            break;
          default:
            nextString.push(char);
        }
      });

      if (useQuotes) {
        nextString.push('"');
      }

      strings.push(nextString.join(""));
    }
    
    // TODO: remove the below
    console.log(strings);

    return strings;
  };