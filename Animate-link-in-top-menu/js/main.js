window.onload = function() {
  activeSection();
};

window.onscroll = function() {
  activeSection();
};

function activeSection() {

  let sectionName = 'tm-section';
  let linkName = 'tm-top-menu__link';
  let dataName = 'data-name';
  let activeName = 'tm-section--active';

  let wh = window.innerHeight;
  let blocks = document.getElementsByClassName(sectionName);
  let topLink = document.getElementsByClassName(linkName);

  for(let i=0; i < blocks.length; i++) {
    let offTop = blocks[i].getBoundingClientRect().top;
    let heightBlock = blocks[i].offsetHeight;
    let colorClass;

    if(offTop + heightBlock < wh/2 || offTop > wh/2){
      colorClass = blocks[i].getAttribute(dataName);
      topLink[i].classList.remove(colorClass);
      blocks[i].classList.remove(activeName);
    }

    else if((offTop < wh/2 && offTop >= 0) || heightBlock - offTop >= wh/2){
      colorClass= blocks[i].getAttribute(dataName);
      blocks[i].classList.add(activeName);
      blocks[i].classList.add(colorClass);
      topLink[i].classList.add(colorClass);
    }
  }
}
