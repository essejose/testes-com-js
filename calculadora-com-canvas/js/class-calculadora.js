var calculadora ={

	//configuraçoes
	formulario : document.getElementById("formulario"),
	kilos : +calculadora.formulario.kilos.value,
	metros : +calculadora.formulario.metros.value,
	centimetros : +calculadora.formulario.centimetros.value,
	

	//faz calculo do IMC
	_calcula:function(){
		calculadora.altura = (calculadora.metros * 100 + calculadora.centimetros)/100;
		calculadora.imc = calculadora.kilos / (calculadora.altura * calculadora.altura);
		if(!isNaN(calculadora.imc)){ 
			alert(calculadora.imc.toFixed(2));
		}
	}
	
}
calculadora._calcula()