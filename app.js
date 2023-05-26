function updateClock(){
    let currentTime = new Date();

    // Get hours, minutes & seconds from Date() Object
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Format hours, minutes & seconds
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    // get the element to show clock in DOM
    let clockElement = document.getElementById('clock');
    clockElement.innerHTML = '<div><span id="hours">' + hours + ':</span><span id="minutes">' + minutes + ':</span><span id="seconds">' + seconds + '</span>';
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

setInterval(updateClock, 1000);