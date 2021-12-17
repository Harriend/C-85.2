canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

carHeight= 100;
carWidth = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greenCarX = 5;
greenCarY = 225;

function add() {
	backgroundImgTag = new Image();
	backgroundImgTag.onload = uploadBackground;
	backgroundImgTag.src = background_image;

	greenImgTag = new Image();
	greenImgTag.onload = uploadgreencar;
	greenImgTag.src = greencar_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag , 0 , 0 , canvas.width , canvas.height)

}

function uploadgreencar() {
    ctx.drawImage(greenImgTag , greenCarX , greenCarY , carWidth , carHeight)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
		}
	
		if(keyPressed == '40')
		{
			down();

		}
		
		if(keyPressed == '37')
		{
			left();
		}
	
		if(keyPressed == '39')
		{
			right();
		}
		
		
}

function up()
{
	if(greenCarY >= 0){

		greenCarY -= 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greenCarY <= 800){

		greenCarY += 10;
		uploadBackground();
		uploadgreencar();
}}

function left()
{
	if(greenCarX >= 0){

		greenCarX -= 10;
		uploadBackground();
		uploadgreencar();
}}

function right()
{
	if(greenCarX <= 1000){

		greenCarX += 10;
		uploadBackground();
		uploadgreencar();}
}
