const zeroPad = (num, places) => String(num).padStart(places, '0')

function updateTimer() {
    const targetDate = new Date('June 30, 2024 21:30:00 GMT+0800');
    const now = new Date();
    const timeLeft = targetDate - now;

    const timeDisplay = document.getElementById('value');

    const seconds = Math.ceil(timeLeft/1000)

    const countdownString = `${seconds}`;

    timeDisplay.textContent = countdownString;
}

setInterval(updateTimer, 1000)
