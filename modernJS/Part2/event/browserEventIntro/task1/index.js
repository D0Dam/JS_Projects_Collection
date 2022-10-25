function hideDiv() {
  const element = document.querySelector('#text');
  element.hidden = true;
}
document.querySelector('#button').addEventListener('click', hideDiv);