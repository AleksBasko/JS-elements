
window.onload = function() {

    // объект со значениями
    let obj = {
        rus: 'Привет! Меня зовут Супермен!',
        eng: 'Superman!'
    };

    //Инициализируем конструктор объекта в параметры принимаем id блока в котором все будет происходить
    let sliceString = function(id) {
        // получаем id блока присваеваем его как свойство объекта
        this.block = document.getElementById(id);

        // в блоке id ищим блок в который будем вставлять вставлять импуты для ответов
        this.answ = this.block.querySelector('.block-answer');

        // пустой массив как свойство объекта в который иы будем вставлять индексы замененных букв на импуты
        this.answerArr = [];

        // метод объекта в котором мы вставляем перевод русский
        this.addQuest = function() {

            // в блоке id ищим блок в который будем русский вариант
            let questText = this.block.querySelector('.block-text');

            // вставляем русский вариант из объекта как текст
            questText.innerText = obj.rus;
        };

        // метод объекта в котором мы вставляем английский вариант с заменой букв на импуты
        this.addEmpt = function() {

            //получаем текст английского свойства
            let str = obj.eng;

        // создаем пустые массивы
            // для рандомного набора чисел
            let randArr = [];
            // и для пербора строки с англ текстом в массив
            let strArr = [];

            // переменная для цикла вайл
            let i = 0;

            // цикл вайл, в котором мы создаем массив из уникальных чисел мак это длинна строки с англ текстом, мин это 0
            // цикл работает пока i не равно одной трети длинны строки, заменить надо будет каждую третью букву
            while(i < str.length/3) {
                // получаем рандомное число вызваея метод объекта this.rand()
                let randItem = this.rand(0, str.length);

                // проверяем на совпатения в массиве randArr, что бы в массиве были только уникальные данные
                if(randArr.indexOf(randItem) === -1) {

                    // если такого числа нет в массиве то пушим его в него
                    randArr.push(randItem);

                    // увеличивыем значение для цикла
                    i++;
                }
            }

            // цикл перебора строки с англ текстом в массив
            for(let k=0; k < str.length; k++) {
                strArr.push(str[k]);
            }

            // цикл для замены букв, индексы которых в массиве равны случайным числам из массива randArr
            for(let j=0; j < strArr.length; j++) {

                // проверяем не пустое ли значение этого элемента массива. потому что пустые не надо заменять на инпут
                // и проверяем есть ли такое число в массиве randArr
                if(strArr[j] !== ' ' && randArr.indexOf(j) !== -1) {

                    // если число не пустое и такой индекс есть в randArr то создаем новый инпут
                    let inp = document.createElement('input');
                    // прописываем ему атрибут type
                    inp.setAttribute("type", "text");
                    // добавляем класс
                    inp.classList.add("small-input");
                    // и выводим в блок с вопросом
                    this.answ.appendChild(inp);
                    //добавляем число в массив свойство объекта что бы сохранить индексы замененных элементов
                    this.answerArr.push(j);
                }
                // если елемент имеет значение пробел или такого индекса нет в массив ес рандомными числами randArr
                else {
                    // создаем спан
                    let point = document.createElement('span');
                    // в дата атрибут context
                    point.setAttribute("data-context", strArr[j]);
                    point.innerText = strArr[j];
                    this.answ.appendChild(point);
                }
            }


        };


        // метод объекта для проверки правильности заполнения ответа
        this.check = function() {

            // передаем в контест this что бы был доступ через навешенную функцию
            _this = this;
            let btn = this.block.querySelector('.btn');
            btn.addEventListener('click', function() {
                let answspan = _this.answ.querySelectorAll('span');
                let answInput = _this.answ.querySelectorAll('input');
                let checkArr = [];
                let checkInput = [];

                for(let i=0; i <answspan.length; i++) {
                    checkArr.push(answspan[i].getAttribute("data-context"));
                }
                for(let j=0; j < answInput.length; j++) {
                    checkInput.push(answInput[j].value);
                }
                for(let k=0; k < _this.answerArr.length; k++) {
                    checkArr.splice(_this.answerArr[k], 0, checkInput[k]);
                }

                let strfan = checkArr.join('');
                if (strfan === obj.eng) {
                    alert('You are best!');

                }
                else {
                    alert('noo((');
                }
            })
        };

        // метод объекта который вызываает все наши основные функции для старта
        this.init = function() {
            this.addQuest();
            this.addEmpt();
            this.check();
        };

        // метод масива который возвращает рандомное чило, в пределах от мин и макс
        this.rand = function(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
    };

    // через функцию конструктор создаем новый объект и предаем в него id блока
    let startSlice = new sliceString('block-text');
    //вызываем метод init()
    startSlice.init();

};