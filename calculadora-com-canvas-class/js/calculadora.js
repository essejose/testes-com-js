
"use strict";
/* funcao para calcularIMC, faz o calculo e imprime */
function calcularIMC() {
		//valido os campos caso estejam vazios ele nao calcula
		if(!_validarNumeros()){
			//pego o id do form
			var formulario = document.getElementById("formulario");

			//pego os valores do campo pelo atributo name, e converto  ele para soma ( nao usei parceint porque usar o "+ mais performatico nesse caso" )
			var kilos = +formulario.kilos.value;
			var metros = +formulario.metros.value;
			var centimetros = +formulario.centimetros.value;

			//faço o calculo para conseguir a altura
			var altura = (metros * 100 + centimetros)/100;
			//faço calculo para chegar ao IMC
			var imc = kilos / (altura * altura);
			//valido novamente caso o numero seja NaN
			if(!isNaN(imc)){ 
				//atribuo o valor para o campo, usando o toFixed para mostrar duas casas
				formulario.imc.value = imc.toFixed(2);
				Pizza._draw(imc.toFixed(2));

			}

		}
		
		
	}
/*funcao para validar que os campos não estejam vazios*/ 
function _validarNumeros(){
	// uso a funcao para me trazer todos os elementos que tenham a classe dos inputs
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
	
	}


/*
validacao de apenas numeros
cunhando de http://codigofonte.uol.com.br/codigos/input-text-somente-com-numeros
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