
// let getCities = new XMLHttpRequest();
// getCities.open('GET', 'pages/Cities-points/data/cities.json', true);
// getCities.onload = function () {
//     if (getCities.status >= 200 && getCities.status < 400) {
//         let resp = JSON.parse(getCities.responseText);
//         console.log(resp);
//         // let popupCities = new CitiesList(resp, 'change-city-form');
//         // popupCities.init();
//     }
// };
// getCities.send();

 let cityArr = [
   "Абакан",
   "Азов",
   "Александров",
   "Алексин",
   "Альметьевск",
   "Анапа",
   "Ангарск",
   "Анжеро-Судженск",
   "Апатиты",
   "Арзамас",
   "Армавир",
   "Арсеньев",
   "Артем",
   "Архангельск",
   "Асбест",
   "Астрахань",
   "Ачинск",
   "Балаково",
   "Балахна",
   "Балашиха",
   "Балашов",
   "Барнаул",
   "Батайск",
   "Белгород",
   "Белебей",
   "Белово",
   "Белогорск (Амурская область)",
   "Белорецк",
   "Белореченск",
   "Бердск",
   "Березники",
   "Березовский (Свердловская область)",
   "Бийск",
   "Биробиджан",
   "Благовещенск (Амурская область)",
   "Бор",
   "Борисоглебск",
   "Боровичи",
   "Братск",
   "Брянск",
   "Бугульма",
   "Буденновск",
   "Бузулук",
   "Буйнакск",
   "Великие Луки",
   "Великий Новгород",
   "Верхняя Пышма",
   "Видное",
   "Владивосток",
   "Владикавказ",
   "Владимир",
   "Волгоград",
   "Волгодонск",
   "Волжск",
   "Волжский",
   "Вологда",
   "Вольск",
   "Воркута",
   "Воронеж",
   "Воскресенск",
   "Воткинск",
   "Всеволожск",
   "Выборг",
   "Выкса",
   "Вязьма",
   "Гатчина",
   "Геленджик",
   "Георгиевск",
   "Глазов",
   "Горно-Алтайск",
   "Грозный",
   "Губкин",
   "Гудермес",
   "Гуково",
   "Гусь-Хрустальный",
   "Дербент",
   "Дзержинск",
   "Димитровград",
   "Дмитров",
   "Долгопрудный",
   "Домодедово",
   "Донской",
   "Дубна",
   "Евпатория",
   "Егорьевск",
   "Ейск",
   "Екатеринбург",
   "Елабуга",
   "Елец",
   "Ессентуки",
   "Железногорск (Красноярский край)",
   "Железногорск (Курская область)",
   "Жигулевск",
   "Жуковский",
   "Заречный",
   "Зеленогорск",
   "Зеленодольск",
   "Златоуст",
   "Иваново",
   "Ивантеевка",
   "Ижевск",
   "Избербаш",
   "Иркутск",
   "Искитим",
   "Ишим",
   "Ишимбай",
   "Йошкар-Ола",
   "Казань",
   "Калининград",
   "Калуга",
   "Каменск-Уральский",
   "Каменск-Шахтинский",
   "Камышин",
   "Канск",
   "Каспийск",
   "Кемерово",
   "Керчь",
   "Кинешма",
   "Кириши",
   "Киров (Кировская область)",
   "Кирово-Чепецк",
   "Киселевск",
   "Кисловодск",
   "Клин",
   "Клинцы",
   "Ковров",
   "Когалым",
   "Коломна",
   "Комсомольск-на-Амуре",
   "Копейск",
   "Королев",
   "Кострома",
   "Котлас",
   "Красногорск",
   "Краснодар",
   "Краснокаменск",
   "Краснокамск",
   "Краснотурьинск",
   "Красноярск",
   "Кропоткин",
   "Крымск",
   "Кстово",
   "Кузнецк",
   "Кумертау",
   "Кунгур",
   "Курган",
   "Курск",
   "Кызыл",
   "Лабинск",
   "Лениногорск",
   "Ленинск-Кузнецкий",
   "Лесосибирск",
   "Липецк",
   "Лиски",
   "Лобня",
   "Лысьва",
   "Лыткарино",
   "Люберцы",
   "Магадан",
   "Магнитогорск",
   "Майкоп",
   "Махачкала",
   "Междуреченск",
   "Мелеуз",
   "Миасс",
   "Минеральные Воды",
   "Минусинск",
   "Михайловка",
   "Михайловск (Ставропольский край)",
   "Мичуринск",
   "Москва",
   "Мурманск",
   "Муром",
   "Мытищи",
   "Набережные Челны",
   "Назарово",
   "Назрань",
   "Нальчик",
   "Наро-Фоминск",
   "Находка",
   "Невинномысск",
   "Нерюнгри",
   "Нефтекамск",
   "Нефтеюганск",
   "Нижневартовск",
   "Нижнекамск",
   "Нижний Новгород",
   "Нижний Тагил",
   "Новоалтайск",
   "Новокузнецк",
   "Новокуйбышевск",
   "Новомосковск",
   "Новороссийск",
   "Новосибирск",
   "Новотроицк",
   "Новоуральск",
   "Новочебоксарск",
   "Новочеркасск",
   "Новошахтинск",
   "Новый Уренгой",
   "Ногинск",
   "Норильск",
   "Ноябрьск",
   "Нягань",
   "Обнинск",
   "Одинцово",
   "Озерск (Челябинская область)",
   "Октябрьский",
   "Омск",
   "Орел",
   "Оренбург",
   "Орехово-Зуево",
   "Орск",
   "Павлово",
   "Павловский Посад",
   "Пенза",
   "Первоуральск",
   "Пермь",
   "Петрозаводск",
   "Петропавловск-Камчатский",
   "Подольск",
   "Полевской",
   "Прокопьевск",
   "Прохладный",
   "Псков",
   "Пушкино",
   "Пятигорск",
   "Раменское",
   "Ревда",
   "Реутов",
   "Ржев",
   "Рославль",
   "Россошь",
   "Ростов-на-Дону",
   "Рубцовск",
   "Рыбинск",
   "Рязань",
   "Салават",
   "Сальск",
   "Самара",
   "Санкт-Петербург",
   "Саранск",
   "Сарапул",
   "Саратов",
   "Саров",
   "Свободный",
   "Севастополь",
   "Северодвинск",
   "Северск",
   "Сергиев Посад",
   "Серов",
   "Серпухов",
   "Сертолово",
   "Сибай",
   "Симферополь",
   "Славянск-на-Кубани",
   "Смоленск",
   "Соликамск",
   "Солнечногорск",
   "Сосновый Бор",
   "Сочи",
   "Ставрополь",
   "Старый Оскол",
   "Стерлитамак",
   "Ступино",
   "Сургут",
   "Сызрань",
   "Сыктывкар",
   "Таганрог",
   "Тамбов",
   "Тверь",
   "Тимашевск",
   "Тихвин",
   "Тихорецк",
   "Тобольск",
   "Тольятти",
   "Томск",
   "Троицк",
   "Туапсе",
   "Туймазы",
   "Тула",
   "Тюмень",
   "Узловая",
   "Улан-Удэ",
   "Ульяновск",
   "Урус-Мартан",
   "Усолье-Сибирское",
   "Уссурийск",
   "Усть-Илимск",
   "Уфа",
   "Ухта",
   "Феодосия",
   "Фрязино",
   "Хабаровск",
   "Ханты-Мансийск",
   "Хасавюрт",
   "Химки",
   "Чайковский",
   "Чапаевск",
   "Чебоксары",
   "Челябинск",
   "Черемхово",
   "Череповец",
   "Черкесск",
   "Черногорск",
   "Чехов",
   "Чистополь",
   "Чита",
   "Шадринск",
   "Шали",
   "Шахты",
   "Шуя",
   "Щекино",
   "Щелково",
   "Электросталь",
   "Элиста",
   "Энгельс",
   "Южно-Сахалинск",
   "Юрга",
   "Якутск",
   "Ялта",
   "Ярославль"
 ]


class CitiesList {
    constructor(arr, id, first = 'А') {
        this.block = document.getElementById(id);
        this.citiesList = arr;
        this.navLetters = [];
        this.citiesNav = this.block.querySelector('.change-city-nav');
        this.citiesBlock = this.block.querySelector('.change-city-container');
        this.firstLetter = first;
        this.activeIndex = 0;
    }

    navigationArr() {
        let arr = this.citiesList;
        for (let i = 0; i < arr.length; i++) {
            this.navLetters.push(arr[i][0]);
        }
        this.navLetters = this.uniqueNav(this.navLetters);
    }

    uniqueNav(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];
            obj[str] = true;
        }
        return Object.keys(obj);
    }

    createNavnList() {
        let navArr = this.navLetters;
        for (let i = 0; i < navArr.length; i++) {
            let navItemBlock = document.createElement('div');
            let navItemSpan = document.createElement('span');
            navItemBlock.classList.add('change-city-nav__item');
            navItemSpan.innerText = navArr[i];
            navItemBlock.appendChild(navItemSpan);
            // if(navArr[i] === this.firstLetter) {
            //     navItemBlock.classList.add('change-city-nav__item--active');
            // }
            if (i === this.activeIndex) {
                navItemBlock.classList.add('change-city-nav__item--active');
            }
            this.citiesNav.appendChild(navItemBlock);
        }
    }

    createMainList() {
        let navArr = this.navLetters;
        let citiesArr = this.citiesList;
        for (let i = 0; i < navArr.length; i++) {
            let area = document.createElement('div');
            let count = 0;
            let arrCities = [];
            area.classList.add('change-city-block');

            for (let k = 0; k < citiesArr.length; k++) {
                if (navArr[i] === citiesArr[k][0]) {
                    arrCities.push(citiesArr[k]);
                }
            }


            for (let j = 0; j < 3; j++) {

                let col = document.createElement('div');
                col.classList.add('change-city-column');

                for (let l = 0; l < Math.ceil(arrCities.length / 3); l++) {
                    if (count < arrCities.length) {
                        let citiItem = document.createElement('p');
                        citiItem.classList.add('change-city-block__item');
                        let text = arrCities[count];
                        citiItem.innerText = text;

                        citiItem.addEventListener('click', function() {
                            let selectCity = new changeCity(text);
                            $.magnificPopup.close();
                            selectCity.init();
                        });
                        col.appendChild(citiItem);
                        count++;
                    }
                    else {
                        break;
                    }
                }
                area.appendChild(col);
            }

            if (i === this.activeIndex) {
                area.classList.add('change-city-block--active');
            }
            this.citiesBlock.appendChild(area);
        }
        this.changeActiveCity();
    }

    changeActiveCity() {
        let arr = this.block.querySelectorAll('.change-city-nav__item');
        let arrBlock = this.block.querySelectorAll('.change-city-block');
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', () => {
                if (this.activeIndex !== i) {
                    arr[this.activeIndex].classList.remove('change-city-nav__item--active');
                    arrBlock[this.activeIndex].classList.remove('change-city-block--active');
                    arr[i].classList.add('change-city-nav__item--active');
                    arrBlock[i].classList.add('change-city-block--active');
                    this.activeIndex = i;
                }
            })
        }
    }

    init() {
        this.navigationArr();
        this.createNavnList();
        this.createMainList();
    }
}


class changeCity {
    constructor(str) {
        this.cityText = str;
        this.city = document.getElementById('city');
        this.cityBtn = this.city.querySelector('.city__btn');
        this.confirmBtn = this.city.querySelector('.city__confirm-btn');
        this.nameText = this.city.querySelectorAll('.city__name');
    }

    showBlockChangeCity() {
        this.city.classList.add('city--open');
    }

    closeBlockChangeCity() {
        this.city.classList.remove('city--open');
    }

    addTextName() {
        let arr = this.nameText;
        let text = this.cityText;
        for ( let i=0; i < arr.length ; i++ ) {
            arr[i].innerText =  text;
        }
    }

    init() {
        this.addTextName();
        this.closeBlockChangeCity();
        this.cityBtn.addEventListener('click',()=> {
            this.showBlockChangeCity();
        });
        this.confirmBtn.addEventListener('click', ()=> {
            this.city.classList.remove('city--open');
        });
    }
}


let popupCities = new CitiesList(cityArr, 'change-city-form');
popupCities.init();
