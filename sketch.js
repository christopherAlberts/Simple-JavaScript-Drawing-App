


function setup()
{
	createCanvas(1000, 800);
    background(255,255,255);
    fill(255,255,255);
    stroke(255,255,255);
}

function draw()
{
    
  
    ellipse(mouseX, mouseY, 10,10);
    
}

function mousePressed()
{
    fill(0,0,0);
    stroke(0,0,0);
}

function mouseReleased()
{
    noFill();
    noStroke();
}