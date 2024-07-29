const btn = document.getElementById("submit-btn");
const btnReturn = document.getElementById("btn-return");
const cardThankou = document.querySelector(".thank-you");
const listItem = document.querySelectorAll(".list-item");
const selected = document.querySelector(".selected");

listItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    selected.innerHTML = `You selected ${index + 1} out 5`;
  });
});

btn.addEventListener("click", () => {
  cardThankou.classList.remove("show");
});

btnReturn.addEventListener("click", () => {
  cardThankou.classList.add("show");
});
