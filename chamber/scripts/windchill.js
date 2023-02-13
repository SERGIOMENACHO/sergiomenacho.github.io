let date = new Date();
let day = date.getDay();
if (day == 0 || day == 3 || day == 4 || day == 5 || day == 6) {
    document.querySelector(".alert").style.display = "none";
}
else if (day == 1|| day == 2) {
   document.querySelector(".alert").style.display = "block";
}

let temp = 33;
let windspeed = 10;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
document.querySelector(".wind-chill-number").textContent = `Wind Chill: ${chill}\u00B0`;