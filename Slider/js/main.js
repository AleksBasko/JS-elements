
window.onload = function() {
  let CustomSlider = new Slider('sm-slider');
  CustomSlider.init();
};

let Slider = function(id) {
    this.block = document.getElementById(id);
    this.sliderWrap = document.createElement('div');
    this.activeSlide = 0;
    this.countSlider = 0;
    this.activeDot = 0;
    this.btnNext = document.createElement('div');
    this.btnPrev = document.createElement('div');

    this.makeSlider = function() {
        let imgList = this.block.getElementsByTagName('img');

        this.sliderWrap.classList.add('sm-slider__wrap');


        for( let i = 0; i < imgList.length; i++ ) {
            let sliderItem = document.createElement('div');
            sliderItem.classList.add('sm-slider__item');
            sliderItem.style.minWidth = this.mainWidth + 'px';

            sliderItem.appendChild(imgList[i]);
            this.sliderWrap.appendChild(sliderItem);
        }
        this.countSlider = imgList.length;
        this.btnNext.classList.add('sm-slider__btn', 'sm-slider__btn--next');
        this.btnPrev.classList.add('sm-slider__btn', 'sm-slider__btn--prev');
        this.sliderWrap.style.width = this.mainWidth * imgList.length + 'px';

        this.block.appendChild(this.sliderWrap);
        this.block.appendChild(this.btnNext);
        this.block.appendChild(this.btnPrev);
        this.createDott(imgList.length);

    };
    this.width = function() {
        this.mainWidth = this.block.offsetWidth;
    };

    this.clickButton = function() {
        let _this = this;
        this.btnNext.addEventListener('click', function() {
            if(_this.activeSlide < _this.countSlider) {
                _this.activeSlide++;
                _this.slide(_this.activeSlide);
                _this.slideDot(_this.activeSlide);
            }
        });
        this.btnPrev.addEventListener('click', function() {
            if(_this.activeSlide > 0) {
                _this.activeSlide--;
                _this.slide(_this.activeSlide);
                _this.slideDot(_this.activeSlide);

            }
        });
    };

    this.createDott = function(count) {
        let _this = this;
        let dotBlock = document.createElement('div');
        dotBlock.classList.add('sm-dots');

        for(let i = 0; i < count; i ++) {
            let dot = document.createElement('div');
            dot.classList.add('sm-dots__item');
            dot.dataset.count = i;
            dot.addEventListener('click', function() {
                _this.slide(i);
                _this.slideDot(i);
            });

            if(i === 0) {
                dot.classList.add('sm-dots__item--active');
            }
            dotBlock.appendChild(dot);
        }
        this.block.appendChild(dotBlock);
    };

    // this.clickDot =  function(int) {
    //     this.slide()
    // };

    this.slide = function(count) {
        this.sliderWrap.style.transform = 'translateX(' + this.mainWidth * count * (-1) + 'px' + ')';
    };

    this.slideDot = function(int) {
        let _this = this;
        let dotList = document.querySelectorAll('.sm-dots__item');

        if(_this.activeDot !== int) {
            dotList[int].classList.add('sm-dots__item--active');
            dotList[_this.activeDot].classList.remove('sm-dots__item--active');
            _this.activeDot = int;
        }
    };

    this.init = function() {
        this.width();
        this.makeSlider();
        this.clickButton();
    }
};