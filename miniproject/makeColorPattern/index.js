const colorSpaces = document.querySelectorAll('.colorspace');
const RAINBOW_COLOR = ['#ef3550', '#f9a825', '#eeff41', '#43a047', '#0000ff', '#000080', '#7e57c2'];

// counter를 함수 안에 넣고 클로저로 운영하는 경우
function getColorPattern() {
  let counter = 0;
  return () => {
    const fillNumber = counter % colorSpaces.length;
    const color = counter % RAINBOW_COLOR.length;
    colorSpaces.forEach((space, index) => {
      fillNumber===index ?
      space.style.background = RAINBOW_COLOR[color] : space.style.background = "white"
    });
    counter += 1;
    return counter;
  }
}

// counter를 전역변수로 선언한 경우
/*
let counter = 0;
function getColorPattern() {
  const fillNumber = counter % colorSpaces.length;
  const color = counter % RAINBOW_COLOR.length;
  colorSpaces.forEach((space, index) => {
    fillNumber===index ?
    space.style.background = RAINBOW_COLOR[color] : space.style.background = "white"
  });
  counter += 1;
}
*/

document.querySelector('.colorbutton').addEventListener('click', getColorPattern());
