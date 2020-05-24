class Phrase {
  constructor(phrase){
    this._phrase = phrase;
  }

  get phrase(){
    return this._phrase.toLowerCase();
  }

  //Display phrase on game board
  addPhraseToDisplay(){
    const phraseUl = document.querySelector('#phrase ul');

    for(let i = 0; i < this.phrase.length; i++){
      const letterLi = document.createElement('li');
      const currLetter = this.phrase[i];
      if(currLetter !== ' '){
        letterLi.innerText = this.phrase[i];
        letterLi.classList.add('hide', 'letter', currLetter);
      } else {
        letterLi.innerText = ' ';
        letterLi.classList.add('space');
      }
      phraseUl.appendChild(letterLi);
    }
  };

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){
    for(let i = 0; i < this.phrase.length; i++){
      if (letter === this.phrase[i]){
        return true;
      }
    }
    return false;
  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){
    const phraseLis = document.querySelectorAll('.' + letter);
    phraseLis.forEach(li => {
      if(li.innerText === letter){
        li.classList.remove('hide');
        li.classList.add('show');
      }
    });
  };
}
