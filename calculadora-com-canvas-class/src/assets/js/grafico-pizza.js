"use strict";
var Pizza = {

	// Configuração
	canvas:document.getElementById('pizza'),
	height:400,
	width:400,
	startcolor:'red',
	finalcolor:'blue',
	
	// Calculando variaveis pra desenhar	
	_init:function(){
		Pizza.ctx = Pizza.canvas.getContext("2d");  

		Pizza.radius = Math.min(Pizza.width, Pizza.height) / 2;
		Pizza.center_x = Pizza.width/2;
		Pizza.center_y = Pizza.height/2;	

		Pizza.grd=Pizza.ctx.createLinearGradient(20,-35,200,0);
		Pizza.grd.addColorStop(0,Pizza.startcolor);
		Pizza.grd.addColorStop(1,Pizza.finalcolor);
		

		
	},
	
	// Desenhando -  
	_draw:function(percentual){

		Pizza.ctx.clearRect(0,0,Pizza.width,Pizza.height); 			
		Pizza.ctx.beginPath();
		Pizza.ctx.moveTo(Pizza.center_x, Pizza.center_y);
		Pizza.ctx.arc( 
			Pizza.center_x, 
			Pizza.center_y, 
			Pizza.radius, 
			Math.PI * (- 0.5), 
			Math.PI * (- 0.5 + 2 * percentual/40), 
			false
		);
		Pizza.ctx.closePath();
		//Pizza.ctx.fillStyle = Pizza.cor;
		// Fill with gradient
		Pizza.ctx.fillStyle=Pizza.grd;	
		Pizza.ctx.fill();	

		
	}	

}
Pizza._init();




