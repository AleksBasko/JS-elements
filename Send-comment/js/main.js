// (function(){
//     console.log('2423423');
//
//     showEmoji();
//     commentSubmit();
// }());
//
//
// function commentSubmit() {
//
//     $(".comment-textarea").on("keydown", function(e) {
//
//         if (e.keyCode === 13) {
//             e.preventDefault();
//
//             if (e.altKey === true) {
//                 let contentText = $(this).html();
//                 $(this).html(contentText + "<br><br>");
//
//             } else {
//                 let contentValue = $(this).html();
//                 $(this).parents('.form-comment').append('<textarea class="" value="'+contentValue+'" id="valueToSend">');
//                 // $(this).parents('form').submit();
//                 console.log($(contentValue));
//             }
//         }
//     });
// }
//
// function showEmoji() {
//     $('.comment-smile__block--btn').click(function() {
//         $(this).addClass('comment-smile__block--active');
//
//     });
//     $('.comment-smile').click(function() {
//         $(this).clone().appendTo( ".comment-textarea" );
//         console.log($(this));
//     });
// }

let SendComment = function () {
    this.form = document.querySelector('.comment');
    this.chat = document.querySelector('.chat');
    this.count = false;

    this.submitComment = function () {
        let _this = this;
        let submitBtn = document.querySelector('.comment__btn');

        submitBtn.addEventListener('click', function () {
            let textSend = document.querySelector('.comment__textarea').innerText;
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
        this.submitComment();
    };
};

window.onload = function () {

    let comment = new SendComment();
    comment.init();
};