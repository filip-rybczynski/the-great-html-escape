export default function generateList(escapedStrings) {
  return (
    <ul>
      {escapedStrings.map((string, i, arr) => (
        <li key={i}> 
        {/* order of elements does not change so OK to use index as key */}
          <code>{string}</code>
          {/* Adds tag if it's not the last list item (slightly different for the first item) */}
          {i < arr.length - 1 && i > 0 && ", which"}
          {i < arr.length - 1 && " should be escaped to"}
        </li>
      ))}
    </ul>
  );
}
