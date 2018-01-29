'use strict';

window.onload = function () {
    let firstTabs = new CreateTabs( 'tab-first' );
    let secondTabs = new CreateTabs( 'tab-second' );
    firstTabs.init();
    secondTabs.init();

};

const TAB_BTN = 'tab-btn';
const TAB_CONT = 'tab-content';
const TAB_BTN_ACT = 'tab-btn--active';
const TAB_CONT_ACT = 'tab-content--active';



let CreateTabs = function(id) {
    if ( typeof id !== 'string' ) {
        throw new TypeError( id + 'is not a String' );
    }

    this.block = document.getElementById(id);
    this.tabBtn = this.block.querySelectorAll('.' + TAB_BTN);
    this.tabContent = this.block.querySelectorAll('.' + TAB_CONT);
};

CreateTabs.prototype.init = function () {
    this.searchActive();
    this.changeTab();
};

CreateTabs.prototype.searchActive = function () {
    let btnArr = this.tabBtn;
    let contArr = this.tabContent;

    for (let i=0; i < btnArr.length; i++) {
        if ( btnArr[i].classList.contains( TAB_BTN_ACT ) ){
            this.activeCount = i;
        }
    }
    for (let i=0; i < contArr.length; i++) {
        console.log(contArr[i].offsetHeight);
        if(i === this.activeCount) {
            contArr[i].classList.add( TAB_CONT_ACT );
        }
    }
};

CreateTabs.prototype.changeTab = function () {
    let _this = this;
    let btnArr = this.tabBtn;
    let contArr = this.tabContent;

    for (let i=0; i < btnArr.length; i++) {
        btnArr[i].addEventListener( 'click', function () {

            if ( _this.activeCount !== i ) {
                btnArr[_this.activeCount].classList.remove( TAB_BTN_ACT );
                this.classList.add( TAB_BTN_ACT );


                for ( let j = 0; j < contArr.length; j++ ) {
                    if(j === _this.activeCount) {
                        contArr[j].classList.remove( TAB_CONT_ACT );
                    }
                    if ( j === i ) {
                        contArr[j].classList.add( TAB_CONT_ACT );
                    }
                }
                _this.activeCount = i;
            }
        } );
    }
};