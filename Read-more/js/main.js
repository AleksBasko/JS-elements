

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





// $(document).ready(function() {
//
//     let blockCalss = $('.rm-block__paragraph');
//     let paragraph = $('.rm-block__paragraph');
//     let aH = paragraph.height();
//
//     blocks.height();
//
//     function shows() {
//             while(aH > blocks.height()) {
//
//                 let trex = paragraph.html();
//                 let arrTrex = trex.split(" ");
//                 dropLost(arrTrex);
//
//             }
//             paragraph.addClass('rm-block__paragraph--correct');
//     }
//
//     function dropLost(a) {
//         a.push()
//         console.log('a.length ' + a.length);
//         let lost = a.length - 2;
//         a.splice(lost, 1);
//
//         console.log('a.length2 ' + a.length);
//
//         let newText = a.join(" ");
//         paragraph.html(newText);
//         aH = paragraph.height();
//         console.log(aH);
//     }
//
//     shows();
// });