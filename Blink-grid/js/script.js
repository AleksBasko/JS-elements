
class BlickEffect {
  constructor(id, size, interval) {
    this.grid = document.querySelector(id);
    this.gridItemSize = size || 50;
    this.interval = interval || 50;
    this.gridItemCount = null;

    this.init();
  }

  createGrid() {
    let gridWidth = this.grid.offsetWidth;
    let gridHeight = this.grid.offsetHeight;
    this.gridItemCount = (gridWidth/this.gridItemSize) * (gridHeight/this.gridItemSize);

    for (var i = 0; i < this.gridItemCount; i++) {
        var gridItem = document.createElement('div');
        gridItem.classList.add('bg-grid__item');
        gridItem.style.width = this.gridItemSize + 'px';
        gridItem.style.height = this.gridItemSize + 'px';

        this.grid.appendChild(gridItem);
    }
  }

  showGrid() {
    var blinkItem = this.grid.querySelectorAll('.bg-grid__item');

    setInterval(()=> {
        var randValue = this.getRandomInt(0, this.gridItemCount);
        blinkItem[randValue].classList.add('bg-grid__item--blink');
        setTimeout(()=>{
            blinkItem[randValue].classList.remove('bg-grid__item--blink');
        }, 3000)
    }, this.interval);
  }

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }

  init() {
    this.createGrid();
    this.showGrid();
  }
}

let smallGrid = new BlickEffect('.bg-grid--s');
let largeGrid = new BlickEffect('.bg-grid--l', 100, 200);
