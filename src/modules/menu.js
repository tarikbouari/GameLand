const menuIcon = document.getElementById("menu");
const navUl = document.getElementById("nav-ul");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  navUl.classList.toggle("ul-toggle");
});
