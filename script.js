// Get the current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    return hours +":"+ minutes +":"+ seconds+ ":" + milliseconds;
}

// Get the current date
function getCurrentDate() {
    const now = new Date();
    const monthNames = ['JAN', 'FEB', 'March', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const day = now.getDate().toString().padStart(2, '0');
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear().toString().padStart(2, '0');
    return day +"-"+ month +"-"+ year;
}


// Update the time every second
function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = getCurrentTime();
}

// Update the date every second
function updateDate() {
    const currentDateElement = document.getElementById('current-date');
    currentDateElement.textContent = getCurrentDate();
}

updateTime(); // Display the initial time
updateDate(); // Display the initial time
setInterval(updateTime, 1); // Update every second
setInterval(updateDate, 1000)
