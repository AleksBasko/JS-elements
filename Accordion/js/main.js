
function accord(btnName, closeName, openName) {
    let btnClass = btnName;
    let closeClass = closeName;
    let openClass = openName;
    let activeIndex;
    let vertBtn = document.getElementsByClassName(btnClass);

    for(let i=0; i < vertBtn.length; i++) {

        vertBtn[i].addEventListener('click', function() {
            this.parentNode.classList.remove(closeClass);
            this.parentNode.classList.add(openClass);
            if(activeIndex != undefined) {
                vertBtn[activeIndex].parentNode.classList.remove(openClass);
                vertBtn[activeIndex].parentNode.classList.add(closeClass);
            }
            activeIndex = i;
        })
    }
}


window.onload = function() {
    accord('acv-item__header', 'acv-block__item--close', 'acv-block__item--open');
    accord('ach-item__header', 'ach-block__item--close', 'ach-block__item--open');
};
