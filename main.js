// VARIABLES
const hexBoxParent = document.querySelectorAll('.hex-box-wrapper');
const hexBoxChildren = document.querySelectorAll('.hex-box');
const pressEnterDiv = document.querySelector('#press-enter');


// EVENT LISTENERS
document.addEventListener('keypress', keyPressed);
pressEnterDiv.addEventListener('mouseenter', pressEnterSwap);
pressEnterDiv.addEventListener('mouseleave', pressEnterSwap);

for (var i = 0; i < hexBoxParent.length; i++) {
  var childElement = hexBoxParent[i];
  childElement.addEventListener('mouseover', applyColor, false);
}


// FUNCTIONS
function applyColor(event) {
  if (event.target !== event.currentTarget) {
    var hoveredItem = event.target;
    hoveredItem.style.backgroundColor = randomHex()
    };
  event.stopPropagation()
}

function randomHex() {
  var hex = [];
  const hexList = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for (let i = 0; i < 6; i++) {        
      hex.push(hexList[Math.floor(Math.random() * hexList.length)])
  }
      return `#${hex.join('')}`
}

function keyPressed(event) {
  if (event.which == 13 || event.keyCode == 13) {
    for (var i = 0; i < hexBoxChildren.length; i++) {
      var childElement = hexBoxChildren[i];
      childElement.style.backgroundColor = 'rgb(127, 139, 166)';
    }
  }
};

function pressEnterSwap(event) {
  event.type == 'mouseenter' ? pressEnterDiv.innerHTML = 'PRESS' : pressEnterDiv.innerHTML = 'ENTER';
}
