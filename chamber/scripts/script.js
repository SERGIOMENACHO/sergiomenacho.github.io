const hamburgerButton = document.querySelector('#hamburger');
const nav = document.querySelector("nav")

hamburgerButton.addEventListener("click", () => {
    console.log("it is working")
    nav.classList.toggle('open');
})