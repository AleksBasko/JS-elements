
<a href="https://dev.aleksbasko.com/pages/Simple-selecet/">**https://dev.aleksbasko.com/pages/Simple-selecet/**</a>
*** Simple select
Простой класс для стилизации <select>.
Не использует никаких библиотек.
Помещает кастомный <select> в тот же блок в котором находится и нативный <select>.
Может принимать на вход ряд параметров:
* Клас блока в котором находится <select> (обязательный параметр)
* Можем так же указать имя класса у элемента <select>, (default берется первый тег <select> в блоке )
* анимация, если выпадающий список должен плавно появляться, boolean( default false )
* скорость анимации в ms, int( default 300 )

```
let SimpleSelect = new Select({
  block: 'simple-select',
  animate: true,
  speed: 700
});
SimpleSelect.init();
```
