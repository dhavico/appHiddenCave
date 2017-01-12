function Muro(x,y,width, height,imagen){
	Kinetic.Rect.call(this);
	//this.setPoints([1920, 570, 2080, 570, 2080, 440, 2400, 440, 2400, 700, 1920, 700]);
	this.setWidth(width);
	this.setHeight(height);
	this.setX(x);
	this.setY(y);
	this.setFill('orange');
};
Muro.prototype = Object.create(Kinetic.Rect.prototype);