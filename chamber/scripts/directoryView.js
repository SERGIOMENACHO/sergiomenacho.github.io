const ourScreen = document.querySelector(".businesses");
const links = document.querySelectorAll(".view-option ul li");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    /* Remove all the attribute before adding a new one*/
    links.forEach(function (item) {
      item.classList.remove("active");

      ourScreen.classList.remove("grid-view");
      ourScreen.classList.remove("list-view");
    });

    link.classList.add("active");
    ourScreen.classList.add(link.getAttribute("data-view"));
  });
});
