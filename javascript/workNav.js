const pageContent = {
    about: {
        main: `
       <p>
    sewerhead is a film production company created by thomas beder and sasha bloor with focus on commercial work and documentary films<br>
    offering workflow-solutions and expertise from idea to production to delivery<br>
    the project has origins that dates back to 2017 when thomas and sasha were staying together in new york city, but was first truly realized in 2022 and are today based in copenhagen, denmark<br>
    sasha has a background in fashion and business etc. etc ... (sasha skriv selv)<br>
    thomas has a background in the danish film industry, working at multiple different post-production houses and most recently at danish broadcasting (dr) as technical post-coordinator and online editor on the 2025 series “slave af danmark”
  </p>`,
        secondary: "a website by nabolag.udvikling"
    },
    contact: {
        main: `
      <p>contact@sewerheadfilms.com</p>`,
        secondary:" "
    },
    shop: {
        main: `
   <div id="shop-container">
        <div id="product-images">
            <div id="carousel">
                <div id="carousel-wrapper">
                    <img id="carouselImage" src="" alt=""/>
                <div id="bottomCounter"></div>

                <div class="carousel-buttons left" id="leftControl">
                    <span class="arrow">←</span>
                </div>

                <div class="carousel-buttons right" id="rightControl">
                    <span class="arrow">→</span>
                </div>
            </div>
        </div>
    </div>
        <div id="product-component-wrapper">
            <div id="product-info">
                <h2>Reversable Beanie</h2>
                <p>250DKK</p>
            </div>
            <div id="product-component-1750807384264"></div>
        </div>
    </div>`,
        secondary: " "
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.navigate = function (page) {
        const content = document.getElementById("content");

        let mainContent = pageContent[page]?.main || '<p>Siden ikke fundet brors</p>';
        let secondaryContent = pageContent[page]?.secondary || '<p>Siden ikke fundet brors</p>';

        if (page === 'shop') {
            content.innerHTML = mainContent + `<div id="secondary-description">${secondaryContent}</div>`;
            loadShopifyBuyButton();

            const product = {
                images: [
                    { src: "/content/product/front.png", alt: "Front view" },
                    { src: "/content/product/back.png", alt: "Back view" }
                ]
            };

            // Call image carousel function
            renderProductImages(product);
        } else {
            // Almindeligt setup med #description og #secondary-description
            content.innerHTML = `
        <div id="description">
            ${mainContent}
        </div>
        <div id="secondary-description">
        ${secondaryContent}
        </div>
        `;

        console.log("calling setActiveTab")
        setActiveTab(`nav-${page}`);
    }

    window.clearContent = function () {
        const content = document.getElementById("content");

        // Tømmer indholdet
        content.innerHTML = ``;

        // Genskab portfolio grid
        window.renderPortfolioGrid();

        setActiveTab('nav-vault');
    };

    function setActiveTab(tabId) {
        const links = document.querySelectorAll(".nav-links span, .nav-links a");


        links.forEach(link => link.classList.remove("active"));
        const activeLink = document.getElementById(tabId);
        if (activeLink) activeLink.classList.add("active");
    }

});


//caraousel funktion
function renderProductImages(product) {
    const images = product.images.slice(0, 2);

    const imgEl = document.getElementById("carouselImage");
    const leftControl = document.getElementById("leftControl");
    const rightControl = document.getElementById("rightControl");
    const bottomCounter = document.getElementById("bottomCounter");
    let currentIndex = 0;

    function updateCarousel() {
        const { src, alt } = images[currentIndex];
        imgEl.src = src;
        imgEl.alt = alt || "";
        bottomCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    leftControl.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    };

    rightControl.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            leftControl.click();
        } else if (event.key === 'ArrowRight') {
            rightControl.click();
        }
    });
    updateCarousel();
}
