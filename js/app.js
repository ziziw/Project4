const startBtn = document.querySelector('#btn__reset');
const keySection = document.querySelector('#qwerty');
const phraseUl = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');
const images = document.querySelectorAll('.tries img');
const overlayDiv = document.querySelector('#overlay');

let game;

startBtn.addEventListener('click', () => {
  startNewGame();
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && overlayDiv.style.display !== 'none'){
    startNewGame();
  }
});

const startNewGame = () => {
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

  document.addEventListener('keyup', (event) => {
    keys.forEach(key => {
      if(key.innerText === event.key && !key.disabled){
        game.handleInteraction(key);
      }
    });
  });
}
