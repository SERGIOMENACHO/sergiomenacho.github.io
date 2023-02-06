let date = new Date();
let day = date.getDay();
if (day == 0 || day == 3 || day == 4 || day == 5 || day == 6) {
    document.querySelector(".alert").style.display = "none";
}
else if (day == 1|| day == 2) {
   document.querySelector(".alert").style.display = "block";
}
