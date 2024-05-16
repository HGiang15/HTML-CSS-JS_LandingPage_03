const links = document.querySelectorAll(".navbar__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    link.classList.add("navbar__link--active");
  });
});
