// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let v, voices;

  setTimeout(() => {
    voices = synth.getVoices();
    console.log(voices);

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name;
      option.value = voices[i].name;
      voiceSelect.appendChild(option);
    }
  }, 50);

  voiceSelect.addEventListener('change', (event) => {
    v = event.target.value;
  });

  document.querySelector('button').addEventListener('click', () => {
    const utter = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === v) {
        utter.voice = voices[i];
      }
    }

    synth.speak(utter);

    setInterval(() => {
      if (synth.speaking) {
        document.querySelector('img').src = 'assets/images/smiling-open.png';
      } else {
        document.querySelector('img').src = 'assets/images/smiling.png';
      }
    }, 50);
  });
  
} 