export default function generateStrings(depth = 0, useQuotes = false, initialChar) {
    // Initialize array of strings with first value that will later be iteratively escaped
    // Take into account whether user wants original value and subsequent escaped strings to be embedded in quotes or not
    const strings = useQuotes ? [`"${initialChar}"`] : [`${initialChar}`];

    // Below loop iterates over the users desire depth of escaping - with each loop, the last string of the strings array gets escaped and then pushed to the next index of the array.
    for (let i = 0; i < depth; i++) {
      const string = strings[i];

      // Below code iterates over each character in the last string in the array
      // a) if the character is <, & or " , they are escaped
      // b) all other characters are left unchanged
      // Iteration is done by first creating an empty string (or a single quotation mark, depending on the useQuotes value) and then concatenating subsequent characters, escaped or not depending on the case

      let nextString = '';

      // spreading a string is a simple way of turning it into an array - although it's not the most efficient solution, for a basic need it's sufficient
      [...string].forEach((char) => {
        switch (char) {
          case "<":
            nextString += "&lt;";
            break;          
            case ">":
            nextString += "&gt;";
            break;
          case "&":
            nextString += "&amp;";
            break;
          case '"':
            nextString += "&quot;";
            break;
          default:
            nextString += char;
        }
      });

      // Add a quote to the end if useQuotes is true
      if (useQuotes) {
        nextString = '"' + nextString + '"';
      }

      // Push new string to the strings array. It's now the last string and will be the subject of the next loop (if it's triggered)
      strings.push(nextString);
    }

    return strings;
  };