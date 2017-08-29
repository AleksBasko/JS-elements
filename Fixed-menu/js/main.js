
let scrollPoint = 0;
let scrollPoint2 = 0;

window.onscroll = function(){
    let fixedBlockName = '.header__top';
    let headerName = '.header';

    let headerHeight = document.querySelector(headerName).offsetHeight;
    let winOffTop = window.pageYOffset;
    let fixedMenu = document.querySelector(fixedBlockName);

    if(winOffTop > headerHeight) {
        fixedMenu.classList.add('fixed-menu');

        if (scrollPoint < winOffTop ) {
            scrollPoint2 = 0;
            fixedMenu.classList.remove('fixed-menu--active');
        }

        else if (scrollPoint > winOffTop ){
            scrollPoint2++;
            if (scrollPoint2 > 11) {
                fixedMenu.classList.add('fixed-menu--active');

            }
        }
        scrollPoint = winOffTop;
    }

    else {
        fixedMenu.classList.remove('fixed-menu');
    }
};