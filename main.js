import Lenis from "lenis";

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

AOS.init({
  once: true,
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
    nav: true,
    margin: 30,
  });

  $(".arrow-prev").click(() => $(".owl-prev")[0].click());
  $(".arrow-next").click(() => $(".owl-next")[0].click());
});
