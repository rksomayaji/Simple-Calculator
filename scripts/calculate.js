/*
*    Simple Calculator
*    Copyright (C) 2014  Simple Calculator
*
*    This program is free software; you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation; either version 2 of the License, or
*    (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License along
*    with this program; if not, write to the Free Software Foundation, Inc.,
*    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

var keys = document.querySelectorAll('#calculator span');
var operators = ['+','-','*','/'];
var decimalAddedd = false;
var calculated = false;
var isRadian = false;
var shifted = false;
var isRaised = false;

for (var i=0;i<keys.length; i++) {
    keys[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        
        if(!shifted && btnVal == "SFT"){
            var lo = document.getElementById("lo");
            lo.innerHTML = "alog";
            lo = document.getElementById("ln");
            lo.innerHTML = "aln";
            lo = document.getElementById("sq");
            lo.innerHTML = "sqrt";
            lo = document.getElementById("si");
            lo.innerHTML = "asin";
            lo = document.getElementById("co");
            lo.innerHTML = "acos";
            lo = document.getElementById("ta");
            lo.innerHTML = "atan";
            shifted = true;
        }
        else if(shifted && btnVal == "SFT"){
            var lo = document.getElementById("lo");
            lo.innerHTML = "log";
            lo = document.getElementById("ln");
            lo.innerHTML = "ln";
            lo = document.getElementById("sq");
            lo.innerHTML = "sq";
            lo = document.getElementById("si");
            lo.innerHTML = "sin";
            lo = document.getElementById("co");
            lo.innerHTML = "cos";
            lo = document.getElementById("ta");
            lo.innerHTML = "tan";
            shifted = false;
        }
        if(!calculated){
            switch (btnVal) {
                case "x^y":
                    input.innerHTML += "^";
                    isRaised = true;
                    break;
                case "sq":
                    var s = Math.pow(inputVal, 2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "sqrt":
                    var s = Math.pow(inputVal, 1/2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "ln":
                    var s = Math.log(inputVal)
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "log":
                    var dn = Math.log(10);
                    var s = Math.log(inputVal)/dn
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "aln":
                    var s = Math.round(Math.pow(Math.E, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "alog":
                    var s = Math.round(Math.pow(10, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "AC":
                    input.innerHTML = '';
                    decimalAddedd = false;
                    break;
                case "DEG":
                    this.innerHTML = "RAD";
                    isRadian = true;
                    break;
                case "RAD":
                    this.innerHTML = "DEG";
                    isRadian = false;
                    break;
                case "sin":
                    if(isRadian){
                        var s = Math.sin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.sin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "asin":
                    if(isRadian){
                        var s = Math.asin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.asin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "cos":
                    if(isRadian){
                        var s = Math.cos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.cos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "acos":
                    if(isRadian){
                        var s = Math.acos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.acos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "tan":
                    if(isRadian){
                        var s = Math.tan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.tan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "atan":
                    if(isRadian){
                        var s = Math.atan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.atan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "=":
                    var equation = inputVal;
                    var lastChar = equation[equation.length - 1];
                
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                        equation = equation.replace(/.$/,'');
                    }
                
                    if(equation){
                        if (!isRaised){
                            input.innerHTML = eval(equation);
                        }
                        else{
                            var first = equation.split("^")[0];
                            var second = equation.split("^")[1];
                            input.innerHTML = Math.pow(first,second);
                            isRaised = false;
                        }
                    }
                    
                    if((eval(equation)%1 == 0)){
                        decimalAddedd = false;
                    }
                    else{
                        decimalAddedd = true;
                    }
                    calculated = true;
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    var lastChar = inputVal[inputVal.length - 1];
                
                    if(inputVal != '' && operators.indexOf(lastChar) == -1)
                        input.innerHTML += btnVal;
                    
                    else if(inputVal == '' && btnVal == '-')
                        input.innerHTML += btnVal;
                        
                    if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                        input.innerHTML = inputVal.replace(/.$/,btnVal);
                    }
                    decimalAddedd = false;
                    break;
                case ".":
                    if(!decimalAddedd){
                        input.innerHTML += btnVal;
                        decimalAddedd = true;
                    }
                    break;
                case "SFT":
                    break;
                default:
                    input.innerHTML += btnVal;
            }
        }
        else{
            switch (btnVal) {
                case "x^y":
                    input.innerHTML += "^";
                    isRaised = true;
                    break;
                case "sq":
                    var s = Math.pow(inputVal, 2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "sqrt":
                    var s = Math.pow(inputVal, 1/2);
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "ln":
                    var s = Math.log(inputVal)
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "log":
                    var dn = Math.log(10);
                    var s = Math.log(inputVal)/dn;
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "aln":
                    var s = Math.round(Math.pow(Math.E, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "alog":
                    var s = Math.round(Math.pow(10, inputVal));
                    var q = s.toString();
                    input.innerHTML = q;
                    calculated = true;
                    break;
                case "DEG":
                    this.innerHTML = "RAD";
                    isRadian = true;
                    break;
                case "RAD":
                    this.innerHTML = "DEG";
                    isRadian = false;
                    break;
                case "AC":
                    input.innerHTML = '';
                    decimalAddedd = false;
                    break;
                case "sin":
                    if(isRadian){
                        var s = Math.sin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.sin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "asin":
                    if(isRadian){
                        var s = Math.asin(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.asin(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "cos":
                    if(isRadian){
                        var s = Math.cos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.cos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "acos":
                    if(isRadian){
                        var s = Math.acos(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.acos(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "tan":
                    if(isRadian){
                        var s = Math.tan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.tan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "atan":
                    if(isRadian){
                        var s = Math.atan(inputVal);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    else{
                        rad = inputVal * Math.PI/180;
                        var s = Math.atan(rad);
                        var p = s.toString();
                        input.innerHTML = p;
                        calculated = true;
                    }
                    break;
                case "=":
                    var equation = inputVal;
                    var lastChar = equation[equation.length - 1];
                
                    if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                        equation = equation.replace(/.$/,'');
                    }
                
                    if(equation){
                        if (!isRaised){
                            input.innerHTML = eval(equation);
                        }
                        else{
                            var first = equation.split("^")[0];
                            var second = equation.split("^")[1];
                            input.innerHTML = Math.pow(first,second);
                            isRaised = false;
                        }
                    }
                    
                    if((eval(equation)%1 == 0)){
                        decimalAddedd = false;
                    }
                    else{
                        decimalAddedd = true;
                    }
                    calculated = true;
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    var lastChar = inputVal[inputVal.length - 1];
                
                    if(inputVal != '' && operators.indexOf(lastChar) == -1)
                        input.innerHTML += btnVal;
                    
                    else if(inputVal == '' && btnVal == '-')
                        input.innerHTML += btnVal;
                        
                    if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                        input.innerHTML = inputVal.replace(/.$/,btnVal);
                    }
                    decimalAddedd = false;
                    break;
                case ".":
                    if(!decimalAddedd){
                        input.innerHTML += btnVal;
                        decimalAddedd = true;
                    }
                    break;
                case "SFT":
                    break;
                default:
                    input.innerHTML = btnVal;
            }
            calculated = false;
        }
        
        e.preventDefault();
    }
}
