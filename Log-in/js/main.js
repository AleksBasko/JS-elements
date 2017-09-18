
'use strict';

window.onload = function() {
    let Register = new LogObj('registr-form');
    Register.init();
};

let LogObj = function(id) {
    this.form = document.getElementById(id);
    this.inputList = this.form.querySelectorAll('.registr-form__input');
    this.formBtn = this.form.querySelector('.registr-form__btn');
    this.inputCount = 0;
    this.passActive = false;

    this.inputBlur = function() {
        let _this = this;
      let inputList = this.inputList;

      for(let i = 0; i < inputList.length; i++) {
          inputList[i].addEventListener('focus', function() {
              let block = this;
              while (!block.classList.contains('registr-form__row')){
                  block = block.parentNode;
              }

              block.classList.add('input-active');

          });
          inputList[i].addEventListener('blur', function() {
              _this.empty();
          });
      }
    };

    this.empty = function() {
        let inputList = this.inputList;

        for(let i = 0; i < inputList.length; i++) {
            if(inputList[i].value) {
                this.inputCount++;
            }
            else {
                let block = inputList[i];

                while (!block.classList.contains('registr-form__row')){
                    block = block.parentNode;
                }

                block.classList.remove('input-active');
            }
        }

        if(this.inputCount === inputList.length) {
            this.formBtn.removeAttribute('disabled');
        }
        else {
            this.inputCount = 0;
            this.formBtn.setAttribute("disabled", "disabled");
        }
    };

    this.showPass = function() {
        let _this = this;
        let passBtn = this.form.querySelector('.registr-form__password-icon');

        passBtn.addEventListener('click', function(){

            let passParent = this;

            while (!passParent.classList.contains('registr-form__password-wrap')){
                passParent = passParent.parentNode;
            }

            let passInput = passParent.querySelector('.registr-form__input');

            if(_this.passActive) {
                passInput.setAttribute('type','password');
                this.classList.remove('registr-form__password-icon--active');
                _this.passActive = false;
            }
            else {
                passInput.setAttribute('type','text');
                this.classList.add('registr-form__password-icon--active');
                _this.passActive = true;
            }

        });
    };

    this.init = function() {
        this.inputBlur();
        this.showPass();
    }
};