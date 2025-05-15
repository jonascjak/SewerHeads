function loadGallery(container) {
    Object.entries(collections).forEach(([key, collection]) => {
        const link = document.createElement("a");
        link.href = `collection.html?name=${key}`;
        link.className = "collection";

        const img = document.createElement("img");
        img.src = collection.cover;
        img.alt = `${collection.title} cover`;
        img.loading = "lazy";

        const desc = document.createElement("p");
        desc.className = "title";
        desc.textContent = collection.title;

        link.appendChild(img);
        link.appendChild(desc);
        container.appendChild(link);
    });
}


window.loadGallery = loadGallery;

