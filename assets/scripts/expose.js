// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const sound = document.querySelector('audio');
  let pic; 
  const confetti = new JSConfetti;

  document.getElementById('horn-select').addEventListener('change', (event) => {
    const firstImg = document.querySelector('img');
    firstImg.src = `assets/images/${event.target.value}.svg`;
    sound.src = `assets/audio/${event.target.value}.mp3`;
    pic = event.target.value;
  });

  document.getElementById('volume').addEventListener('change', (event) => {
    const si = document.querySelector("div > img");
    if (event.target.value == 0) {
      si.src = 'assets/icons/volume-level-0.svg';
    } else if (event.target.value < 33) {
      si.src = 'assets/icons/volume-level-1.svg';
    } else if (event.target.value < 67) {
      si.src = 'assets/icons/volume-level-2.svg';
    } else {
      si.src = 'assets/icons/volume-level-3.svg';
    }
    sound.volume = event.target.value/100;
  });

  document.querySelector('button').addEventListener('click', () => {
    sound.play();
    if (pic == 'party-horn') {
      confetti.addConfetti();
    }
  });
  
}