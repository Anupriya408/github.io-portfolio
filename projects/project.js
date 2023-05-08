// import images from "../portfolio-images/w-02.png";

const Projects = [
  {
    name: "Clone of Pluralsight",
    about:
      "This is the clone of Pluralsight.com which is a online educational website offers vaiety of courses..",
    img: "https://anupriya-portfolio.netlify.app/portfolio-images/w-01.png",
    gitrepo: "https://github.com/Akshaypareek01/pluralsight",
    tech_stack: "HTML | CSS | JAVASCRIPT ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://astounding-frangollo-a008ae.netlify.app/",
    project_type: "Team Project",
    category: ["all", "frontend"],
  },
  {
    name: "Clone of CultFit",
    about:
      "Cultfit is a health and fitness powerhouse that takes a holistic approach to physical and mental well being.",
    img: "https://anupriya-github-io.netlify.app/portfolio-images/m-01.png",
    gitrepo: "https://github.com/Rajgupta7080/CultFit-Team",
    tech_stack: "HTML | CSS | ADV. JAVASCRIPT",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://stupendous-chebakia-31e667.netlify.app/",
    project_type: "Team Project",
    category: ["all", "frontend"],
  },
  {
    name: "Clone of Firstcry.com",
    about:
      "It is an online-cum-offline brand providing a wide range of products for babies, kids, and moms",
    img: "https://anupriya-portfolio.netlify.app/portfolio-images/n-03.png",
    gitrepo:
      "https://github.com/Anupriya408/Firstcry-",
    video: "",
    tech_stack: "  REACT  |  CHAKRA UI ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://voluble-hotteok-93fe8e.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "html", "frontend"],
  },
  {
    name: "ShopdressUp.in",
    about:
      "This project is the clone of ShopdressUp.in which is a Cloth and accessories selling and delivering website.",
    img: "https://anupriya-github-io.netlify.app/portfolio-images/r-1.png",
    gitrepo: "https://github.com/Anupriya408/shopbackend",
    tech_stack: "React | Redux | MongoDB | Express",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://majestic-dieffenbachia-fa7ad7.netlify.app/",
    project_type: "Individual Project",
    category: ["all", "backend"],
  }
 
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");

let backend_projects = document.querySelector(".backend_projects");
// let other_projects = document.querySelector(".other_projects");
let frontend_projects = document.querySelector(".frontend_projects");
all_projects.classList.add("active_tech_project");

all_projects.addEventListener("click", () => {
  filterProjects("all");
  all_projects.classList.add("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});
backend_projects.addEventListener("click", () => {
  filterProjects("backend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.add("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.remove("active_tech_project");
});

frontend_projects.addEventListener("click", () => {
  filterProjects("frontend");
  all_projects.classList.remove("active_tech_project");
  react_projects.classList.remove("active_tech_project");
  backend_projects.classList.remove("active_tech_project");
  // other_projects.classList.remove("active_tech_project")
  frontend_projects.classList.add("active_tech_project");
});

function filterProjects(basis) {
  let filtered = Projects.filter((el) => {
    return el.category.includes(basis);
  });
  displayProjectData(filtered);
}

function displayProjectData(Projects) {
  projects__container.innerHTML = null;
  Projects.reverse().forEach((pro) => {
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>

      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack} 
      </div>

      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
     
      
    </div>
  </div>
    `;
    projects__container.append(main);
  });
}

displayProjectData(Projects);
