import Lenis from "lenis";
AOS.init();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    if (scrollDirection === "up") {
      // console.log(scrollDirection);
      document.getElementById("navbar").style.top = "1.875rem";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    } else {
      document.getElementById("navbar").style.top = "-5rem";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
