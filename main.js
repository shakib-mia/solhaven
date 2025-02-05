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
  // Initialize the first carousel
  $(".owl-carousel:not(#partners .owl-carousel)").owlCarousel({
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
    nav: true,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });

  // Initialize the second carousel
  $("#partners .owl-carousel").owlCarousel({
    responsive: {
      0: { items: 2, loop: true, autoplay: true, mouseDrag: true },
      768: { items: 3, loop: true, autoplay: true, mouseDrag: true },
      1024: { items: 5, loop: false, autoplay: false, mouseDrag: false },
    },
    nav: true,
    margin: 96,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });

  $(".arrow-prev").click(() => $(".owl-prev")[0].click());
  $(".arrow-next").click(() => $(".owl-next")[0].click());
});

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".accordion-icon");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove("rotate");
    } else {
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = null;
        item.previousElementSibling
          .querySelector(".accordion-icon")
          .classList.remove("rotate");
      });
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("rotate");
    }
  });

  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains("active");

    // Close all accordion items
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Toggle active class on clicked accordion item
    if (!isActive) {
      accordionItem.classList.add("active");
    }
  });
});

document.getElementById("year").innerText = new Date().getFullYear();
