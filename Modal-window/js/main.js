var popupObj = function() {
    this.activeModal = false;
    this.modelOpen = false;
    var _this = this;

    document.addEventListener('click', function(e) {
        if(_this.modelOpen) {
            _this.closePopup(e);
        }
    });


    this.clickBtn = function() {
        var _this = this;
        var btn = document.querySelectorAll('.start-modal-btn');
        for(var i=0; i < btn.length; i++) {
            btn[i].addEventListener('click', function() {
                var popupId = this.getAttribute('data-modalId');
                _this.showPopup(popupId);
            })
        }
    };

    this.showPopup = function(id) {
        var popupWind = document.getElementById(id);
        this.activeModal = popupWind;

        popupWind.classList.remove('modal--hide');
        popupWind.classList.add('modal--active');

        var bgBlock = document.createElement('div');
        bgBlock.classList.add('modal__bg');
        popupWind.insertBefore(bgBlock, popupWind.firstChild);

        this.modelOpen = true;
    };

    this.closePopup = function(even) {
        var _this = this;

        var clickBlock = even.target;
        var isModalWindow = false;

        while (clickBlock.tagName !== 'HTML' ) {

            if(clickBlock.classList.contains("modal__window")) {
                isModalWindow = true;
            }
            clickBlock = clickBlock.parentElement;
        }

        if(isModalWindow) {
            _this.activeModal.classList.add('modal--hide');
            _this.activeModal.classList.remove('modal--active');

            _this.modelOpen = false;
        }
    };

    this.init = function() {
        this.clickBtn();
    }
};


window.onload = function() {
    var popup = new popupObj();
    popup.init();
};