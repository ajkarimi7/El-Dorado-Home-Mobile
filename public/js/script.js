// [NAV TOGGLE]
const btnToggle = document.querySelector(".btn-toggle");
const navBar = document.querySelector(".nav-target");

btnToggle.addEventListener("click", () => {
  navBar.toggleAttribute("open");
});

// [SLIDER]
var slider = tns({
  container: ".header-slider",
  items: 1,
  mode: "gallery",
  slideBy: "page",
  autoplay: true,
  autoplayTimeout: 9000,
  speed: 900,
  autoplayButtonOutput: false,
  controls: false,
  navAsThumbnails: true,
  navContainer: ".header-controller",
});
