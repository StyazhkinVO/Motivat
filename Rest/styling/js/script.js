function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var date = now.toDateString();
  
    var clockElement = document.getElementById('clock');
    clockElement.textContent = hours + ':' + minutes + ':' + seconds + ' ' + date;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);