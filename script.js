
let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const laps = document.getElementById('laps');

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    display.textContent = 
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
}

function startStop() {
    if (startStopBtn.textContent === 'Start') {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Pause';
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    elapsedTime = 0;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
}

function recordLap() {
    const lapTime = document.createElement('li');
    lapTime.textContent = display.textContent;
    laps.appendChild(lapTime);
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);
