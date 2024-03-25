const zeroPad = (num, places) => String(num).padStart(places, '0')

function updateTimer() {
    const targetDate = new Date('March 30, 2024 16:00:00 GMT+0800');
    const now = new Date();
    const timeLeft = targetDate - now;

    const timeDisplay = document.getElementById('value');

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    const countdownString = `${zeroPad(days, 2)}:${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`;

    timeDisplay.textContent = countdownString;
}

setInterval(updateTimer, 1000)