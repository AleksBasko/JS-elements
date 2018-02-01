(function() {
    var text = document.getElementById('text');
    var rotate = document.getElementById('rotate');
    var angle = document.getElementById('angle');
    var width = document.getElementById('width');

    var checkBtn = document.getElementById('check');
    var textInner = document.getElementById('textInner');

    var rotateGet = document.getElementById('rotateFunc');
    var angleGet = document.getElementById('angleFunc');
    var widthGet = document.getElementById('widthFunc');


    text.addEventListener( 'change', function() {
        curved();
    });

    angle.addEventListener( 'change', function() {
        curved();
    });
    width.addEventListener( 'change', function() {
        curved();
    });
    rotate.addEventListener( 'change', function() {
        curved();
    });
    checkBtn.addEventListener( 'click', function() {
        curved();
    });

    checkBtn.addEventListener( 'click', curved());


    function curved() {
        textInner.innerHTML = '';

        var textVal = text.value || 'Some Text';

        var rotateVal = rotate.value || -42;
        var angleVal = angle.value || 11;
        var widthVal = width.value || 550;

        textInner.style.transform = 'rotate(' + rotateVal + 'deg)';
        textInner.style.width = widthVal/2 + 'px';
        textInner.style.height = widthVal/2 + 'px';

        for (var i = 0; i < textVal.length; i++) {
            var span = document.createElement('span');
            span.classList.add('crt-letter');
            span.innerHTML = textVal[i];
            span.style.transform = 'rotate(' + angleVal * i + 'deg)';
            span.style.height = widthVal/2 + 'px';

            textInner.appendChild(span);
        }
        writeFunc(angleVal, widthVal, rotateVal);
    }
    function writeFunc(angle, width, rotate) {
        rotateGet.innerHTML = rotate;
        angleGet.innerHTML = angle;
        widthGet.innerHTML = width;
    }

}());
