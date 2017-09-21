window.onload = function () {

    let MyLeft = new LeftMenu('left-menu');
    MyLeft.init();

    let MyRight = new RightMenu('right-menu');
    MyRight.init();

    let MyCentral = new CentralMenu('central-menu');
    MyCentral.init();

    MyCentral.show();
    MyRight.show();
    MyLeft.show();

};

//TODO left menu
let RightMenu = function (id) {
    this.block = document.getElementById(id);

    this.createMenu = function () {
        let _this = this;
        let rightItemClassName = 'menu__item';
        let rightBlockClassName = 'menu__block';
        let rightLinkClassName = 'menu__link';
        let rightListClass = '.menu__list';
        let rightLinkClass = '.menu__link';

        let itemLeft = this.block.getElementsByClassName(rightItemClassName);

        for (let i = 0; i < itemLeft.length; i++) {
            if (itemLeft[i].querySelector(rightListClass) !== null) {

                let leftLink = itemLeft[i].querySelector(rightLinkClass);
                leftLink.classList.add(rightBlockClassName);
                let linkText = leftLink.innerHTML;
                let linkUrl = leftLink.href;
                let listItem = document.createElement('li');
                listItem.className = rightItemClassName;
                let link = document.createElement('a');
                link.className = rightLinkClassName;
                // link.href = "somelink url";
                link.setAttribute("href", linkUrl);
                link.innerHTML = linkText;
                listItem.appendChild(link);
                itemLeft[i].querySelector(rightListClass).insertBefore(listItem, itemLeft[i].querySelector(rightListClass).firstChild);

                leftLink.addEventListener('click', function(e) {
                    _this.openMenu(e, this);
                })
            }
        }
    };

    this.openMenu = function (e, _th) {
        e.preventDefault();
        if (_th.parentNode.classList.contains('menu__item--open')) {
            _th.parentNode.classList.remove('menu__item--open');
        }
        else {
            _th.parentNode.classList.add('menu__item--open');
        }
    };

    this.init = function () {
        this.createMenu();
    };

    this.show = function() {
        this.block.style.opacity = 1;
    }
};

//TODO Right menu
let LeftMenu = function (id) {
    this.block = document.getElementById(id);

    this.createMenu = function() {
        let leftItemClass = '.menu__item';
        let leftListClass = '.menu__list';
        let leftBtnClass = 'menu__btn';
        let itemLeft = this.block.querySelectorAll(leftItemClass);
        for (let i = 0; i < itemLeft.length; i++) {
            if (itemLeft[i].querySelector(leftListClass) !== null) {
                let btn = document.createElement('span');
                btn.className = leftBtnClass;
                itemLeft[i].appendChild(btn);
            }
        }
    };

    this.openMenu = function() {
        let leftBtnClass = 'menu__btn';
        let leftMenuOpenClass = 'menu__item--open';
        let blockMenu = this.block.getElementsByClassName(leftBtnClass);
        for (let i = 0; i < blockMenu.length; i++) {
            blockMenu[i].addEventListener("click", function () {
                if (this.parentNode.classList.contains(leftMenuOpenClass)) {
                    this.parentNode.classList.remove(leftMenuOpenClass);
                }
                else {
                    this.parentNode.classList.add(leftMenuOpenClass);
                }
            });
        }
    };

    this.init = function () {
        this.createMenu();
        this.openMenu();
    };

    this.show = function() {
        this.block.style.opacity = 1;
    }
};


//TODO Central menu
let CentralMenu = function (id) {
    this.block = document.getElementById(id);

    this.createMenu = function() {
        let centralItemClass = '.central-menu__item';
        let centralListClass = '.central-menu__list';
        let centralBtnClass = 'central-menu__btn';
        let _this = this;

        let itemRight = this.block.querySelectorAll(centralItemClass);

        for (let i = 0; i < itemRight.length; i++) {
            if (itemRight[i].querySelector(centralListClass) !== null) {
                let btn = document.createElement('span');
                btn.className = centralBtnClass;
                btn.addEventListener('click', function(){
                    _this.openMenu(this);
                });

                itemRight[i].appendChild(btn);
            }
        }
    };

    this.openMenu = function(_this) {
        let parent = _this.parentNode;
        let centralMenuOpenClass = 'central-menu__item--open';
        let centralItemClass = '.central-menu__item';

        if (parent.classList.contains(centralMenuOpenClass)) {
            parent.classList.remove(centralMenuOpenClass);
        }

        else {
            let activeBlocks = parent.parentNode.querySelectorAll(centralItemClass);

            for(let i = 0; i < activeBlocks.length; i++) {
                activeBlocks[i].classList.remove(centralMenuOpenClass);
            }

            parent.classList.add(centralMenuOpenClass);
        }
    };

    this.init = function () {
        this.createMenu();
    };
    this.show = function() {
        this.block.style.opacity = 1;
    }
};