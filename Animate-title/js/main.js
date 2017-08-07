
window.onload = function () {
    let windowW = window.innerWidth;
    let windowH = window.innerHeight;
    let startBtn = document.querySelector('.at-start');
    let animateListClass = '.at-animate__list';
    let animateList = document.querySelector(animateListClass);
    let speedValue;

    startBtn.addEventListener('click', function() {
        temp();
    });

    function temp() {
        let inputName = document.getElementById('at-title');
        let inputSpeed = document.getElementById('at-speed');
        let nameValue = inputName.value;
        speedValue = parseInt(inputSpeed.value, 10) || 2000;

        if (nameValue) {
            animateList.innerHTML = '';

            for(let i=0; i < nameValue.length; i++) {
                position(nameValue[i], i, nameValue.length)
            }

            inputName.value = '';
            inputSpeed.value = '';
        }
    }
    function position(a, j, listLength) {
        let animateItemClass = 'at-animate__item';
        let animateItem = document.createElement('li');

        animateItem.classList.add(animateItemClass);
        animateItem.innerHTML = a;
        animateList.appendChild(animateItem);

        let rect = animateItem.getBoundingClientRect();
        let itemW = animateItem.offsetWidth;
        let itemH = animateItem.offsetHeight;
        let itemTop = rect.top;
        let itemLeft = rect.left;
        let itemRight = windowW - rect.left - itemW;
        let itemBottom = windowH - itemTop - itemH;

        if (listLength/2 > j) {
            let rdmW = Math.floor(getRandomArbitary(0, itemLeft));

            if(j % 2) {
                let rdmH = Math.floor(getRandomArbitary(0, itemTop));
                animateItem.style.transform = 'translate(' + '-' + rdmW + 'px, ' + '-' + rdmH + 'px)';
            }
            else {
                let rdmH = Math.floor(getRandomArbitary(0, itemBottom));
                animateItem.style.transform = 'translate(' + '-' + rdmW + 'px, ' + rdmH + 'px)';
            }
        }

        else {
            let rdmW = Math.floor(getRandomArbitary(0, itemRight));

            if(j % 2) {
                let rdmH = Math.floor(getRandomArbitary(0, itemTop));
                animateItem.style.transform = 'translate(' + rdmW + 'px, ' + '-' + rdmH + 'px)';
            }
            else {
                let rdmH = Math.floor(getRandomArbitary(0, itemBottom));
                animateItem.style.transform = 'translate(' + rdmW + 'px, ' + rdmH + 'px)';
            }
        }

        setTimeout( function() {
            animateItem.style.transition = 'transform ' + speedValue + 'ms';
            animateItem.style.transform = 'translate( 0px, 0px)';
        }, 2000);
    }

    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;
    }

};