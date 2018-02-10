
let getCities = new XMLHttpRequest();
getCities.open('GET', 'pages/Cities-points/data/cities.json', true);
getCities.onload = function () {
    if (getCities.status >= 200 && getCities.status < 400) {
        let resp = JSON.parse(getCities.responseText);
        console.log(resp);
        // let popupCities = new CitiesList(resp, 'change-city-form');
        // popupCities.init();
    }
};
getCities.send();


// class CitiesList {
//     constructor(arr, id, first = 'А') {
//         this.block = document.getElementById(id);
//         this.citiesList = arr;
//         this.navLetters = [];
//         this.citiesNav = this.block.querySelector('.change-city-nav');
//         this.citiesBlock = this.block.querySelector('.change-city-container');
//         this.firstLetter = first;
//         this.activeIndex = 0;
//     }
//
//     navigationArr() {
//         let arr = this.citiesList;
//         for (let i = 0; i < arr.length; i++) {
//             this.navLetters.push(arr[i][0]);
//         }
//         this.navLetters = this.uniqueNav(this.navLetters);
//     }
//
//     uniqueNav(arr) {
//         let obj = {};
//         for (let i = 0; i < arr.length; i++) {
//             let str = arr[i];
//             obj[str] = true;
//         }
//         return Object.keys(obj);
//     }
//
//     createNavnList() {
//         let navArr = this.navLetters;
//         for (let i = 0; i < navArr.length; i++) {
//             let navItemBlock = document.createElement('div');
//             let navItemSpan = document.createElement('span');
//             navItemBlock.classList.add('change-city-nav__item');
//             navItemSpan.innerText = navArr[i];
//             navItemBlock.appendChild(navItemSpan);
//             // if(navArr[i] === this.firstLetter) {
//             //     navItemBlock.classList.add('change-city-nav__item--active');
//             // }
//             if (i === this.activeIndex) {
//                 navItemBlock.classList.add('change-city-nav__item--active');
//             }
//             this.citiesNav.appendChild(navItemBlock);
//         }
//     }
//
//     createMainList() {
//         let navArr = this.navLetters;
//         let citiesArr = this.citiesList;
//         for (let i = 0; i < navArr.length; i++) {
//             let area = document.createElement('div');
//             let count = 0;
//             let arrCities = [];
//             area.classList.add('change-city-block');
//
//             for (let k = 0; k < citiesArr.length; k++) {
//                 if (navArr[i] === citiesArr[k][0]) {
//                     arrCities.push(citiesArr[k]);
//                 }
//             }
//
//
//             for (let j = 0; j < 3; j++) {
//
//                 let col = document.createElement('div');
//                 col.classList.add('change-city-column');
//
//                 for (let l = 0; l < Math.ceil(arrCities.length / 3); l++) {
//                     if (count < arrCities.length) {
//                         let citiItem = document.createElement('p');
//                         citiItem.classList.add('change-city-block__item');
//                         let text = arrCities[count];
//                         citiItem.innerText = text;
//
//                         citiItem.addEventListener('click', function() {
//                             let selectCity = new changeCity(text);
//                             $.magnificPopup.close();
//                             selectCity.init();
//                         });
//                         col.appendChild(citiItem);
//                         count++;
//                     }
//                     else {
//                         break;
//                     }
//                 }
//                 area.appendChild(col);
//             }
//
//             if (i === this.activeIndex) {
//                 area.classList.add('change-city-block--active');
//             }
//             this.citiesBlock.appendChild(area);
//         }
//         this.changeActiveCity();
//     }
//
//     changeActiveCity() {
//         let arr = this.block.querySelectorAll('.change-city-nav__item');
//         let arrBlock = this.block.querySelectorAll('.change-city-block');
//         for (let i = 0; i < arr.length; i++) {
//             arr[i].addEventListener('click', () => {
//                 if (this.activeIndex !== i) {
//                     arr[this.activeIndex].classList.remove('change-city-nav__item--active');
//                     arrBlock[this.activeIndex].classList.remove('change-city-block--active');
//                     arr[i].classList.add('change-city-nav__item--active');
//                     arrBlock[i].classList.add('change-city-block--active');
//                     this.activeIndex = i;
//                 }
//             })
//         }
//     }
//
//     init() {
//         this.navigationArr();
//         this.createNavnList();
//         this.createMainList();
//     }
// }
//
//
// $(document).ready(function () {
//     let cityChangeBtn = $('.city__change-btn');
//     cityChangeBtn.magnificPopup({
//         alignTop: true,
//         type: 'inline',
//         preloader: false,
//         focus: '#name',
//         callbacks: {
//             beforeOpen: function () {
//                 if ($(window).width() < 700) {
//                     this.st.focus = false;
//                 } else {
//                     this.st.focus = '#name';
//                 }
//             },
//             open: function () {
//                 startSelect();
//             }
//         }
//     });
// });
//
// function startSelect() {
//     let searchCity;
//     let options = {
//         url: "/data/cities.json",
//         list: {
//             match: {
//                 enabled: true
//             },
//             onClickEvent: function () {
//                 // let text = searchCity.val();
//                 // let selectCity = new changeCity(text);
//                 // $.magnificPopup.close();
//                 // selectCity.init();
//             },
//             onChooseEvent: function () {
//                 let text = searchCity.val();
//                 let selectCity = new changeCity(text);
//                 $.magnificPopup.close();
//                 selectCity.init();
//             }
//         }
//     };
//
//     searchCity = $("#change-city-search-input").easyAutocomplete(options);
//
// }
//
//
// class changeCity {
//     constructor(str) {
//         this.cityText = str;
//         this.city = document.getElementById('city');
//         this.cityBtn = this.city.querySelector('.city__btn');
//         this.confirmBtn = this.city.querySelector('.city__confirm-btn');
//         this.nameText = this.city.querySelectorAll('.city__name');
//     }
//
//     showBlockChangeCity() {
//         this.city.classList.add('city--open');
//     }
//
//     closeBlockChangeCity() {
//         this.city.classList.remove('city--open');
//     }
//
//     addTextName() {
//         let arr = this.nameText;
//         let text = this.cityText;
//         for ( let i=0; i < arr.length ; i++ ) {
//             arr[i].innerText =  text;
//         }
//     }
//
//     init() {
//         this.addTextName();
//         this.closeBlockChangeCity();
//         this.cityBtn.addEventListener('click',()=> {
//             this.showBlockChangeCity();
//         });
//         this.confirmBtn.addEventListener('click', ()=> {
//             this.city.classList.remove('city--open');
//         });
//     }
// }
