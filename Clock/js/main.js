
window.onload = function(){

    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    var hourBg = document.querySelector('#hour-bg circle');
    var minuteBg = document.querySelector('#minute-bg circle');
    var secondsBg = document.querySelector('#second-bg circle');

    function circle(id, count, current){
        var perimeter = 615;
        var currentLine = perimeter - (perimeter/count * current);
        id.style.strokeDashoffset = currentLine;
    }

    function nowDate() {
        var now = new Date();
        var curHour = now.getHours();
        var curMinute = now.getMinutes();
        var curSecond = now.getSeconds();

        hour.innerHTML = curHour;
        circle(hourBg, 24, curHour);

        minute.innerHTML = curMinute;
        circle(minuteBg, 60, curMinute);

        second.innerHTML = curSecond;
        circle(secondsBg, 60, curSecond);
    }
    nowDate();

    setInterval(function(){
        nowDate();
    }, 1000);
};