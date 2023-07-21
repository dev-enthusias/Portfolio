'use strict';
//Elements
const aboutSection = document.querySelector('.about-section');
const aboutTitle = document.querySelector('.about-title');

//About Title Animation
function animateAbout() {
  const animateAboutTitle = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    aboutTitle.style.transform = `translate(-50%, -50%) translateX(0) translateY(0)`;

    observer.unobserve(aboutSection);
  };

  const observer = new IntersectionObserver(animateAboutTitle, {
    root: null,
    threshold: 0.2,
  });

  observer.observe(aboutSection);
}
animateAbout();
