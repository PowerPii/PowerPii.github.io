var days = 0.0;
var hours = 0.0;
var minutes = 0.0;
var seconds = 0.0;

var buttonUnit = "seconds";
var value = 0.0;

var daysButton = document.getElementById('days')
var hoursButton = document.getElementById('hours')
var minutesButton = document.getElementById('minutes')
var secondsButton = document.getElementById('seconds')

function updateTimer() {
    const targetDate = new Date('March 30, 2024 16:00:00 GMT+0800');
    const now = new Date();
    const diff = targetDate - now;

    const timeDisplay = document.querySelector('.timer-countdown-div h1');
    document.getElementById('unit').textContent = buttonUnit;

    seconds = diff / 1000
    minutes = seconds / 60;
    hours = minutes / 60;
    days = hours / 24;

    if (buttonUnit == "days") timeDisplay.textContent = Math.floor(days);
    else if (buttonUnit == "hours") timeDisplay.textContent = Math.floor(hours);
    else if (buttonUnit == "minutes") timeDisplay.textContent = Math.floor(minutes);
    else if (buttonUnit == "seconds") timeDisplay.textContent = Math.floor(seconds);
}

function clearButtonClass() {
    daysButton.classList.remove('active');
    hoursButton.classList.remove('active');
    minutesButton.classList.remove('active');
    secondsButton.classList.remove('active');
}

document.getElementById('days').addEventListener('click', function() {
    clearButtonClass();
    buttonUnit = this.id
    this.classList.add('active');
    updateTimer();
})

document.getElementById('hours').addEventListener('click', function() {
    clearButtonClass();
    buttonUnit = this.id
    this.classList.add('active');
    updateTimer();
})

document.getElementById('minutes').addEventListener('click', function() {
    clearButtonClass();
    buttonUnit = this.id
    this.classList.add('active');
    updateTimer();
})

document.getElementById('seconds').addEventListener('click', function() {
    clearButtonClass();
    buttonUnit = this.id
    this.classList.add('active');
    updateTimer();
})

setInterval(updateTimer, 500)