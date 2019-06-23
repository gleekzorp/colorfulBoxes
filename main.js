const hexBoxParent = document.querySelectorAll('.hex-box-wrapper');

for (var i = 0; i < hexBoxParent.length; i++) {
  var childElement = hexBoxParent[i];
  childElement.addEventListener('mouseover', applyColor, false);
}

function applyColor(event) {
  if (event.target !== event.currentTarget) {
    var hoveredItem = event.target;
    hoveredItem.style.backgroundColor = randomHex()
    };
  event.stopPropagation()
}

function randomHex() {
  var hex = [];
  const hexList = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  for (let i = 0; i < 6; i++) {        
      hex.push(hexList[Math.floor(Math.random() * hexList.length)])
  }
      return `#${hex.join('')}`
}