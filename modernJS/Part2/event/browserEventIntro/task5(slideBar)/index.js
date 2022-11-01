const list = document.querySelector(".list");
const arrowIcon = document.querySelector("#icon");

function slideDown() {
  arrowIcon.innerText === '▶' ? 
  arrowIcon.innerText = '▼' : arrowIcon.innerText = '▶';
  list.classList.toggle("visible");
}

document.querySelector("#slider").addEventListener("click", slideDown);