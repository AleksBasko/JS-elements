'use strict';

let weInput = document.querySelectorAll('.word-ending__input');

for ( let i=0; i < weInput.length; i++ ) {
  weInput[i].addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;

    let keySymbol = String.fromCharCode(keyCode);
    let rep = /[-\.;":'a-zA-Zа-яА-Я]/;
    if (rep.test(keySymbol)) {
        return false;
    }
    else {
    let _this = this;
      setTimeout(function() {
        let value = _this.value;
        wordEnding(value);
      }, 20);
    }
  })
}

function wordEnding(block) {
    let labelBlock = document.querySelector('.word-ending__label');
    let arr = block;
    let lastNumber = parseInt(arr[arr.length-1]);
    let lastButOneNumber = parseInt(arr[arr.length-2]);

    let labelText = 'лет';
    if ( lastButOneNumber !== 1 ) {

      if ( 0 < lastNumber && lastNumber < 2 ) {
          labelText = 'год';
      }
      else if ( 1 < lastNumber && lastNumber < 5 ) {
          labelText = 'года';
      }
    }
    labelBlock.innerHTML = labelText;
}
