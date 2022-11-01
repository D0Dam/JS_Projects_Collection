const colorSpaces = document.querySelectorAll('.colorspace');
const COLOR = ['#ef3550', '#f9a825', '#eeff41', '#43a047', '#0000ff', '#000080', '#7e57c2'];
let counter = 0;
function getColorPattern() {
  const fillNumber = counter % colorSpaces.length;
  const pickColor = counter % COLOR.length;
  colorSpaces.forEach((space, index) => {
    fillNumber===index ?
    space.style.background = COLOR[pickColor] : space.style.background = "white"
  });
  counter += 1;
}

document.querySelector('#colorbutton').addEventListener('click', getColorPattern);