const typedText = document.querySelector("#typed-text");
const year = document.querySelector("#year");
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const phrases = [
  "automate workflows",
  "stabilize systems",
  "simplify complexity",
  "visualize data",
  "build reliability",
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typePhrase() {
  const phrase = phrases[phraseIndex];
  typedText.textContent = phrase.slice(0, charIndex);

  if (!deleting && charIndex < phrase.length) {
    charIndex += 1;
  } else if (deleting && charIndex > 0) {
    charIndex -= 1;
  } else if (!deleting) {
    deleting = true;
    setTimeout(typePhrase, 1300);
    return;
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typePhrase, deleting ? 45 : 85);
}

function setActiveNav() {
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top <= 120 ? section.id : active;
  }, "home");

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
  });
}

year.textContent = new Date().getFullYear();
typePhrase();
setActiveNav();
window.addEventListener("scroll", setActiveNav, { passive: true });
