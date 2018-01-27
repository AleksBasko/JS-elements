
<a href="http://dev.aleksbasko.com/pages/Simple-selecet/">**http://dev.aleksbasko.com/pages/Simple-selecet/**</a>
### Simple select
Простой класс для стилизации _select_.
Не использует никаких библиотек.
Помещает кастомный _select_ в тот же блок в котором находится и нативный _select_.

Может принимать на вход ряд параметров:
* Клас блока в котором находится _select_ __(обязательный параметр)__
* Можем так же указать имя класса у элемента _select_, __(default берется первый тег _select_ в блоке )__
* анимация, если выпадающий список должен плавно появляться, __boolean( default false )__
* скорость анимации в ms, __int( default 300 )__



```
let SimpleSelect = new Select({
  block: 'simple-select',
  animate: true,
  speed: 700
});
SimpleSelect.init();
```
