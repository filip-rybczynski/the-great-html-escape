export default function generateSentence(firstString, secondString, phrases, key = '') {
  let sentence = (
    <span key={key}>
      {phrases[0]} <code >{firstString}</code>
      {phrases[1]} <code >{secondString}</code>
      {/* Most phrases have two parts, but some have three */}
      {phrases[2]} 
    </span>
  );
  return sentence;
}