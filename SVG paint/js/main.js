
window.onload = function () {
    var color = document.getElementById('input-color');
    var image = document.getElementById('image');
    var path = image.querySelectorAll('path');

    var currentElem;

    function chancheColor(){
        for (var i = 0; i < path.length; i++) {
            path[i].style.fill = '#fff';
            path[i].addEventListener('click', function () {
                color.click();
                currentElem = this;
            });
        }
    }
    color.addEventListener('input', function () {
        var newColor = this.value;
        currentElem.style.fill = newColor;
    });
    chancheColor();
};