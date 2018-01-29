'use strict';

let weInput = document.querySelectorAll('.word-ending__input');

for ( let i=0; i < weInput.length; i++ ) {
  weInput[i].addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;

    let keySymbol = String.fromCharCode(keyCode);
    let rep = /[-\.;":'a-zA-Zа-яА-Я]/;
    if (rep.test(keySymbol)) {
      console.log('ffff');
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

// $(".word-ending__input").keydown(function (e) {
//     let keyCode = e.keyCode;
//     let keySymbol = String.fromCharCode(keyCode);
//     let rep = /[-\.;":'a-zA-Zа-яА-Я]/;
//     if (rep.test(keySymbol)) {
//         return false;
//     }
//     else {
//         // if()
//         //
//         // $inputRange.val($(this).val()).change();
//         // console.log($(this).val());
//         setTimeout(function() {
//             $(this).val();
//             console.log('after ' + $(this).val());
//             let $inputRange = $(this).parents('.doctor-filter-settings__input-box').find('input[type="range"]');
//             $inputRange.val($(this).val()).change();
//         }, 20);
//
//         if( $(this).hasClass('doctor-filter-settings__input-years') ) {
//             let _this = $(this);
//             setTimeout(function() {
//                 wordEnding(_this);
//             }, 20);
//         }
//     }
// });

function wordEnding(block) {
    let labelBlock = document.querySelector('.word-ending__label');
    let arr = block;
    let lastNumber = parseInt(arr[arr.length-1]);
    // let labelBlock = block.parents('.doctor-filter-settings__input-box').find('.doctor-filter-settings__val');
    let labelText = 'лет';
    if ( 0 < lastNumber && lastNumber < 2 ) {
        labelText = 'год';
    }
    else if ( 1 < lastNumber && lastNumber < 5 ) {
        labelText = 'года';
    }

    labelBlock.innerHTML = labelText;
}
