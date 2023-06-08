const datasetSteps = Array.prototype.slice.call( document.querySelectorAll(".dataset-step") );
const datasetStepTriggers = Array.prototype.slice.call( document.querySelectorAll(".dataset-step-trigger") );

datasetSteps.forEach((step, i, all) => {
  step.addEventListener("click", function() {
    // console.log()
    // all.forEach((item) => {
    //   item.classList.remove("active");
    // })
    step.classList.toggle("active");
  })
});

datasetStepTriggers.forEach((step, i, all) => {
  step.addEventListener("click", function() {
    // console.log()
    // all.forEach((item) => {
    //   item.classList.remove("active");
    // })
    // step.classList.toggle("active");
    datasetSteps[i].classList.toggle("active");
  })
});