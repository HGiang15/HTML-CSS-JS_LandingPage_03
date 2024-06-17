const links = document.querySelectorAll(".navbar__link");
const items = document.querySelectorAll(".navbar__item");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("navbar__item--active"));
    links.forEach((link) => link.classList.remove("navbar__link--active"));

    items[index].classList.add("navbar__item--active");
    link.classList.add("navbar__link--active");
  });
});

// -- Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}
