function Piso(x,y,width, height,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(width);
	this.setHeight(height);
	this.setX(x);
	this.setY(y);
	this.setFill('black');
};
Piso.prototype = Object.create(Kinetic.Rect.prototype);