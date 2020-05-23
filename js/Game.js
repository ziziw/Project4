//https://drive.google.com/file/d/1r1oBLk7w5KXnQRBuPmVo0EDNeY_I7EjW/view
class Game {
  constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  get missed(){
    return this._missed;
  }

  set missed(missed){
    this._missed = missed;
  }

  get phrases(){
    return this._phrases;
  }

  set phrases(phrases){
    this._phrases = phrases;
  }

  get activePhrase(){
    return this._activePhrase;
  }

  set activePhrase(activePhrase){
    this._activePhrase = activePhrase;
  }

  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases(){
    let phrasesArray = [5];
    phrasesArray[0] = new Phrase("Life was like a box of chocolates");
    phrasesArray[1] = new Phrase("There is no trying");
    phrasesArray[2] = new Phrase("May the force be with you");
    phrasesArray[3] = new Phrase("You have to see the matrix for yourself");
    phrasesArray[4] = new Phrase("You talking to me");

    return phrasesArray;
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
    const randomNbr = Math.trunc(Math.random()*5);

    return this.phrases[randomNbr];
  }

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame(){
    const overlayDiv = document.querySelector('#overlay');
    overlayDiv.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't won
  */
  checkForWin(){
    const hideLis = document.querySelectorAll('.hide');

    //console.log(hideLis.length === 0);
    return hideLis.length === 0;

  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife(){
    const triesImgs = document.querySelectorAll('.tries img');


    triesImgs[this.missed].src = "images/lostHeart.png";
    this.missed += 1;

    if(this.missed === 5){
      this.gameOver(false);
    }
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon){
    const overlayDiv = document.querySelector('#overlay');
    const gameOverMsg = document.querySelector('#game-over-message');
    overlayDiv.style.display = '';
    if (gameWon){
      gameOverMsg.innerText = "Great job!";
      overlayDiv.className = "win";
    } else {
      gameOverMsg.innerText = "Sorry, better luck next time!"
      overlayDiv.className = "lose";
    }
  };

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button){
    const currLetter = button.innerText;
    button.disabled = true;

    if(this.activePhrase.checkLetter(currLetter)){
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(currLetter);
      if(this.checkForWin()){
        this.gameOver(this.checkForWin());
      }
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }
}
