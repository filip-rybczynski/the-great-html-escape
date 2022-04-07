export default function createSentence(firstString, secondString, phrases) {
  console.log(firstString, secondString, phrases);
  let sentence = (
    <span>
      {phrases[0]} <code >{firstString}</code>{" "}
      {phrases[1]} <code >{secondString}</code>
      {phrases.length === 3 ? phrases[2] : null}
    </span>
  );
  return sentence;
}
