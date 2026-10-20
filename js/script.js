/* =========================================================
   DINESH KUMAR PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    /* Close mobile menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer");


/*
   The footer already contains 2026.
   This keeps it automatically updated in future years.
*/

if (footerYear) {

    const paragraphs =
        footerYear.querySelectorAll("p");


    if (paragraphs.length > 0) {

        paragraphs[0].innerHTML =
            `© ${currentYear} Dinesh Kumar. All Rights Reserved.`;

    }

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const links =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");


        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   PREVENT BROKEN EXTERNAL LINKS
========================================================= */

document
    .querySelectorAll('a[target="_blank"]')
    .forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Opening external link:",
                link.href
            );

        });

    });