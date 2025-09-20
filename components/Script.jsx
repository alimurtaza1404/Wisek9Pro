"use client";
import { useEffect } from "react";

export default function Script() {
  useEffect(() => {
    /* --- Slider 1 (accreditations) --- */
    const sliderTrack = document.getElementById("sliderTrack");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const cardWidth = 150 + 16; // matches original

    function onNext() {
      if (!sliderTrack) return;
      sliderTrack.style.transition = "transform 0.5s ease-in-out";
      sliderTrack.style.transform = `translateX(-${cardWidth}px)`;
      function handler() {
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = "translateX(0)";
        sliderTrack.appendChild(sliderTrack.firstElementChild);
        sliderTrack.removeEventListener("transitionend", handler);
      }
      sliderTrack.addEventListener("transitionend", handler);
    }
    function onPrev() {
      if (!sliderTrack) return;
      sliderTrack.style.transition = "none";
      sliderTrack.insertBefore(sliderTrack.lastElementChild, sliderTrack.firstElementChild);
      sliderTrack.style.transform = `translateX(-${cardWidth}px)`;
      setTimeout(() => {
        sliderTrack.style.transition = "transform 0.5s ease-in-out";
        sliderTrack.style.transform = "translateX(0)";
      });
    }
    nextBtn?.addEventListener("click", onNext);
    prevBtn?.addEventListener("click", onPrev);

    /* --- Slider 2 (cities slider) --- */
    const sliderTrack2 = document.getElementById("sliderTrack2");
    const nexBtn = document.getElementById("nexBtn");
    const preBtn = document.getElementById("preBtn");
    const cardWidth2 = 280 + 24;
    const next2 = () => {
      if (!sliderTrack2) return;
      sliderTrack2.style.transition = "transform 0.5s ease-in-out";
      sliderTrack2.style.transform = `translateX(-${cardWidth2}px)`;
      function handler() {
        sliderTrack2.style.transition = "none";
        sliderTrack2.style.transform = "translateX(0)";
        sliderTrack2.appendChild(sliderTrack2.firstElementChild);
        sliderTrack2.removeEventListener("transitionend", handler);
      }
      sliderTrack2.addEventListener("transitionend", handler);
    };
    const prev2 = () => {
      if (!sliderTrack2) return;
      sliderTrack2.style.transition = "none";
      sliderTrack2.insertBefore(sliderTrack2.lastElementChild, sliderTrack2.firstElementChild);
      sliderTrack2.style.transform = `translateX(-${cardWidth2}px)`;
      setTimeout(() => {
        sliderTrack2.style.transition = "transform 0.5s ease-in-out";
        sliderTrack2.style.transform = "translateX(0)";
      });
    };
    nexBtn?.addEventListener("click", next2);
    preBtn?.addEventListener("click", prev2);

    /* --- Header scroll effect --- */
    const header = document.getElementById("header");
    const onScrollHeader = () => {
      if (!header) return;
      if (window.scrollY > 100) {
        header.style.background = "rgba(0, 0, 0, 0.95)";
        header.style.backdropFilter = "blur(10px)";
      } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
      }
    };
    window.addEventListener("scroll", onScrollHeader);

    /* --- Mobile menu toggle --- */
    const mobileMenuBurger = document.getElementById("mobile-menu-burger");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    function toggleMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "auto";
    }
    mobileMenuBurger?.addEventListener("click", toggleMobileMenu);
    mobileMenuClose?.addEventListener("click", toggleMobileMenu);
    mobileMenu?.addEventListener("click", (e) => {
      if (e.target === mobileMenu) toggleMobileMenu();
    });

    /* --- Smooth scrolling for in-page anchors --- */
    const anchors = document.querySelectorAll('a[href^="#"]');
    const smoothHandler = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (mobileMenu && mobileMenu.classList.contains("active")) toggleMobileMenu();
      }
    };
    anchors.forEach(a => a.addEventListener("click", smoothHandler));

    /* --- Parallax effect (basic) --- */
    const parallaxEl = document.querySelector(".parallax");
    const onParallax = () => {
      if (!parallaxEl) return;
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      parallaxEl.style.transform = `translateY(${rate}px)`;
    };
    window.addEventListener("scroll", onParallax);

    /* --- Counters using IntersectionObserver --- */
    const counters = document.querySelectorAll("[data-count]");
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-count") || "0", 10);
        let current = 0;
        const increment = Math.max(1, Math.floor(target / 50));
        function update() {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(update);
          } else {
            counter.textContent = target.toString();
          }
        }
        update();
        countObserver.unobserve(counter);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObserver.observe(c));

    /* --- Drag/Touch support for .carousel-container (basic) --- */
    const carousel = document.querySelector(".carousel-container");
    if (carousel) {
      let isDown = false, startX = 0, scrollLeft = 0;
      const onMouseDown = (e) => { isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; };
      const onMouseUp = () => { isDown = false; };
      const onMouseLeave = () => { isDown = false; };
      const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
      };
      carousel.addEventListener("mousedown", onMouseDown);
      carousel.addEventListener("mouseup", onMouseUp);
      carousel.addEventListener("mouseleave", onMouseLeave);
      carousel.addEventListener("mousemove", onMouseMove);
      // Simple touch handlers
      carousel.addEventListener("touchstart", (e) => { startX = e.touches[0].pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; });
      carousel.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
      });
    }

    /* Cleanup on unmount */
    return () => {
      nextBtn?.removeEventListener("click", onNext);
      prevBtn?.removeEventListener("click", onPrev);
      nexBtn?.removeEventListener("click", next2);
      preBtn?.removeEventListener("click", prev2);
      window.removeEventListener("scroll", onScrollHeader);
      mobileMenuBurger?.removeEventListener("click", toggleMobileMenu);
      mobileMenuClose?.removeEventListener("click", toggleMobileMenu);
      mobileMenu?.removeEventListener("click", () => {});
      anchors.forEach(a => a.removeEventListener("click", smoothHandler));
      window.removeEventListener("scroll", onParallax);
      countObserver.disconnect();
      // more cleanup not shown for brevity
    };
  }, []);

  return null;
}
