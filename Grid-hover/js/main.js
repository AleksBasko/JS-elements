window.onload = function() {
    heightGrid();
    hideHover();
    hidePreloader();
};

window.addEventListener('resize', function() {
    heightGrid();
});

function heightGrid() {
    let grid = document.querySelector('.grid-zoom');
    let item = grid.querySelectorAll('.grid-zoom__item');

    for(let i = 0; i < item.length; i++) {
        let itemWidth = item[i].clientWidth;
        console.log(itemWidth);
        item[i].style.height = itemWidth/1.333 + 'px';
    }
}

function hideHover() {
    let grid = document.querySelector('.grid-shad');
    let item = grid.querySelectorAll('.grid-shad__item');

    for(let i = 0; i < item.length; i++) {
        let shadow = document.createElement('div');
        shadow.classList.add('grid-shad__block');
        item[i].appendChild(shadow);

        item[i].addEventListener('mouseover', function() {
            for(let j = 0; j < item.length; j++) {
                if(i !== j) {
                    item[j].classList.add('grid-shad__item--hide');
                }
            }
        });
        item[i].addEventListener('mouseout', function() {
            for(let j = 0; j < item.length; j++) {
                item[j].classList.remove('grid-shad__item--hide');
            }
        });
    }
}

function hidePreloader() {
    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
}