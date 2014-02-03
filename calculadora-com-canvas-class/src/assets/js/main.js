"use strict";
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
		


			if (calculadora._calcula() < 17) {
				selecionaLinhas(1,"success")
			}else if(calculadora._calcula() <= 17  &&calculadora._calcula() <= 18.49){
				selecionaLinhas(2,"success")
			}else if(calculadora._calcula() >= 18.5 && calculadora._calcula() <= 24.99){
				selecionaLinhas(3,"success")
			}else if(calculadora._calcula() >= 25 && calculadora._calcula()  <= 29.99){
				selecionaLinhas(4,"warning")
			}else if(calculadora._calcula() >= 30 && calculadora._calcula() <= 34.99){
				selecionaLinhas(5,"danger")
			}else if(calculadora._calcula() >= 35 && calculadora._calcula() <= 39.99){
				selecionaLinhas(6,"danger")
			}else if(calculadora._calcula() >= 39.99 && calculadora._calcula() > 40){
				selecionaLinhas(7,"danger")
			}
			
			function selecionaLinhas(linha,status){
				var tabela = doc.getElementById('tabela-resultado-imc');
				var linhas = tabela.getElementsByTagName('tr');			
				console.log(linhas, linhas[0]);
				console.log(tabela);

				for (var i = 0; i < linhas.length; i++) {
					linhas[i].className=""
				};
				return linhas[linha].className=status;
			}

		

			
				
		},
		/* adicionando evento de click*/
		_initEvent:function(){
			var elem = document.getElementById('calc');
			elem.onclick = function(){
				init._initCalculo()
			}
			var kilosRanger = document.getElementById('kilosRanger');
			var alturaRanger = document.getElementById('alturaRanger');
			kilosRanger.onchange = function(){
				printValue('kilosRanger', 'kilosValue'); 
			}
			alturaRanger.onchange = function(){
				printValue('alturaRanger', 'alturaValue'); 
			}



    

    
			
		}

}

 printValue('kilosRanger', 'kilosValue'); 
 printValue('alturaRanger', 'alturaValue'); 
     function printValue(sliderID, textbox) {
            var x = document.getElementById(textbox);
            var y = document.getElementById(sliderID);
            x.value = y.value;
        }

      
init._initEvent();



// function novo(texto){
//  	  var canvas = document.getElementById('escrevendo');
//       var context = canvas.getContext('2d');

//       context.font = '40pt Calibri';
//       context.fillStyle = 'blue';
//       context.fillText(texto, 150, 100);
// }

//  novo(calculadora._calcula());