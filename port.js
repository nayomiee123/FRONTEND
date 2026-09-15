// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// PROJECT CARD INTERACTION
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -3;
        const rotateY = ((x / rect.width) - 0.5) * 3;

        card.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    });

});


// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});