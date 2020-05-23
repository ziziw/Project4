let game;

const startBtn = document.querySelector('#btn__reset');
const keySection = document.querySelector('#qwerty');
const phraseUl = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');
const images = document.querySelectorAll('.tries img');

startBtn.addEventListener('click', () => {

  while(phraseUl.firstChild){
    phraseUl.removeChild(phraseUl.lastChild);
  }

  keys.forEach(key => {
    key.disabled = false;
    key.className = 'key';
  });

  images.forEach(image => {
    image.src = 'images/liveHeart.png';
  });

  game = new Game;
  game.startGame();

  keySection.addEventListener('click', (event) => {
    if (event.target.className === 'key'){
      game.handleInteraction(event.target);
    }
  });


});
