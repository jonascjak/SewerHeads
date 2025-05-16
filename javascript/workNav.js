const pageContent = {
    about: {
        main: `
      <p>A production company by Thomas Beder & Sasha Bloor</p>`,
        secondary: "A website by Jonas Jakobsen & Peter Bang."
    },
    contact: {
        main: `
      <p>contact@sewerheadfilms.com</p>`,
        secondary: "Feel free to reach out."
    },
    shop: {
        main: `
      <p>coming soon</p>`,
        secondary: "Our products will be available soon."
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.navigate = function (page) {
        const content = document.getElementById("content");

        navbar.style.display = "none";
        content.style.height = "100vh";

        const mainContent = pageContent[page]?.main || '<p>Siden ikke fundet brors</p>'
        const secondaryContent = pageContent[page]?.secondary || '<p>Siden ikke fundet brors</p>'

        content.innerHTML = `
        <div id="close" onclick="clearContent()">X</div>
        <div id="description">
            ${mainContent}
        </div>
        <div id="secondary-description">
        ${secondaryContent}
        </div>
        `;
    }

    window.clearContent = function () {
        const content = document.getElementById("content");
        const navbar = document.querySelector(".navbar");

        // Tømmer indholdet
        content.innerHTML = ``;

        // Viser navbar igen
        navbar.style.display = "flex";
        navbar.style.position = "relative";
        content.style.height = "auto";

        // Genskab portfolio grid
        window.renderPortfolioGrid();
    };

});
