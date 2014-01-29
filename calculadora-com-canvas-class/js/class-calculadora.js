


"use strict";
var calculadora = {
		
	formulario : document.getElementById("formulario"),	

	 _calcula:function(){
	 	//pego os valores do campo pelo atributo name,
	 	// e converto  ele para soma ( nao usei parceint porque usar o "+ mais performatico nesse caso" )
	 	calculadora.kilos = +formulario.kilos.value,
		calculadora.metros = +formulario.metros.value,
		calculadora.centimetros = +formulario.centimetros.value,
		calculadora.altura = (calculadora.metros * 100 + calculadora.centimetros)/100;
		calculadora.imc = calculadora.kilos / (calculadora.altura * calculadora.altura);
		if(!isNaN(calculadora.imc)){ 
			return calculadora.imc.toFixed(2);
		}		
	},
	_validar:function(){
		var inputs = getElementByClass("form-input");
		//uso um for para percorrer
		for (var i = 0; i < inputs.length; i++) {
			//caso o campo esteja vazio
			if (inputs[i].value=="") {
					//faço um focus no campo
					 inputs[i].focus();
					 //disparo um alerta com o nome do campo
					 alert("Por favor preencha o campo "+inputs[i].name+"");
					 //retorno true para a funcao
					 return true;
			};
		};
	},
	_init:function(){
		if (!calculadora._validar()) {

			formulario.imc.value = calculadora._calcula();
			
			Pizza._draw(calculadora._calcula());
			
		};
	}
}



/* adicionando evendo de click*/
var elem = document.getElementById('calc');
	elem.onclick = function(){
		calculadora._init()
	}


/*
	funçoes de ajuda
 */

function _somenteNumero(e){

		var tecla=(window.event)?event.keyCode:e.which; 
		if((tecla>47 && tecla<58)) return true;
		    else{
		    	if (tecla==8 || tecla==0) return true;
			else  return false;
	    }
	}


/*funcao para pegar class 
cunhando de  de:http://code-tricks.com/javascript-get-element-by-class-name*/
function getElementByClass (className, parent) {

	  parent || (parent = document);

	  var descendants= parent.getElementsByTagName('*'), i=-1, e, result=[];
	  while (e=descendants[++i]) {
	    ((' '+(e['class']||e.className)+' ').indexOf(' '+className+' ') > -1) && result.push(e);
	  }
	  return result;
}