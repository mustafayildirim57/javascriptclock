let nameDOM = document.querySelector('#myName')
nameDOM.innerHTML = prompt('lutfen adiniz giriniz')

function showTime() {
    var date = new Date()
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var day = days[date.getDay()]
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + " " +  day
    document.querySelector('#myClock').innerHTML = time
    setTimeout(showTime, 1000);
    
}
window.onload = showTime;