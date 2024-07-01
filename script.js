const currentTimeElement = document.getElementById("currentTime");
const currentDayElement = document.getElementById("currentDay");

function updateTime() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Africa/Lagos",
  });
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  currentTimeElement.textContent = currentTime;
  currentDayElement.textContent = currentDay;
}

setInterval(updateTime, 1000);
