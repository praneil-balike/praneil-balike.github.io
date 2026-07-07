const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealEls = document.querySelectorAll(".reveal");

function setNavState(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  navLinks.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(isOpen ? "aria-label" : "aria-label", isOpen ? "Close navigation" : "Open navigation");
}

navToggle.addEventListener("click", () => {
  const isOpen = !navLinks.classList.contains("open");
  setNavState(isOpen);
});

navItems.forEach((item) => {
  item.addEventListener("click", () => setNavState(false));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealEls.forEach((el) => observer.observe(el));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavState(false);
  }
});
