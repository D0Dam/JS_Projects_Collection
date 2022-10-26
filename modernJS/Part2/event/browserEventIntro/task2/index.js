function hide(e) {
  const element = e.target;
  element.hidden = true;
}
document.querySelector('#button').addEventListener('click', hide);
