/*
 * Este arquivo é parte do programa testes-com-js
 *
 *
 *
 * testes-com-js é um software livre; você pode redistribuí-lo e/ou 
 *
 * modificá-lo dentro dos termos da Licença Pública Geral GNU como 
 *
 * publicada pela Fundação do Software Livre (FSF); na versão 2 da 
 *
 * Licença, ou (na sua opinião) qualquer versão.
 *
 *
 *
 * Este programa é distribuído na esperança de que possa ser  útil, 
 *
 * mas SEM NENHUMA GARANTIA; sem uma garantia implícita de ADEQUAÇÃO a qualquer
 *
 * MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
 *
 * Licença Pública Geral GNU para maiores detalhes.
 *
 *
 *
 * Você deve ter recebido uma cópia da Licença Pública Geral GNU
 *
 * junto com este programa, se não, escreva para a Fundação do Software
 *
 * Livre(FSF) Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 */

/**
 * Classe responsável por calcular os dados passados 
 * pelo usuário.
 * 
 * Contribuidores :
 *      marabesi <http://github.com/marabesi>
 * 
 * @author      essejose <http://github.com/essejose>
 * @version     1.0
 */

"use strict";
var calculadora = {
    /**
     * Método que calcula o IMC de acordo com os
     * parâmetros passados pelo usuário
     * 
     * @type        function
     * @returns     {float}
     * @since       1.0
     */
    _calcula: function() {
        //pego os valores do campo pelo atributo name,
        // e converto  ele para soma ( nao usei parceint porque usar 
        // o "+ mais performatico nesse caso" )
        calculadora.kilos = +formulario.kilos.value,
                calculadora.metros = +formulario.metros.value,
                //calculadora.centimetros = +formulario.centimetros.value,
                //inicia calculo para IMC
                calculadora.altura = calculadora.metros / 100;
        calculadora.imc = calculadora.kilos / (calculadora.altura * calculadora.altura);
        //verifico se esse valor nao e NaN
        if (!isNaN(calculadora.imc)) {
            //retorno  o valor
            return calculadora.imc.toFixed(2);
        }
    }
};

/**
 * Classe responsável por validar os dados passados 
 * pelo usuário.
 * 
 * Contribuidores :
 *      marabesi <http://github.com/marabesi>
 * 
 * @author      essejose <http://github.com/essejose>
 * @version     1.0
 */
var validar = {
    /**
     * Verifica os valores enviados e caso nenhum valor
     * seja enviado alerta ao usuário
     * 
     * @type        function
     * @return      {boolean|void} description
     * @since       1.0
     */
    _validarCampos: function() {
        var inputs = getElementByClass("form-input");
        //uso um for para percorrer
        for (var i = 0; i < inputs.length; i++) {
            //caso o campo esteja vazio
            if (inputs[i].value == "" || inputs[i].value <= 0) {
                //faço um focus no campo
                inputs[i].focus();
                //disparo um alerta com o nome do campo
                alert("Por favor preencha o campo " + inputs[i].name + "");
                //retorno true para a funcao
                return true;
            };
        };
    },
    /**
     * Método para verificar qual é o tipo de dado
     * que o usuário está digitando e garante que seja
     * aceito apenas número
     * 
     * @param       {event}      e   Evento disparado ao pressionar uma tecla
     * @returns     {Boolean}
     * @since       1.0
     */
    _somenteNumero: function(e) {
        var tecla = (window.event) ? event.keyCode : e.which;
        if ((tecla > 47 && tecla < 58)) {
            return true;
        } else {
            if (tecla == 8 || tecla == 0) {
                return true;
            } else {
                return false;
            }
        }
    }
};

/**
 * 
 * @param       {string}        className   Uma string com a classe desejada
 * @param       {document}      parent      objecto DOM
 * @see         http://code-tricks.com/javascript-get-element-by-class-name
 * @returns     {getElementByClass.result|Array}
 * @since       1.0
 */
function getElementByClass(className, parent) {

    parent || (parent = document);

    var descendants = parent.getElementsByTagName('*'), i = -1, e, result = [];
    while (e = descendants[++i]) {
        ((' ' + (e['class'] || e.className) + ' ').indexOf(' ' + className + ' ') > -1) && result.push(e);
    }
    return result;
}

