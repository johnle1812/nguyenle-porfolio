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