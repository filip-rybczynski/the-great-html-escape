export default function generateProse(firstString, secondString, phrases) {
  let sentence = (
    <span>
      {phrases[0]} <code >{firstString}</code>{" "}
      {phrases[1]} <code >{secondString}</code>
      {phrases.length === 3 ? phrases[2] : null}
    </span>
  );
  return sentence;
}
