const jobsWrapper = document.querySelector(".wrapper");
const currentFiltersWrapper = document.querySelector(
  ".current-filters-wrapper"
);
//const currentFilters = [];

// on clicking the tag remove it and filter through jobs again

currentFiltersWrapper.addEventListener("click", function (e) {
  if (e.target.classList[0] === "remove-btn") {
    const clickedFilter = e.target.parentElement.classList[1];
    const i = app.currentFilters.indexOf(clickedFilter);
    app.currentFilters.splice(i, 1);
    e.target.parentElement.remove();
    app.searchThroughFilters();
  }
});

const jobsArray = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

// dynamiacally create job listing elements

const app = {
  currentFilters: [],

  init() {
    app.createHTML();
    app.addTagListeners();
  },
  showFilters() {
    currentFiltersWrapper.innerHTML = "";

    app.currentFilters.forEach((el) => {
      const filterEl = document.createElement("div");
      const removeBtn = document.createElement("button");
      const filterText = document.createElement("p");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "X";
      filterEl.classList.add("curs-fil-item");
      filterEl.classList.add(`${el}`);
      filterText.textContent = el;
      filterEl.appendChild(filterText);
      filterEl.appendChild(removeBtn);

      currentFiltersWrapper.append(filterEl);
    });
  },

  filterJobs(e) {
    const filter = e.target.dataset.filter;
    if (!app.currentFilters.includes(filter)) {
      app.currentFilters.push(filter);
      app.searchThroughFilters();
      app.showFilters();
    }
  },

  addTagListeners() {
    const btns = document.querySelectorAll("li");

    btns.forEach((btn) => btn.addEventListener("click", app.filterJobs));
  },
  searchThroughFilters() {
    const jobs = document.querySelectorAll(".job-card");
    jobs.forEach((job) => {
      const filtersArray = job.dataset.filters.split(" ");

      if (!app.currentFilters.every((el) => filtersArray.includes(el))) {
        job.classList.add("hide");
      } else {
        job.classList.remove("hide");
      }
    });
  },

  createHTML() {
    let allJobsFragment = document.createDocumentFragment();
    jobsArray.forEach((el) => {
      const jobCard = document.createElement("div");
      jobCard.className = "job-card";
      const imageDiv = document.createElement("div");
      imageDiv.className = "job-image";
      const image = document.createElement("img");
      image.setAttribute("src", el.logo);
      image.setAttribute("alt", "company's logo");
      const jobInfo = document.createElement("div");
      jobInfo.className = "job-info";
      const jobInfoTop = document.createElement("div");
      jobInfoTop.className = "top";
      const jobHeader = document.createElement("h3");
      jobHeader.className = "company";
      jobHeader.textContent = el.company;
      jobInfoTop.appendChild(jobHeader);
      jobInfo.appendChild(jobInfoTop);
      if (el.new) {
        const newJob = document.createElement("p");
        newJob.className = "new";
        newJob.textContent = "new!";
        jobInfoTop.appendChild(newJob);
      }
      if (el.featured) {
        const featured = document.createElement("p");
        featured.className = "featured";
        featured.textContent = "featured";
        jobInfoTop.appendChild(featured);
      }

      const tagList = document.createElement("ul");
      const tagsArray = [el.role, el.level, ...el.languages, ...el.tools];
      const tagsFragment = document.createDocumentFragment();
      const tagFilters = [];
      tagsArray.forEach((tag) => {
        tagFilters.push(tag.toLowerCase());
        const tagEl = document.createElement("li");
        tagEl.className = "tag-list-item";
        tagEl.dataset.filter = tag.toLowerCase();
        tagEl.textContent = tag;
        tagsFragment.append(tagEl);
      });
      jobCard.dataset.filters = `${tagFilters.join(" ")}`;
      tagList.appendChild(tagsFragment);

      tagList.className = "tag-list";

      imageDiv.appendChild(image);
      jobCard.appendChild(imageDiv);
      jobCard.appendChild(jobInfo);
      jobCard.appendChild(tagList);
      allJobsFragment.append(jobCard);
    });

    jobsWrapper.appendChild(allJobsFragment);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
