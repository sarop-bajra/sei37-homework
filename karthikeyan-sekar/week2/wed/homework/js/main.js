// Exercises: Animation
// The Cat Walk
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

var cat = document.getElementById("walk");
var cat1 = document.getElementById("dance1");
var cat2 = document.getElementById("dance2");
var cat3 = document.getElementById("dance3");
var cat4 = document.getElementById("dance4");



var maxWidth = false;
var minWidth = false;
cat1.style.display = "none";
cat2.style.display = "none";
cat3.style.display = "none";
cat4.style.display = "none";


var newPos = 0;
let x = 0;


cat.style.left = 0;

const catWalk = () => {

  let width = screen.width - cat.width;
let halfWidth = width/2;

  if(newPos >= width){
    maxWidth = true;
    minWidth = false;
    cat.style.transform = 'rotateY(180deg)';
  }
  else if (newPos <= 10) {
    maxWidth = false;
    minWidth = true;
    cat.style.transform = 'rotateY(360deg)';
  }

  if(minWidth === true){
        newPos = parseInt(cat.style.left) + 10;
        cat.style.left = newPos + 'px';
        x = x + 1;
        if (cat.style.left == '500px' && x > 100 )
        {
          if (x < 200)
          {
          cat1.style.left = '550px';
          cat1.style.display = "block";
          cat.style.display = "none";
          cat2.style.left = '100px';

          cat2.style.display = "block";
          cat3.style.left = '550px';
          cat3.style.bottom = '200px';

          cat3.style.display = "block";
          cat4.style.bottom = '700px';
          cat4.style.left = '870px';

          cat4.style.display = "block";

          document.body.style.backgroundColor = "green";
        }
        }

  }
  else if (maxWidth == true){
    newPos = parseInt(cat.style.left) - 10;
    cat.style.left = newPos + 'px';
  }
};
window.setInterval(catWalk, 50);
