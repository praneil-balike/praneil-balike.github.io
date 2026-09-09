const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileViewport = window.matchMedia("(max-width: 700px)");

function setNavState(isOpen) {
  navLinks.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navToggle.textContent = isOpen ? "Close" : "Menu";
}

if (navToggle && navLinks) {
  document.body.classList.add("nav-ready");
  navToggle.addEventListener("click", () => {
    setNavState(navToggle.getAttribute("aria-expanded") !== "true");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNavState(false);
      if (mobileViewport.matches) {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
        }
      }
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      setNavState(false);
      navToggle.focus();
    }
  });
  mobileViewport.addEventListener("change", () => {
    if (mobileViewport.matches && navLinks.contains(document.activeElement)) {
      navToggle.focus();
    }
    setNavState(false);
  });
}
