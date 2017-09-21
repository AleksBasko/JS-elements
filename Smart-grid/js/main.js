
'use strict';
$(document).ready(function () {
    function dictMoving() {
        var item = $('.dict-item__wrapp'),
            itemWidth = item.innerWidth(),
            itemHeight = item.innerHeight(),
            itemLength = item.length,
            rowLength = itemLength / 3,
            containerWidth = $('.dictionary-row').width(),
            subBlock = $('.dict-subblock__wrapp');

        $(subBlock).width(containerWidth - itemWidth);
        $(subBlock).css('left', itemWidth);
        $(subBlock).css('min-height', 4.25 * itemLength + 'rem');
        var rowOffset = 0;
        for (var i = 0; i <= rowLength; i++) {
            for (var j = 0; j <= 2; j++) {
                $(item.eq(rowOffset)).css('top', itemHeight * i);
                $(item.eq(rowOffset)).css('left', itemWidth * j);
                rowOffset++;
            }
        }
    }

    dictMoving();
    function dictMovingTime() {
        var item = $('.dict-item__wrapp');
        $(item).each(function () {
            $(this).addClass('dict-transition');
        });
    }

    setTimeout(function () {
        dictMovingTime();
    }, 10);
    $('.dict-item').on('click', function () {
        $(this).addClass('active-dict');
        var item = $('.dict-item__wrapp'),
            itemHeight = item.innerHeight(),
            subBlock = $('.dict-subblock__wrapp'),
            subOpacity = $('.dict-subblock');
        $(item).each(function () {
            var count = $(this).index();
            $(this).css('top', 4.25 * count + 'rem');
            $(this).css('left', 0);
            $(this).addClass('dict-aside');
        });
        setTimeout(function(){
            $(subBlock).addClass('show-dict');
        }, 2000);
        setTimeout(function () {
            $(subOpacity).addClass('sub-opacity');
        }, 10);
    });
    function itemHeigh() {
        var maxHeight = 0;
        var item = $('.dict-item__wrapp');
        $(item).each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $(item).height(maxHeight);
    };
    itemHeigh();
});

window.onload = function() {

    let NewGrid = new SmartGrid('smartGrid');
    NewGrid.init();

}


let SmartGrid = function(id) {
    let itemClass = '.smart-grid__item';

    this.block = document.getElementById(id);
    this.containerWidth = this.block.clientWidth;
    this.items = this.block.querySelectorAll(itemClass);
    this.itemHeight = this.items[0].clientHeight;


    this.createGrid = function(){

        let _this = this;
        let rowItems = Math.ceil(this.items.length/3);

        let itemWidth = Math.floor(this.containerWidth/3);

        let j = 0;
        let itemNumber = 0;

        while(j < rowItems) {
            for(let i=0; i < 3; i++) {
                let leftPosition = itemWidth * i;
                let topPosition = this.itemHeight * j;

                this.items[itemNumber].style.width = itemWidth + 'px';
                this.items[itemNumber].style.left = leftPosition + 'px';
                this.items[itemNumber].style.top = topPosition + 'px';

                this.items[itemNumber].addEventListener('click', function(){
                    _this.transform();
                });
                itemNumber++;
            }
            j++;
        }
    };

    this.transform = function() {
        for(let i=0; i < this.items.length; i++) {
            this.items[i].style.left = 0 + 'px';
            this.items[i].style.top = this.itemHeight * i + 'px';

        }
    };

    this .init = function() {
        this.createGrid();
    }
};