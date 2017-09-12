'use strict';

window.onload = function() {
    let fileBtn = document.querySelector('.file__save');
    let inputFile = document.querySelector('.file__input');
    let fileExten = document.querySelector('.file__exten');
    let fileIcon = document.querySelector('.file__exten-icon');
    let fileText = document.querySelector('.file__exten-text');
    let fileError = document.querySelector('.file__error');


    fileBtn.addEventListener( 'click', function () {
        inputFile.click();
    });
    inputFile.addEventListener('change', function () {
        let exten = this.value.split('.').pop();

        if(exten === 'txt' || exten === 'html' || exten === 'xml') {
            fileError.classList.remove('file__error--active');
            fileExten.classList.add('file__exten--active');
            fileText.innerText = 'Разрешение: ' + exten;
            fileIcon.classList.add('file__exten-icon--' + exten);

        }

        else {
            fileExten.classList.remove('file__exten--active');
            fileError.classList.add('file__error--active');
        }
    });
};