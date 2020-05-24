const startBtn = document.querySelector('#btn__reset');
const keySection = document.querySelector('#qwerty');
const phraseUl = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');
const images = document.querySelectorAll('.tries img');
const overlayDiv = document.querySelector('#overlay');

let game;

//click event listener on the start button.
startBtn.addEventListener('click', () => {
  startNewGame();
});

////enter key event listener to start game.
document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && overlayDiv.style.display !== 'none'){
    startNewGame();
  }
});

//start a new game by resetting all to the beginning.
const startNewGame = () => {
  //clear all the list items in the #phrase unordered list.
  while(phraseUl.firstChild){
    phraseUl.removeChild(phraseUl.lastChild);
  }

  //resetting the key buttons.
  keys.forEach(key => {
    key.disabled = false;
    key.className = 'key';
  });

  //resetting the lives images.
  images.forEach(image => {
    image.src = 'images/liveHeart.png';
  });

  game = new Game;
  game.startGame();

  //add click event listener to the key buttons.
  keySection.addEventListener('click', (event) => {
    if (event.target.className === 'key'){
      game.handleInteraction(event.target);
    }
  });

  //add keyup event listener to the key buttons.
  document.addEventListener('keyup', (event) => {
    keys.forEach(key => {
      if(key.innerText === event.key && !key.disabled){
        game.handleInteraction(key);
      }
    });
  });
}
