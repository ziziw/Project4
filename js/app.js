let game;

const startBtn = document.querySelector('#btn__reset');
const keySection = document.querySelector('#qwerty');

startBtn.addEventListener('click', () => {
  game = new Game;
  game.startGame();

  keySection.addEventListener('click', (event) => {
    if (event.target.className === 'key'){


      const currLetter = event.target.innerText;

      game.getRandomPhrase().showMatchedLetter(currLetter);
      game.checkForWin();
      game.removeLife();
    }
  });
});
