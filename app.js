fetch("./assets/menu.svg")
    .then(response => response.text())
    .then(data => {
        let menuContainer = document.getElementById("menu-container");
        menuContainer.innerHTML = data;
        let svgElement = menuContainer.querySelector("svg");
        svgElement.classList.add("menu-icon");
        // Force correct scaling
        //svgElement.setAttribute("width", "50");
        //svgElement.setAttribute("height", "50");
        // Fix cropping issue
        //svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const header = dropdown.querySelector(".dropdown-header");
        header.addEventListener("click", () => {
            dropdown.classList.toggle("open");
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const projectArrows = document.querySelectorAll(".project-arrow");

    projectArrows.forEach((arrow) => {
        arrow.addEventListener("click", () => {
            const details = arrow.closest(".school-text").querySelector(".project-details");
            
            details.classList.toggle("visible");
            arrow.classList.toggle("rotated");
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const carousels = [
        { id: "programmingCarousel", progressId: "progress1" },
        { id: "libraryCarousel", progressId: "progress2" },
        { id: "toolsCarousel", progressId: "progress3" },
        { id: "platformsCarousel", progressId: "progress4" }
    ];

    function updateProgress(carousel, progress) {
        const totalWidth = carousel.scrollWidth;
        const visibleWidth = carousel.clientWidth;

        // If all images fit in the viewport, set progress to 100%
        if (totalWidth === visibleWidth) {
            progress.style.width = "100%";
            return;
        }

        progress.style.width = ((carousel.scrollLeft + visibleWidth) / totalWidth) * 100 + "%";
    }

    function initializeProgressBars() {
        carousels.forEach(({ id, progressId }) => {
            const carousel = document.getElementById(id);
            const progress = document.getElementById(progressId);
            updateProgress(carousel, progress);
        });
    }

    // Attach event listeners
    carousels.forEach(({ id, progressId }) => {
        const carousel = document.getElementById(id);
        const progress = document.getElementById(progressId);
        
        if (carousel) {
            carousel.addEventListener("scroll", () => updateProgress(carousel, progress));
        }
    });

    // Update progress on window resize
    window.addEventListener("resize", initializeProgressBars);

    // Initialize progress bars on page load
    initializeProgressBars();
});





const githubBtn = document.querySelector(".github");
const linkedinBtn = document.querySelector(".linkedin");
const xBtn = document.querySelector(".x");

githubBtn.addEventListener("click", () => {
    window.open("https://github.com/FredArgoX", "_blank");
});
linkedinBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/fredy-arce-gonzalez-x", "_blank");
});
xBtn.addEventListener("click", () => {
    window.open("https://x.com/FredyArgoX", "_blank");
});

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");

p1.addEventListener("click", () => {
    window.open("https://fredargox.github.io/Crypto_Tracker_PLS/", "_blank");
});
p2.addEventListener("click", () => {
    window.open("https://xwebz.github.io/Angelica-Arteaga-Canada-Presentation/", "_blank");
});
p3.addEventListener("click", () => {
    window.open("https://000web.github.io/ILOVEMICHE/menu.html", "_blank");
});
p4.addEventListener("click", () => {
    window.open("https://colab.research.google.com/drive/1qaRy7EYvqZbBwTiBlDP_KXkAEpXJ2DBJ#scrollTo=1viLEDR4p1Nh", "_blank");
});
p5.addEventListener("click", () => {
    window.open("https://colab.research.google.com/drive/1aes4DJWnVsEarGdMy63CevmZRzSIhBod#scrollTo=1viLEDR4p1Nh", "_blank");
});

