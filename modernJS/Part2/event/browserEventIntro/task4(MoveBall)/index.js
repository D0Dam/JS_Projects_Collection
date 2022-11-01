function moveball(e) {
  const ball  = document.querySelector("#ball");
  const field = document.querySelector("#box");
  const fieldPosition = field.getBoundingClientRect();
  ball.style.position = "absolute";

  let ballPosition = {
    left : e.clientX - fieldPosition.left - field.clientLeft - ball.clientWidth / 2,
    top : e.clientY - fieldPosition.top - field.clientTop - ball.clientHeight / 2,
  }

  if(ballPosition.left < ball.clientLeft) ballPosition.left = 0;
  if(ballPosition.top < ball.clientTop) ballPosition.top = 0;
  if(ballPosition.left > field.clientWidth - ball.clientWidth) ballPosition.left = field.clientWidth - ball.clientWidth;
  if(ballPosition.top > field.clientHeight - ball.clientHeight) ballPosition.top = field.clientHeight - ball.clientHeight;

  ball.style.left = ballPosition.left.toString() + "px";
  ball.style.top = ballPosition.top.toString() + "px";
}

document.querySelector("#box").addEventListener('click', moveball);