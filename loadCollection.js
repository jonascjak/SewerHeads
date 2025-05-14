const params = new URLSearchParams(window.location.search);
const collectionName = params.get("name");

const titleEl = document.getElementById("collection-title");
const descEl = document.getElementById("collection-description");
const galleryEl = document.getElementById("scrollGallery");

if (collections[collectionName]) {
    const { title, description, images } = collections[collectionName];

    titleEl.textContent = title;
    descEl.textContent = description;

    images.forEach(({ src, alt }) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.loading = "lazy";
        galleryEl.appendChild(img);
    });
} else {
    titleEl.textContent = "Collection not found.";
    descEl.textContent = "";
}

