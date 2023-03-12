const hamburgerButton = document.querySelector('#hamburger');
const nav = document.querySelector("nav")

hamburgerButton.addEventListener("click", () => {
    console.log("it is working")
    nav.classList.toggle('open');
})


// creates an alert message on Monday and tUESDAY//
let date = new Date();
let day = date.getDay();
if (day == 0 || day == 3 || day == 4 || day == 5 || day == 6) {
    document.querySelector(".alert").style.display = "none";
}
else if (day == 1|| day == 2) {
   document.querySelector(".alert").style.display = "block";
}

//Display today's date//
 const options2 = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

document.querySelector('#date').textContent = new Date(Date.now()).toLocaleString('en-US', options2);

let lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;


/* -------------------------------FORM------------------------------------ */
const hiddenInput = document.querySelector("#loadDate");
const submitBtn = document.querySelector('input[type="submit"]');
// const form = document.querySelector("form")

submitBtn.addEventListener('click', ()=> {
    hiddenInput.value = document.lastModified;
    console.log(hiddenInput.value);
})