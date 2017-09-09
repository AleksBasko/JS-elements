'use strict';

function showSmile(_this, block) {
    if(_this.classList.contains('comment__smile-btn--active')) {
        _this.classList.remove('comment__smile-btn--active');
        block.classList.remove('smile-block--active');
    }
    else {
        _this.classList.add('comment__smile-btn--active');
        block.classList.add('smile-block--active');
    }
}

let SendComment = function () {
    this.chat = document.querySelector('.chat');
    this.form = document.querySelector('.comment');
    this.customText = document.querySelector('.comment__textarea')
    this.count = false;

    this.submitComment = function () {
        let _this = this;
        let submitBtn = document.querySelector('.comment__btn');

        submitBtn.addEventListener('click', function () {
            let textSend = _this.customText.innerText;
            let blockSend = document.createElement('textarea');

            blockSend.classList.add('visibility-hidden');

            blockSend.value = textSend;
            _this.form.appendChild(blockSend);
            // console.log(textSend);

            _this.sendMessage(blockSend);

            if (_this.count) {
                _this.count = false;
            }
            else {
                _this.count = true;
            }

            blockSend.remove();
            document.querySelector('.comment__textarea').innerText = '';
        })
    };

    this.showMySmile = function() {
        let smileBtn = this.form.querySelector('.comment__smile-btn');

        smileBtn.addEventListener('click', function(){
            if(this.parentNode.classList.contains('comment__smile--active')) {
                this.parentNode.classList.remove('comment__smile--active');
            }
            else {
                this.parentNode.classList.add('comment__smile--active');
            }
        });
    };

    this.addSmile = function() {
       let smile = this.form.querySelectorAll('.smile-block__item');
       for( let item of smile) {
           item.addEventListener('click', function() {
               let smileImg = this.getElementsByTagName('img');
               smileImg.cloneNode();
           })
       }
    };

    this.sendMessage = function (content) {
        let textMessage = content.value;

        let messageBlock = document.createElement('div');
        messageBlock.classList.add('chat__block');
        if (this.count) {
            messageBlock.classList.add('chat__block--odd');
        }

        let messageSpan = document.createElement('span');
        messageSpan.classList.add('chat__comment');

        messageSpan.innerText = textMessage;
        messageBlock.appendChild(messageSpan);

        this.chat.appendChild(messageBlock);
    };

    this.init = function () {
        this.showMySmile();
        this.submitComment();
    };
};

window.onload = function () {

    let comment = new SendComment();
    comment.init();
};