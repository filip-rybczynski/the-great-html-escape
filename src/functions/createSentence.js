export default function createSentence(firstString, secondString, phrases) {
    console.log(firstString,secondString, phrases)
    let sentence = (<span>{phrases[0]} <code style={{color: "red"}}>{firstString}</code> {phrases[1]} <code style={{color:  "red"}}>{secondString}</code>{phrases.length === 3 ? phrases[2] : null}</span>);
    console.log(sentence);
    return sentence
}