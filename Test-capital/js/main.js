window.onload = function () {
    let block = document.getElementById('test');
    let quest = [
        {'country': 'Germany', 'capital': 'Berlin'},
        {'country': 'Ireland', 'capital': 'Dublin'},
        {'country': 'Italy', 'capital': 'Rome'},
        {'country': 'Sweden', 'capital': 'Stockholm'},
        {'country': 'United Kingdom', 'capital': 'London'},
        {'country': 'France', 'capital': 'Paris'},
        {'country': 'Austria', 'capital': 'Vienna'},
        {'country': 'Spain', 'capital': 'Madrid'},
        {'country': 'Switzerland', 'capital': 'Bern'},
        {'country': 'Netherlands', 'capital': 'Amsterdam'}];
    let StartTest = new Testing(block, quest);
    StartTest.init(quest);
};

let Testing = function (id, arr) {
    // Узнаем длину массива тестов, для проверки првильных ответов
    this.testLangth = arr.length;
    let mainArray = arr;

    this.counter = 0;

    // формируем отдельный массив где будут храниться только столицы
    this.capitalList = [];
    for(let i=0; i < mainArray.length; i++) {
        this.capitalList.push(mainArray[i]['capital']);
    }

    this.startTest = function(arr){
        // получаем на вход массив со всеми тествоыми словами
        // рандомно сортируем его
        arr = shuffle(arr);

        // получаем на вход id блока в котором и будет наш тест
        // находим в нем блок для вопроса
        let newTitle = id.querySelector('.ts-question__item');
        // находим в нем блоки дляч вариантов ответов
        let answerTitle = id.querySelectorAll('.ts-answer__item');

        // поскольку массив рандомно перемешан,
        // то мы можем всегда брать первый элемент массива
        // получаем у него название страны и выводим в блоке с вопросом
        newTitle.innerHTML = arr[0]['country'];

        // Добавим свойство объекта в которое записываем правильный ответ
        this.trueAnswer = arr[0]['capital'];

        // удаляем из этого массива нулевой элемент, который правильный ответ
        let delCapital = this.capitalList.indexOf(this.trueAnswer);
        this.capitalList.splice(delCapital, 1);

        // рандомно сортируем полученный массив уже без правильного варианта
        this.capitalList = shuffle(this.capitalList);

        // формируем новый массив для вариантов ответов
        this.answerList = [];

        // через цикл вставляем три варианта с неправильными ответами
        for(let k=0; k <= 2; k++) {
            this.answerList.push(this.capitalList[k]);
        }

        // последним добавляем правельный вариант ответа
        this.answerList.push(this.trueAnswer);

        // рандомно сортируем полученный массив
        this.answerList = shuffle(this.answerList);

        // для вывода вариантов ответов делаем цикл
        for(let j=0; j < answerTitle.length; j++) {
            answerTitle[j].innerHTML = this.answerList[j];
        }

        this.capitalList.push(arr[0]['capital']);
    };
    this.init = function () {
        this.startTest(mainArray);

        // находим в нем блоки дляч вариантов ответов
        let answerTitle = id.querySelectorAll('.ts-answer__item');

        // навешиваем событие смены задания при клике на вариант
        for(let j=0; j < answerTitle.length; j++) {
            let obj = this;
            answerTitle[j].addEventListener('click', function(){
                obj.nextQuest(this);
            });
        }
    };
    this.nextQuest = function(_this){
        if(mainArray.length > 1) {
            // Проверяем на какой ответ был клик
            if(_this.innerHTML == this.trueAnswer) {
                this.counter++;
            }

            console.log(mainArray.length);
            mainArray.splice(0, 1);
            console.log('after ' + mainArray.length);
            this.startTest(mainArray);
        }
        else {
            if(_this.innerHTML == this.trueAnswer) {
                this.counter++;
            }

            let newTitle = id.querySelector('.ts-question__item');
            let countLine = document.createElement('span');

            if(this.counter == this.testLangth) {
                newTitle.classList.add('ts-question__item--success');
                countLine.innerHTML = 'Correct answers ' + this.counter;
                newTitle.innerHTML = 'Well done!';
            }
            else {
                newTitle.classList.add('ts-question__item--error');
                countLine.innerHTML = 'Correct answers ' + this.counter;
                newTitle.innerHTML = 'a little bit more...';
            }

            newTitle.appendChild(countLine);
            let answerBlock = id.querySelector('.ts-answer__block');
            answerBlock.remove();
        }
    };
};


/*
 * Рандомная сортировка массива
 */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}