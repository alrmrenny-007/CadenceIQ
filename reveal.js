/* reveal.js — slide/fade-in animations as sections enter the viewport.
   Works for both static markup (present at page load) and content
   injected later by main.js / artist.js / artists-directory.js —
   those scripts call window.initScrollReveal() again after rendering. */

window.initScrollReveal = function (root) {
  root = root || document;

  if (!window.__revealObserver) {
    window.__revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            window.__revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
  }

  root.querySelectorAll(".reveal").forEach((el) => {
    if (el.dataset.revealObserved) return;
    el.dataset.revealObserved = "1";

    // If it's already on screen at observe-time (e.g. above the fold),
    // reveal it immediately rather than waiting on a scroll event.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      el.classList.add("in-view");
      return;
    }
    window.__revealObserver.observe(el);
  });
};

document.addEventListener("DOMContentLoaded", () => window.initScrollReveal());
