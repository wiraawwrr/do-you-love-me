const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

resultContainer.style.display = "none";

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "flex";
});

noBtn.addEventListener("click", () => {});
