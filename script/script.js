/* =========================================
   BABA KALYANI - PORTFOLIO JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE NAVIGATION
       ===================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    /* Close mobile menu after clicking a link */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* =====================================
       ACTIVE NAVIGATION LINK
       ===================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);


    /* =====================================
       NAVBAR SCROLL EFFECT
       ===================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(10, 10, 15, 0.96)";

        } else {

            navbar.style.background =
                "rgba(10, 10, 15, 0.85)";

        }

    }

    window.addEventListener("scroll", updateNavbar);


    /* =====================================
       BACK TO TOP BUTTON
       ===================================== */

    const backToTop = document.getElementById("backToTop");

    function updateBackToTop() {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", updateBackToTop);

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================
       SCROLL REVEAL ANIMATION
       ===================================== */

    const animatedElements = document.querySelectorAll(
        ".section, .hero-text, .hero-card"
    );

    const observerOptions = {
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        observerOptions
    );

    animatedElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================
       CURRENT YEAR
       ===================================== */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =====================================
       SMOOTH SCROLL
       ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       INITIALIZE
       ===================================== */

    updateActiveNav();
    updateNavbar();
    updateBackToTop();

});
