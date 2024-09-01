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
    delay: 0.5,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.to('#row2 .char', {
    y: 0,
    delay: 0.5,
    duration: 1,
    ease: "power2.out"
  });
};

// Trigger animations immediately
triggerAnimations();
