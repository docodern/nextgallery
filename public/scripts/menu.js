var menu = document.querySelector(".menuLinks");
var hamIcon = document.querySelector(".ham");

hamIcon.addEventListener("click", changeIcon);

function changeIcon() {
    menu.classList.toggle("showMenu");
    hamIcon.classList.toggle("hamClose");
}