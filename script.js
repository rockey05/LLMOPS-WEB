const title = new SplitType("#abttitle");
const info = new SplitType("#abtinfo");

const triggerAnimations = () => {
  gsap.to('.abttitle .char', {
    y: 0,
    duration: .1,
    ease: "power2.out"
  });

  gsap.to('#row0 .char', {
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to('#row1 .char', {
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to('#row2 .char', {
    y: 0,
    delay: 0.5,
    duration: 1,
    ease: "power2.out"
  });
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Debouncing the animation trigger
      if (!entry.target.animationTriggered) {
        entry.target.animationTriggered = true;
        triggerAnimations();
      }
      observer.disconnect(); // Stop observing after animation is triggered
    }
  });
}, { threshold: 0.1 });

observer.observe(document.querySelector('.content-container'));
