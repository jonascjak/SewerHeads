import { collections } from "./collections.js";

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolioGrid();
});

// Funktionen der genererer portfolio grid'et
function renderPortfolioGrid() {
    const portfolioGrid = document.createElement("div");
    window.renderPortfolioGrid = renderPortfolioGrid;

    portfolioGrid.id = "portfolio-grid"; // Sætter ID på grid'et

    Object.keys(collections).forEach((key) => {
        const collection = collections[key];

        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");

        portfolioItem.innerHTML = `
            <img src="${collection.cover}" alt="${collection.title}">
            <div class="portfolio-title">${collection.title}</div>
        `;

        portfolioItem.addEventListener("click", () => {
            if (collection.type === "image") {
                window.location.href = `collection.html?name=${key}`;
            } else if (collection.type === "video") {
                window.location.href = `collection.html?name=${key}`;
            }
        });

        portfolioGrid.appendChild(portfolioItem);
    });

    const content = document.getElementById("content");
    content.appendChild(portfolioGrid);
}
