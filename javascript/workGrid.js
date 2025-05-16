import {collections} from "./collections.js";

document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolio-grid");


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

        console.log(portfolioItem.parentNode);

        portfolioGrid.appendChild(portfolioItem);
    })
})