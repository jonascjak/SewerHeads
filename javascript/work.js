const pageContent = {
    about: {
        main: `
      <p>bla bla bla about bla bla bla</p>`,
        secondary: "This is a secondary description for About."
    },
    contact: {
        main: `
      <p>bla bla bla contact bla bla</p>`,
        secondary: "Feel free to reach out to me anytime."
    },
    shop: {
        main: `
      <p>coming soon</p>`,
        secondary: "Our products will be available soon."
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    window.navigate = function (page) {
        const content = document.getElementById("content");

        navbar.style.display = "none";
        content.style.height = "100vh";

        const mainContent = pageContent[page]?.main || '<p>Siden ikke fundet brors</p>'
        const secondaryContent = pageContent[page]?.secondary || '<p>Siden ikke fundet brors</p>'

        content.innerHTML = `
        <div id="close" onclick="clearContent()">X</div>
        <div id="description">
            ${mainContent}
        </div>
        <div id="secondary-description">
        ${secondaryContent}
        </div>
        `;
    }

    window.clearContent = function () {
        const content = document.getElementById("content");
        content.innerHTML = '';

        navbar.style.display = "flex";
        content.style.height = "auto";
    }
});
