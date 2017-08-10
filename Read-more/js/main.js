

window.onload = function () {
    let blockClass = 'rm-paragraph';
    let rmContentClass = 'rm-block__content';
    let rmCorrectClass = 'rm-block__content--correct';
    let blocks = document.getElementsByClassName(blockClass);

    for (let i = 0; i < blocks.length; i++) {
        let blockText = blocks[i].innerHTML;
        let blockHeight = blocks[i].clientHeight;

        let blockStyle = getComputedStyle(blocks[i]);
        let blockPaddingTop = parseInt(blockStyle.paddingTop, 10);
        let blockPaddingBottom = parseInt(blockStyle.paddingBottom, 10);
        let innerBlock = blockHeight - blockPaddingTop - blockPaddingBottom;

        let rmContent = document.createElement('div');

        rmContent.classList.add(rmContentClass);
        rmContent.textContent = blockText;
        blocks[i].innerHTML = '';
        blocks[i].appendChild(rmContent);
        let rmContentHeight = rmContent.offsetHeight;

        while( rmContentHeight > innerBlock) {

            let strTrex = rmContent.innerHTML;
            let arrTrex = strTrex.split(" ");
            dropLost(arrTrex);
        }

        rmContent.classList.add(rmCorrectClass);

        function dropLost(arr) {
            let last = arr.length - 2;
            arr.splice(last, 2);
            arr.push('...');
            let newText = arr.join(" ");
            rmContent.innerHTML = newText;
            rmContentHeight = rmContent.offsetHeight;
        }
    }
};
