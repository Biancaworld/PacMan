// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['https://user-images.githubusercontent.com/113005568/193392871-55305fc3-5727-4d91-a890-a589deb848f1.png', 'https://user-images.githubusercontent.com/113005568/193392873-b83720a5-5455-4b70-9e00-afbd14693497.png'],
  ['https://user-images.githubusercontent.com/113005568/193392874-5096481d-ebfb-4f9f-9463-8ab089f08be3.png', 'https://user-images.githubusercontent.com/113005568/193392875-67440857-3768-4e6c-8b68-262c5b995acc.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos,pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
setInterval(Run, 300);
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
 
if (direction == 0){
  if(pos+ imgWidth >= pageWidth)
  {
     return 1;
  }else
  {
    return 0;
  }
}
else 
{
  if(pos < 0)
  {
      return 0;
  }
  else{
      return 1;
  }

}
}

module.exports = checkPageBounds;
