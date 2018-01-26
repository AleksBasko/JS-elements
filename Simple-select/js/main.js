
class Select {
    constructor(block, select='select') {
        this.blockId = block;
        this.selectId = select;
        this.blockWrap = document.querySelector(this.blockId);
        this.startSelect = this.blockWrap.querySelector(this.selectId);
        this.optionList = this.startSelect.querySelectorAll('option');
        this.csMain = document.createElement('div');
        this.csMainText = document.createElement('span');
        this.csBlock = document.createElement('div');
        this.activeItem = 0;
        // this.heightBlock = 300;
        // this.heightItem = 0;
    }

    create() {
        this.startSelect.classList.add('select__hide');
        this.csMain.classList.add('ss__select');
        this.csBlock.classList.add('ss__block');
        this.csMain.appendChild(this.csMainText);

        let csBlockList = document.createElement('div');
        let csList = document.createElement('ul');
        csBlockList.classList.add('ss__box-list');
        csList.classList.add('ss__list');

        for (let i = 0; i < this.optionList.length; i++) {
            let csItem = document.createElement('li');
            csItem.classList.add('ss__item');
            let optionContent = this.optionList[i].innerText;
            csItem.innerText = optionContent;
            csItem.dataset.count = i;

            csList.appendChild(csItem);




            if (this.optionList[i].hasAttribute("selected")) {
                this.activeItem = i;
            }


            this.changeSelected(csItem, i);
        }
        csBlockList.appendChild(csList);
        this.csBlock.appendChild(csBlockList);
        this.blockWrap.appendChild(this.csBlock);
        this.csBlock.insertBefore(this.csMain, csBlockList);
    }

    createFirst() {
        for (let i = 0; i < this.optionList.length; i++) {
            if ( this.activeItem === i ) {
                let optionContent = this.optionList[i].innerText;
                this.csMainText.innerText = optionContent;
            }
        }
        this.addClassActive();
    }

    addClassActive(remove) {
        let items = this.blockWrap.querySelectorAll('.ss__item');
        for( let i=0; i < items.length; i++ ) {
            if (!remove) {
                items[this.activeItem].classList.add('ss__item--active');
            }
            else {
                items[this.activeItem].classList.remove('ss__item--active');
            }

        }
    }

    changeSelected(item, i) {
        item.addEventListener('click', ()=> {
            if ( this.activeItem !== i ) {
                this.addClassActive('remove');
                item.classList.add('ss__item--active');
                this.csMainText.innerText = item.innerText;

                this.optionList[this.activeItem].removeAttribute('selected');
                this.optionList[i].setAttribute('selected', 'selected');
                this.activeItem = i;
                this.close();
            }
        });

    }

    calcHeight() {

    }

    open() {
        this.csMain.addEventListener('click', ()=> {
            this.csBlock.classList.toggle('ss__block--open');
        })
    }

    close() {
        this.csBlock.classList.remove('ss__block--open');
    }

    init() {
        this.create();
        this.createFirst();
        this.open();
    }
}

let SimpleSelect = new Select('.simple-select');
SimpleSelect.init();
