
var init ={

		_initCalculo:function(){
			
			if (!validar._validarCampos()) {
				console.log(calculadora._calcula());
				init.mostraIMC();				
				calculadora.formulario.imc.value = calculadora._calcula();			
				Pizza._draw(calculadora._calcula());
				
				
			};
		},
		mostraIMC:function(){
			var doc= document;
			var campoIMC = doc.getElementById('imcCampo');
			var canvasIMC = doc.getElementById('pizza');

			campoIMC.className="form-group col-md-12";
			canvasIMC.className="";
				
		},
		/* adicionando evento de click*/
		_initEvent:function(){
			var elem = document.getElementById('calc');
			elem.onclick = function(){
				init._initCalculo()
			}
			
		}

}
init._initEvent();

