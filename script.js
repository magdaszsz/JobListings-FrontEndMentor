const btns = document.querySelectorAll("li");
const jobs = document.querySelectorAll(".job-card");
const currentFiltersWrapper = document.querySelector(".cur-fils-wrapper");

const currentFilters = [];

function removeFilter() {}

function filt(e) {
  const filter = e.target.dataset.fil;
  if (!currentFilters.includes(filter)) {
    currentFilters.push(filter);
    //console.log(currentFilters)

    jobs.forEach((job) => {
      const filters = job.dataset.filters;
      const filtersArray = job.dataset.filters.split(" ");

      if (!currentFilters.every((el) => filtersArray.includes(el))) {
        job.classList.add("hide");
      } else {
        job.classList.remove("hide");
      }
    });
    showFilters();
  }
  //console.log(currentFilters)
}

function showFilters() {
  currentFiltersWrapper.innerHTML = "";

  currentFilters.forEach((el) => {
    const filterEl = document.createElement("div");

   

    filterEl.classList.add("curs-fil-item");
    filterEl.classList.add(`${el}`);
    filterEl.textContent = el;
    currentFiltersWrapper.append(filterEl);
  });

}

  currentFiltersWrapper.addEventListener("click", function (e) {
    if(e.target.classList[0] === 'curs-fil-item') {

      const clickedFilter = e.target.classList[1];
      const i = currentFilters.indexOf(clickedFilter);
      currentFilters.splice(i, 1);
      console.log(e.target);
      e.target.remove();
  
      jobs.forEach((job) => {
        const filters = job.dataset.filters;
        const filtersArray = job.dataset.filters.split(" ");
  
        if (!currentFilters.every((el) => filtersArray.includes(el))) {
          job.classList.add("hide");
        } else {
          job.classList.remove("hide");
        }
      });
    }
  });

btns.forEach((btn) => btn.addEventListener("click", filt));
