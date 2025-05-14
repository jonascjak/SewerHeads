const params = new URLSearchParams(window.location.search);
const collectionName = params.get("name");
const container = document.getElementById("collection-container");

if (collections[collectionName]) {
    const { title, description, images } = collections[collectionName];

    const heading = document.createElement("h1");
    heading.textContent = title;

    const desc = document.createElement("p");
    desc.textContent = description;

    container.appendChild(heading);
    container.appendChild(desc);

    images.forEach(({ src, alt }) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        img.loading = "lazy";
        container.appendChild(img);
    });
} else {
    container.textContent = "Collection not found.";
}
