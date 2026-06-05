const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const contactSection = document.querySelector("#contact");
const mobileFloatingQuery = window.matchMedia("(max-width: 820px)");
const testimonialTrack = document.querySelector("[data-testimonial-track]");

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

function updateFloatingBook() {
  const contactIsVisible = contactSection
    ? contactSection.getBoundingClientRect().top < window.innerHeight * 0.82
    : false;
  const shouldShow = (mobileFloatingQuery.matches || window.scrollY > 520) && !contactIsVisible;
  document.body.classList.toggle("show-floating", shouldShow);
}

updateFloatingBook();
window.addEventListener("scroll", updateFloatingBook, { passive: true });
window.addEventListener("resize", updateFloatingBook, { passive: true });
mobileFloatingQuery.addEventListener?.("change", updateFloatingBook);

if (testimonialTrack) {
  if (!testimonialTrack.querySelector("[aria-hidden='true']")) {
    [...testimonialTrack.children].forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      testimonialTrack.append(clone);
    });
  }

  requestAnimationFrame(() => {
    testimonialTrack.classList.add("is-ready");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
