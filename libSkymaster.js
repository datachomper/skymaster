function Asteroid() {

	const RATE = 2;

	this.image = new Image();
	this.image.src = "roids/"+ Math.floor(Math.random()*7+1) +".png";
	this.x = Math.floor(Math.random()*800);
	this.y = -90;

	this.update = function(canvas){
		this.y += RATE;
		if(this.y > canvas.height){
			return false;
		}
		canvas.drawImage(this.image, this.x, this.y);
		return true;
	}
}
