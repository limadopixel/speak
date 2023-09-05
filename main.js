const txtfala = document.getElementById("txtOutput");

function textToSpeech(){
    const synth = speechSynthesis;
    const dadosVoz = txtfala.value;
    const utterthis = new SpeechSynthesisUtterance(dadosVoz);
    synth.speak(utterthis);
}