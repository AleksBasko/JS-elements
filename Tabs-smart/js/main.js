'use strict';

class contentTabs {
    constructor(classBlock) {
        this.mainBlock = document.querySelector(classBlock);
        this.block = this.mainBlock.querySelectorAll('.tab-block');
        this.activeItem = 0;
    }
    createTab() {
        for ( let i = 0; i < this.block.length; i++ ) {
            let tabBtn = this.block[i].querySelectorAll('.tab__btn');
            let tabItem = this.block[i].querySelectorAll('.tab-content');

            this.tabsIteration(tabBtn, 'findActive');
            this.tabsIteration(tabBtn, 'addActive', tabItem);
            this.tabsIteration(tabBtn, 'createEventTab', tabItem);
        }
    }

    tabsIteration(list, callback, listItems) {
        for( let j=0; j < list.length; j++ ) {
            this[callback](list, j, listItems);
        }
    }

    findActive(list, j) {
        if( list[j].classList.contains('tab__btn--open') ) {
            this.activeItem = j;
        }
    }

    addActive(list, j, listItems) {
        list[this.activeItem].classList.add('tab__btn--open');
        listItems[this.activeItem].classList.add('tab__content--open');
    }

    createEventTab(list, j, listItems) {
        list[j].addEventListener('click', ()=> {
            if ( this.activeItem !== j ) {
                list[this.activeItem].classList.remove('tab__btn--open');
                listItems[this.activeItem].classList.remove('tab__content--open');
                list[j].classList.add('tab__btn--open');
                listItems[j].classList.add('tab__content--open');
                this.activeItem = j;
            }
        });
    }

    init() {
        this.createTab();
    }
}


if ( document.querySelector('.article__tab') ) {
    let articleTab = new contentTabs('.article__tab');
    articleTab.init();
}
