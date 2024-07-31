function setup() {
  createCanvas(640, 640);
  background(168, 84, 50)
 

  
}

function draw() {
  
    fill(214, 212, 75);
 // Give all corners a radius of 20.
  square(mouseX,mouseY,200,20);

 //line(height/2,width/2,mouseX,mouseY,)
    fill(121,45,121)
  circle(150,150, 125)
  
  let img;

// Load the image.
function preload() {
  img = loadImage('/assets/laDefense.jpg');
}

function setup() {
  createCanvas(100, 100);

  background(50);

  // Draw the image.
  image(img, 0, 0);

  describe('An image of the underside of a white umbrella with a gridded ceiling above.');
}


 
}


