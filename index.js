const projects = [
  {
    href: "https://johnle1812.github.io/Image-Search-Application/",
    image: "images/projects/new-img-search.png",
    title: "Image Search Application",
  },
  {
    href: "https://johnle1812.github.io/Dice-Roll-Simulator/",
    image: "images/projects/dice-roll-sim.png",
    title: "Dice Roll Simulator",
  },
];

const progLangs = [
  {
    src: "icons/python.png",
    alt: "python-icon",
  }, {
    src: "icons/java.png",
    alt: "java-icon",
  }, {
    src: "icons/html.png",
    alt: "html-icon",
  }, {
    src: "icons/text.png",
    alt: "css-icon",
  }, {
    src: "icons/js.png",
    alt: "js-icon",
  }, {
    src: "icons/postgresql.png",
    alt: "postgresql-icon",
  }
]

const socialMedia = [
  {
    href: "https://www.linkedin.com/in/nguyen-le-5754072b9/",
    src: "icons/linkedin.png",
    alt: "linkedin-icon",
  }, {
    href: "https://github.com/johnle1812",
    src: "icons/github.png",
    alt: "github-icon",
  }
]



// Projects grid
const projectsGrid = document.getElementById("projects-grid");

let projectHTML = "";

projects.forEach((project) => {
  projectHTML += `
    <div class="project-container">
        <a
          href="${project.href}"
          target="_blank"
        >
          <img
            class="project-image"
            src="${project.image}"
            alt="image-search-app"
          />
          <p class="project-title">${project.title}</p>
        </a>
      </div>
  `;
});

projectsGrid.innerHTML = projectHTML;


// Programming Languages grid
const progLangsContainer = document.getElementById("skills");

let skillsHTML = "";
progLangs.forEach((lang) => {
  skillsHTML += `
    <img
      class="skill-icons"
      src="${lang.src}"
      alt="${lang.alt}"
    />
  `
});

progLangsContainer.innerHTML = skillsHTML;

// Social Media links
const socialMediaContainer = document.getElementById("social-media");
let socialMediaHTML = `
  <h3>Social Media</h3>
`;

socialMedia.forEach((media) => {
  socialMediaHTML += `
    <a
      rel="noopener"
      class="social-link"
      target="_blank"
      href="${media.href}"
      ><img
        class="contact-icons"
        src="${media.src}"
        alt="${media.alt}"
    /></a>
  `
})

socialMediaContainer.innerHTML = socialMediaHTML;