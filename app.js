
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const laps = document.getElementById('laps');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', recordLap);

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startButton.disabled = true;
    pauseButton.disabled = false;
}

function pause() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    elapsedTime = 0;
    laps.innerHTML = '';
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let time = new Date(elapsedTime);
    let minutes = time.getUTCMinutes().toString().padStart(2, '0');
    let seconds = time.getUTCSeconds().toString().padStart(2, '0');
    let milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function recordLap() {
    let lapTime = display.textContent;
    let lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    laps.appendChild(lapItem);
}
