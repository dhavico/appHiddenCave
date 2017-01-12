function Plataforma(x,y,tamanio,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(tamanio);
	this.setHeight(50);
	this.setX(x);
	this.setY(y);
	this.setFill('gray');
};
Plataforma.prototype = Object.create(Kinetic.Rect.prototype);