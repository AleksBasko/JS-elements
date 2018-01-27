class Select {
  constructor(args) {
    this.blockId = args.block;
    this.selectId = args.select || 'select';
    this.animate = args.animate || false;
    this.speed = args.speed || "300px";

    this.blockWrap = document.querySelector('.' + this.blockId);
    this.startSelect = this.blockWrap.querySelector(this.selectId);
    this.optionList = this.startSelect.querySelectorAll('option');
    this.csMain = document.createElement('div');
    this.csMainText = document.createElement('span');
    this.csBlock = document.createElement('div');
    this.csBlockList = document.createElement('div');
    this.csList = document.createElement('ul');
    this.activeItem = 0;
  }

  clickOutEv(even) {
    let isSelect = false;
    let clickBlock = even.target;

    while (clickBlock.tagName !== 'HTML') {

      if (clickBlock.classList.contains(this.blockId)) {
        isSelect = true;
        break;
      }
      clickBlock = clickBlock.parentElement;
    }

    if (!isSelect) {
      this.close();
    }
  };

  clickOut() {
    document.addEventListener('click', (e) => {
      this.clickOutEv(e);
    });
  }

  create() {
    this.startSelect.classList.add('select__hide');
    this.csMain.classList.add('ss__select');
    this.csBlock.classList.add('ss__block');
    this.csMain.appendChild(this.csMainText);


    this.csBlockList.classList.add('ss__box-list');
    this.csList.classList.add('ss__list');

    for (let i = 0; i < this.optionList.length; i++) {
      let csItem = document.createElement('li');
      csItem.classList.add('ss__item');
      let optionContent = this.optionList[i].innerText;
      csItem.innerText = optionContent;
      csItem.dataset.count = i;

      this.csList.appendChild(csItem);


      if (this.optionList[i].hasAttribute("selected")) {
        this.activeItem = i;
      }

      this.changeSelected(csItem, i);
    }
    this.csBlockList.appendChild(this.csList);
    this.csBlock.appendChild(this.csBlockList);
    this.blockWrap.appendChild(this.csBlock);
    this.csBlock.insertBefore(this.csMain, this.csBlockList);
    if (!this.animate) {
      this.csBlockList.style.display = 'none';
      this.csBlockList.style.height = 'auto';
    }
  }

  createFirst() {
    for (let i = 0; i < this.optionList.length; i++) {
      if (this.activeItem === i) {
        let optionContent = this.optionList[i].innerText;
        this.csMainText.innerText = optionContent;
      }
    }
    this.addClassActive();
  }

  addClassActive(remove) {
    let items = this.blockWrap.querySelectorAll('.ss__item');
    for (let i = 0; i < items.length; i++) {
      if (!remove) {
        items[this.activeItem].classList.add('ss__item--active');
      } else {
        items[this.activeItem].classList.remove('ss__item--active');
      }
    }
  }

  changeSelected(item, i) {
    item.addEventListener('click', () => {
      if (this.activeItem !== i) {
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
    let listHeight = this.csList.offsetHeight;
    this.csBlockList.style.height = listHeight + 'px';
  }

  open() {
    this.csMain.addEventListener('click', () => {
      if (this.csBlock.classList.contains('ss__block--open')) {
        this.csBlock.classList.remove('ss__block--open');

        if (this.animate) {
          this.csBlockList.style.height = '0px';
        } else {
          this.csBlockList.style.display = 'none';
        }

      } else {
        this.csBlock.classList.add('ss__block--open');

        if (this.animate) {
          this.calcHeight();
        } else {
          this.csBlockList.style.display = 'block';
          this.csBlockList.style.height = 'auto';
        }
      }
    })
  }

  close() {
    this.csBlock.classList.remove('ss__block--open');
    this.csBlockList.style.height = '0px';
  }

  init() {
    this.create();
    this.createFirst();
    this.open();
    this.clickOut()
  }
}

let SimpleSelect = new Select({
  block: 'simple-select',
  animate: true
});
SimpleSelect.init();

let SecondSelect = new Select({
  block: 'second-select'
});
SecondSelect.init();
