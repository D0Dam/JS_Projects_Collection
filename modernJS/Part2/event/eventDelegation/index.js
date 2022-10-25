document.onmouseover = function(e) {
  let data = e.target.dataset.tooltip;
  
  if(!data) return;

  let tooltip = document.createElement('div');
  tooltip.setAttribute("class", "tooltip");
  tooltip.innerHTML = data;
  document.body.append(tooltip);

  const buttonHeight = e.target.offsetHeight;
  const buttonLeft = e.target.offsetLeft;
  const buttonTop = e.target.offsetTop;
  const windowTop = window.scrollY;
  const tooltipHeight = tooltip.offsetHeight;
  const upTooltipTop = buttonTop - tooltipHeight - 5;
  const downTooltipTop = buttonTop + buttonHeight + 5;
  tooltip.style.position = "absolute";
  tooltip.style.left = buttonLeft.toString() + "px";

  if(upTooltipTop > windowTop)
    tooltip.style.top = upTooltipTop.toString() + "px";
  else
    tooltip.style.top = downTooltipTop.toString() + "px";
};

document.onmouseout = function(e) {
  const tooltip = document.querySelector('.tooltip');
  if(tooltip) {
    document.body.removeChild(tooltip);
  }
}



document.onclick = function (e) {
  const el = e.target;
  if(!el.closest('ul')) return;

  const nodeList = el.parentNode.nextSibling.nextSibling;
  if(nodeList.tagName === "UL") 
    nodeList.hidden = !nodeList.hidden;
}