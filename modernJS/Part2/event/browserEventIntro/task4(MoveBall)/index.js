function moveball(e) {
  const ball  = document.querySelector("#ball");
  ball.style.position = "absolute";
  let ballLeft  = e.clientX - 24;
  let ballTop  = e.clientY - 24;
  if(e.clientX < 24) ballLeft = 0;
  if(e.clientX > 216) ballLeft = 196;
  if(e.clientY < 24) ballTop = 0;
  if(e.clientY > 136) ballTop = 116;
  ball.style.left = ballLeft.toString() + "px";
  ball.style.top = ballTop.toString() + "px";
}

document.querySelector("#box").addEventListener('click', moveball);