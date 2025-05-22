import { collections } from "./collections.js";

/*Denne linje opretter et objekt der kan læse hvad der står i URL'en */
const params = new URLSearchParams(window.location.search);

/*Denne linje opretter et objekt der præciserer params objektet, og læser og henter "name" i URL'en */
const collectionName = params.get("name");

/*Disse linje bruges til at finde og vise beskrivelse og titel på siden */
const descriptionElement = document.getElementById("collection-description");
const titleElement = document.getElementById("collection-title");



/*Denne funktion bruges til at vise image objekterne i collections variablen */
function renderImageCollection(images) {

    /*Nedenstående to linjer henholdsvis skjuler videoer og fremviser images */
    document.getElementById("videos").style.display = "none";
    document.getElementById("images").style.display = "block";

    /*Nedenstående linjer finder HTML elementer og gør det muligt at bruge dem til vise images */
    const imgEl = document.getElementById("carouselImage");
    const leftControl = document.getElementById("leftControl");
    const rightControl = document.getElementById("rightControl");
    const bottomCounter = document.getElementById("bottomCounter");
    let currentIndex = 0;

    /*Her oprettes en funktionen til opdatere carousel'en */
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
    const { type, description, title } = collections[collectionName];
    descriptionElement.textContent = description;
    titleElement.textContent = title;

    if (type === "image") {
        renderImageCollection(collections[collectionName].images);
    } else if (type === "video") {
        renderVimeoEmbed(collections[collectionName].vimeoEmbed);
    }
} else {
    titleEl.textContent = "Collection not found.";
    descriptionElement.textContent = "";
}
