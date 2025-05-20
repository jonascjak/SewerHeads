import { collections } from "./collections.js";

const params = new URLSearchParams(window.location.search);
const collectionName = params.get("name");
const descEl = document.getElementById("collection-description");

function renderImageCollection(images) {
    document.getElementById("videos").style.display = "none";
    document.getElementById("images").style.display = "block";
    const imgEl = document.getElementById("carouselImage");
    const leftControl = document.getElementById("leftControl");
    const rightControl = document.getElementById("rightControl");
    const bottomCounter = document.getElementById("bottomCounter");
    let currentIndex = 0;

    function updateCarousel() {
        const { src, alt } = images[currentIndex];
        imgEl.src = src;
        imgEl.alt = alt;
        bottomCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    leftControl.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    };

    rightControl.onclick = () => {
        currentIndex = (currentIndex + 1 + images.length) % images.length;
        updateCarousel();
    };

    updateCarousel();
}

function renderVimeoEmbed(embedHtml) {
    document.getElementById("videos").style.display = "flex";
    document.getElementById("images").style.display = "none";

    const videoEl = document.getElementById("video");
    videoEl.innerHTML = embedHtml;
    if (!document.querySelector('script[src*="player.vimeo.com/api/player.js"]')) {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        document.body.appendChild(script);
    }
}

if (collections[collectionName]) {
    const { type, description } = collections[collectionName];
    descEl.textContent = description;

    if (type === "image") {
        renderImageCollection(collections[collectionName].images);
    } else if (type === "video") {
        renderVimeoEmbed(collections[collectionName].vimeoEmbed);
    }
} else {
    titleEl.textContent = "Collection not found.";
    descEl.textContent = "";
}
