import { collections } from "./collections.js";

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolioGrid();
});

function renderPortfolioGrid() {
    const portfolioGrid = document.createElement("div");
    window.renderPortfolioGrid = renderPortfolioGrid;
    portfolioGrid.id = "portfolio-grid";


    Object.keys(collections).reverse().forEach((key) => {
        const collection = collections[key];

        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");

        // Lazy loading implemented here
        portfolioItem.innerHTML = `
            <img src="${collection.cover}" alt="${collection.title}" loading="lazy">
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

export function goBack(){
    history.back();
}
