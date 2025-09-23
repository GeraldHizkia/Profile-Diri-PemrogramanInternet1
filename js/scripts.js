const toggler = document.getElementById("toggler");
const navLinks = document.getElementById("nav-links");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Ubah ikon burger jadi "X"
  const icon = toggler.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
