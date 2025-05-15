
const toggleSwitch = document.getElementById('toggleSwitch');
const videoContainer = document.getElementById('videoContainer');
const backend = "http://localhost:8080"

document.addEventListener('DOMContentLoaded',
    () => {   showVimeo(), toggleSwitch.checked = false})
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        showPhoto();
    } else {
        showVimeo();
    }
});

async function showVimeo() {
    videoContainer.innerHTML = '';

    try {
        const response = await fetch(`${backend}/api/videos`);
        const videoIds = await response.json();

        videoIds.forEach(id => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://player.vimeo.com/video/${id}`;
            console.log(`https://player.vimeo.com/video/${id}`)
            iframe.width = "100%";
            iframe.height = "480";
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; fullscreen";
            iframe.className = "vimeo-embed";
            videoContainer.appendChild(iframe);
        });
    } catch (err) {
        console.error("Failed to load videos:", err);
        videoContainer.innerHTML = "<p>Unable to load videos.</p>";
    }
}

async function showPhoto(){
    videoContainer.innerHTML = '';
    const galleryDiv = document.createElement("div");
    galleryDiv.id = "gallery";
    galleryDiv.className = "gallery";
    videoContainer.appendChild(galleryDiv);

    loadGallery(galleryDiv);
}