



function calcularIMC() {

		if(!_validarNumeros()){

			var formulario = document.getElementById('formulario')
			var kilos = +formulario.kilos.value;
			var metros = +formulario.metros.value;
			var centimetros = +formulario.centimetros.value;
			var altura = (metros * 100 + centimetros)/100;
			var imc = kilos / (altura * altura);
			
			if(!isNaN(imc)){ 

				formulario.imc.value = imc.toFixed(2);

			}

		}
		
		
	}

function _validarNumeros(){

	var inputs = getElementByClass('form-input');

		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].value=="") {
					 inputs[i].focus();
					 alert("Por favor preencha o campo "+inputs[i].name+"");
					 return true;
			};
		};
	
	}

function _somenteNumero(e){
		var tecla=(window.event)?event.keyCode:e.which; 

		if((tecla>47 && tecla<58)) return true;
		    else{
		    	if (tecla==8 || tecla==0) return true;
			else  return false;
	    }
	}


function getElementByClass (className, parent) {
	  parent || (parent = document);
	  var descendants= parent.getElementsByTagName('*'), i=-1, e, result=[];
	  while (e=descendants[++i]) {
	    ((' '+(e['class']||e.className)+' ').indexOf(' '+className+' ') > -1) && result.push(e);
	  }
	  return result;
}