function moveball(e) {
  const ball  = document.querySelector("#ball");
  const ballLeft  = e.clientX-26;
  const ballTop  = e.clientY-26;
  console.log(ballLeft.toString() + "px", ballTop.toString() + "px");
  ball.style.position = 'absolute';
  ball.style.left = ballLeft.toString() + "px";
  ball.style.top = ballTop.toString() + "px";
}

document.querySelector("#box").addEventListener('click', moveball);