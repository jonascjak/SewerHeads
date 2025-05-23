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
        secondary: "a website by jonas jakobsen & peter bang"
    },
    contact: {
        main: `
      <p>contact@sewerheadfilms.com</p>`,
        secondary: "feel free to reach out"
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


        const mainContent = pageContent[page]?.main || '<p>Siden ikke fundet brors</p>'
        const secondaryContent = pageContent[page]?.secondary || '<p>Siden ikke fundet brors</p>'

        content.innerHTML = `
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

        // Tømmer indholdet
        content.innerHTML = ``;

        // Genskab portfolio grid
        window.renderPortfolioGrid();
    };

});
