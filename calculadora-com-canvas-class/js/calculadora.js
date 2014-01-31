"use strict";
var calculadora = {
		
	formulario : document.getElementById("formulario"),	

	 _calcula:function(){
	 	//pego os valores do campo pelo atributo name,
	 	// e converto  ele para soma ( nao usei parceint porque usar 
	 	// o "+ mais performatico nesse caso" )
	 	calculadora.kilos =  +formulario.kilos.value,
		calculadora.metros = +formulario.metros.value,
		//calculadora.centimetros = +formulario.centimetros.value,
		//inicia calculo para IMC
		calculadora.altura = calculadora.metros  /100;
		calculadora.imc = calculadora.kilos / (calculadora.altura * calculadora.altura);
		//verifico se esse valor nao e NaN
		if(!isNaN(calculadora.imc)){ 
			//retorno  o valor
			return calculadora.imc.toFixed(2);
		}		
	}


}

var validar ={

	_validarCampos:function(){
		var inputs = getElementByClass("form-input");
		//uso um for para percorrer
		for (var i = 0; i < inputs.length; i++) {
			//caso o campo esteja vazio
			if (inputs[i].value=="" || inputs[i].value<=0 ) {
					//faço um focus no campo
					 inputs[i].focus();
					 //disparo um alerta com o nome do campo
					 alert("Por favor preencha o campo "+inputs[i].name+"");
					 //retorno true para a funcao
					 return true;
			};
		};
	},
	 _somenteNumero:function(e){
	 	var tecla=(window.event)?event.keyCode:e.which; 
		if((tecla>47 && tecla<58)) return true;
		    else{
		    	if (tecla==8 || tecla==0) return true;
			else  return false;
	    }

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

