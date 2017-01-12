function Personaje(imagen){
	Kinetic.Rect.call(this);
	this.setWidth(60);
	this.setHeight(80);
	this.vx = this.getWidth() * 0.25;
	this.vy = 0;
	this.limiteTope = 0;
	this.limiteDer = 0;
	this.limiteIzq = 0;
	this.contador = 0;
	this.estaSaltando = false;
	this.direccion = true;
	this.arriba = false;
	this.setFill('blue');
	this.caminar = function(){
		this.move({x: this.vx,y:0});
		if(this.getX() > this.limiteDer) this.move({ x: this.limiteDer - this.getX(), y: 0});
		this.direccion = true;
	};
	this.retroceder = function(){
		this.move({x: -this.vx,y:0});
		if(this.getX() <= 0) this.move({ x: -this.getX(), y: 0 });
		this.direccion = false;
	};
	this.saltar = function(){
		this.estaSaltando = true;
		if(this.vy <= 2){
			//this.setAnimation('caminar');
			this.vy = -(this.getWidth() * 0.3);
			this.contador++;
			/*this.afterFrame(6, function(){*/
				this.estaSaltando = false;
				/*this.setAnimation('estatico');
			});*/
		}
	};
	this.aplicarGravedad = function(gravedad, vRebote){
		this.vy += gravedad;
		this.move({x:0,y:this.vy});
		if((this.getY() + this.getHeight()) > this.limiteTope){
			this.setY(this.limiteTope - this.getHeight());
			this.vy = 0;
			this.contador = 0;
		}
	}

};
Personaje.prototype = Object.create(Kinetic.Rect.prototype);