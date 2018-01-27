let popupObj = function() {
    this.activeModal = false;
    this.modelOpen = false;
    let _this = this;

    document.addEventListener('click', function(e) {
        if(_this.modelOpen) {
            _this.closePopup(e);
        }
    });

    this.clickBtn = function() {
        let _this = this;
        let btn = document.querySelectorAll('.start-modal-btn');
        for(let i=0; i < btn.length; i++) {
            btn[i].addEventListener('click', function() {
                let popupId = this.getAttribute('data-modalId');
                _this.showPopup(popupId);
            })
        }
    };

    this.showPopup = function(id) {
        let popupWind = document.getElementById(id);
        this.activeModal = popupWind;

        popupWind.classList.remove('modal--hide');
        popupWind.classList.add('modal--active');

        let bgBlock = document.createElement('div');
        bgBlock.classList.add('modal__bg');
        popupWind.insertBefore(bgBlock, popupWind.firstChild);

        this.modelOpen = true;
    };

    this.closePopup = function(even) {
        let _this = this;

        let clickBlock = even.target;
        let isModalWindow = false;

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
    let popup = new popupObj();
    popup.init();
};
