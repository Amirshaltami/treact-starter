function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener("DOMContentLoaded", function () {
    const modalLinks = document.querySelectorAll(".modal__link");
    modalLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });
});