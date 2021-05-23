function togglemenu() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}

var d = new Date();
  var thisYear = d.getFullYear();
  document.getElementById("currentyear").innerHTML = thisYear;
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let fd = new Date(document.lastModified);
  let dayName = days[fd.getDay()];
  let monthName = months[fd.getMonth()];
  let fulldate =
    dayName + ", " + monthName + " " + fd.getDate() + ", " + fd.getFullYear();
  
  document.getElementById("Last-Modified").textContent = fulldate;



