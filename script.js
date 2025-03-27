console.log("JS is working");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

//Toggle the menu when burger is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//Close the menu when clicking a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
