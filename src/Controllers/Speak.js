const Speak = (str) => {
    let utterance = new SpeechSynthesisUtterance(str);
    speechSynthesis.speak(utterance);
    console.log("clicked");
}
// This is a simplified Speech Synthesizer. One that provides an interface 
// to customize volume, rate, pitch and volume will be generated here
export default Speak