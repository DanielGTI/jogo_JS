var x =11, y=10, volta=0, sentido=1;
var direcao = 1;
var alimentos = [x,y];

function setup() { 
  createCanvas(400, 400);
   drawCirculos(10);
  
} 

function draw() { 
  background(220);
	drawGrid();
  
 drawCirculos(15);
	
	ellipse(x,y,20);
	
	if (x < 390 && direcao == 1){
		x += 10;
		y += 1 * sentido;
	}
	else{
		direcao = 0;
	}
	
	if (x > 11 && direcao == 0) {
		x -= 10;
		y += 1 * sentido;
	}
	else{
		direcao = 1;
	}
  
  if (y > 390) {
		sentido = -1;
	}
  
  if (y < 10) {
		sentido = 1;
	}
  
  
}



function drawCirculos(x){

  for (n = 1; n <= x; n++){
  	alimentos[random(1,400),random(1,400)];   
  }
	
}



function drawGrid() {
	stroke(200);
	//fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		//text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		//text(y, 1, y+12);
	}
}