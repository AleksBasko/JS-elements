
class questAccordion {
    constructor() {
        this.btnAccordion = document.querySelectorAll('.quest-accord__header');
        this.init();
    }

    hideAnswer() {
        for (let i = 0; i < this.btnAccordion.length; i++) {
            let btnAccordionHeight = this.btnAccordion[i].offsetHeight;
            let parentBlock = this.btnAccordion[i].parentNode;

            while (!parentBlock.classList.contains('quest-accord__item')) {
                parentBlock = parentBlock.parentNode;
            }
            parentBlock.style.height = btnAccordionHeight + 'px';

            this.showAnswer(this.btnAccordion[i], parentBlock, btnAccordionHeight);
        }
    }

    showAnswer(item, parentItem, parentItemHeight) {
        item.addEventListener('click', function () {

            if (parentItem.classList.contains('quest-accord__item--open')) {
                parentItem.classList.remove('quest-accord__item--open');
                parentItem.style.height = parentItemHeight + 'px';
            }
            else {
                parentItem.classList.add('quest-accord__item--open');
                let answerHeight = parentItem.querySelector('.quest-accord__answer').offsetHeight;
                parentItem.style.height = answerHeight + parentItemHeight + 'px';
            }
        })
    }

    init() {
        this.hideAnswer();
    }
}

let askAnswer = new questAccordion();
