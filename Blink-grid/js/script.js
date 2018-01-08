(function() {
    var grid = document.querySelector('.bg-grid');

    var gridWidth = grid.offsetWidth;
    var gridHeight = grid.offsetHeight;

    var gridItemSize = 50;
    var gridItemCount = (gridWidth/gridItemSize) * (gridHeight/gridItemSize);

    for (var i = 0; i < gridItemCount; i++) {
        var gridItem = document.createElement('div');
        gridItem.classList.add('bg-grid__item');
        gridItem.style.width = gridItemSize + 'px';
        gridItem.style.height = gridItemSize + 'px';

        grid.appendChild(gridItem);
    }

    var blinkItem = document.querySelectorAll('.bg-grid__item');

    setInterval(function() {
        var randValue = getRandomInt(0, gridItemCount);
        blinkItem[randValue].classList.add('bg-grid__item--blink');
        console.log(randValue);
        setTimeout(function(){
            blinkItem[randValue].classList.remove('bg-grid__item--blink');
        }, 3000)
    }, 50);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}());

