
'use strict';

window.onload = function() {
    paintItem();
    showPanton();
};

function paintItem() {
    let colorsItem = document.querySelectorAll('.change-color__item');

    for(let i = 0; i < colorsItem.length; i++) {
        let color = colorsItem[i].getAttribute('data-color');
        colorsItem[i].style.backgroundColor = color;
        colorsItem[i].addEventListener('click', changeColor.bind(null, color));
    }
}

function changeColor(cl) {
    let mainColorBlock = document.querySelectorAll('.main-color');
    let darkColorBlock = document.querySelectorAll('.dark-color');
    let lightColorBlock = document.querySelectorAll('.light-color');
    let extraLightColorBlock = document.querySelectorAll('.ex-light-color');
    let svgColor = document.querySelectorAll('.svg-color');
    let borderColorBlock = document.querySelectorAll('.border-color');
    let borderBottomColorBlock = document.querySelectorAll('.border-bottom-color');

    for (let i = 0; i < mainColorBlock.length; i++) {
        mainColorBlock[i].style.backgroundColor = cl;
    }

    let lightColor = colorFunc(cl, 20, true);
    for (let i = 0; i < lightColorBlock.length; i++) {
        lightColorBlock[i].style.backgroundColor = lightColor;
    }

    let darkColor = colorFunc(cl, 15, false);
    for (let i = 0; i < darkColorBlock.length; i++) {
        darkColorBlock[i].style.backgroundColor = darkColor;
    }

    let exLightColor = colorFunc(cl, 40, true);
    for (let i = 0; i < extraLightColorBlock.length; i++) {
        extraLightColorBlock[i].style.backgroundColor = exLightColor;
    }
    let borderBottomColor = colorFunc(cl, 35, true);
    for (let i = 0; i < borderBottomColorBlock.length; i++) {
        borderBottomColorBlock[i].style.borderBottom = '1px solid ' + borderBottomColor;
        console.log('1px solid' + borderBottomColor);
    }
    let borderColor = colorFunc(cl, 35, true);
    for (let i = 0; i < borderColorBlock.length; i++) {
        borderColorBlock[i].style.border = '1px solid ' + borderColor;
    }
    for (let i = 0; i < svgColor.length; i++) {
        svgColor[i].style.fill = darkColor;
    }
}

function colorFunc(color, percent, dark) {
    let hexColor = color;

    let r = parseInt(hexColor[1].concat(hexColor[2]), 16);
    let g = parseInt(hexColor[3].concat(hexColor[4]), 16);
    let b = parseInt(hexColor[5].concat(hexColor[6]), 16);

    let symbol = 1;

    if(!dark) {
        symbol = -1;
    }

    let newCollorArr = [];
    function rgbToHsl(r, g, b){
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if(max === min){
            h = s = 0; // achromatic
        }else{
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h *= 6;
        }
        newCollorArr = [(h*10), (s*100), (l*100)];
    }
    rgbToHsl(r, g, b);
    let newColor = "hsl(" + Math.floor(newCollorArr[0]) + "," + Math.floor(newCollorArr[1]) + "%," + Math.floor(newCollorArr[2] + (percent * symbol)) + "%)";
    return newColor;
}

function showPanton() {
    let btn = document.querySelector('.change-color__btn');
    btn.addEventListener('click', function() {
        this.parentNode.classList.toggle('change-color--active');
    })
}