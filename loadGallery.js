const container = document.getElementById("collections");

Object.entries(collections).forEach(([key, collection]) => {
    const link = document.createElement("a");
    link.href = `collection.html?name=${key}`;
    link.className = "collection";

    const img = document.createElement("img");
    img.src = collection.cover;
    img.alt = `${collection.title} cover`;
    img.loading = "lazy";

    const desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = collection.description;

    link.appendChild(img);
    link.appendChild(desc);
    container.appendChild(link);
});
